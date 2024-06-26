"use client";

import styles from "./Carousel.module.css";
import { useState } from "react";
import ArrowIcon from "../icons/ArrowIcon";
import { CloudinaryResource } from "@/app/types/types";
import { AdvancedImage, placeholder } from "@cloudinary/react";
import { autoPad } from "@cloudinary/url-gen/actions/resize";
import { autoGravity } from "@cloudinary/url-gen/qualifiers/gravity";
import { format, quality } from "@cloudinary/url-gen/actions/delivery";
import { auto as autoQuality } from "@cloudinary/url-gen/qualifiers/quality";
import useIsSmallScreen from "@/utils/useIsSmallScreen";
import { auto as autoFormat } from "@cloudinary/url-gen/qualifiers/format";
import { Cloudinary } from "@cloudinary/url-gen/index";

interface CarouselProps {
  fotos: CloudinaryResource[];
}

const Carousel = (props: CarouselProps) => {
  const [carouselPosition, setCarouselPosition] = useState(0);
  const isSmallScreen = useIsSmallScreen(768);
  const cld = new Cloudinary({
    cloud: {
      cloudName: process.env.NEXT_PUBLIC_CLOUD_NAME,
    },
  });

  const displayedImage = cld
    .image(props.fotos[carouselPosition].public_id)
    .resize(autoPad().width(1200).height(800).gravity(autoGravity()))
    .delivery(quality(autoQuality()))
    .delivery(format(autoFormat()));

  const handleCarouselPosition = (side: string) => {
    const fotoArrayLength = props.fotos.length - 1;
    setCarouselPosition((prev) => {
      if (side === "left") {
        return prev == 0 ? fotoArrayLength : prev - 1;
      } else {
        return prev == fotoArrayLength ? 0 : prev + 1;
      }
    });
  };

  if (isSmallScreen) {
    return (
      <div className={styles.smallCarouselWrapper}>
        <AdvancedImage
          cldImg={displayedImage}
          plugins={[placeholder({ mode: "blur" })]}
        />
        <div className={styles.smallArrowsWrapper}>
          <ArrowIcon
            side="left"
            onClick={() => {
              handleCarouselPosition("left");
            }}
          />
          <div className={styles.smallSeparator} />
          <ArrowIcon
            side="right"
            onClick={() => {
              handleCarouselPosition("right");
            }}
          />
        </div>
      </div>
    );
  } else {
    return (
      <div className={styles.carouselWrapper}>
        <ArrowIcon
          side="left"
          onClick={() => {
            handleCarouselPosition("left");
          }}
        />
        <AdvancedImage
          cldImg={displayedImage}
          plugins={[placeholder({ mode: "blur" })]}
        />
        <ArrowIcon
          side="right"
          onClick={() => {
            handleCarouselPosition("right");
          }}
        />
      </div>
    );
  }
};

export default Carousel;
