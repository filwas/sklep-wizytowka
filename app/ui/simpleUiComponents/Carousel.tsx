"use client";

import styles from "./Carousel.module.css";
import { useState } from "react";
import ArrowIcon from "../icons/ArrowIcon";
import { CloudinaryResource } from "@/app/types/types";
import { AdvancedImage } from "@cloudinary/react";
import { useCloudinary } from "@/app/providers";
import { AspectRatio } from "@cloudinary/url-gen/qualifiers";
import { ar16X9 } from "@cloudinary/url-gen/qualifiers/aspectRatio";
import { autoPad, fill } from "@cloudinary/url-gen/actions/resize";
import { name } from "@cloudinary/url-gen/actions/namedTransformation";
import { generativeFill } from "@cloudinary/url-gen/qualifiers/background";
import { autoGravity } from "@cloudinary/url-gen/qualifiers/gravity";

interface CarouselProps {
  fotos: CloudinaryResource[];
}

const Carousel = (props: CarouselProps) => {
  const [carouselPosition, setCarouselPosition] = useState(0);
  const cld = useCloudinary();

  const displayedImage = cld
    .image(props.fotos[carouselPosition].public_id).resize(
      autoPad()
        .width(1200)
        .height(800)
        .gravity(autoGravity())
        .background(generativeFill())
    );

  const handleCarouselPosition = (side: string) => {
    const fotoArrayLength = props.fotos.length - 1;
    setCarouselPosition((prev) => {
      if ((side === "left")) {
        return prev == 0 ? fotoArrayLength : prev - 1;
      } else {
        return prev == fotoArrayLength ? 0 : prev + 1;
      }
    });
  };

  return (
    <div className={styles.carouselWrapper}>
      <ArrowIcon
        side="left"
        onClick={() => {
          handleCarouselPosition("left");
        }}
      />
      <AdvancedImage cldImg={displayedImage} />
      <ArrowIcon
        side="right"
        onClick={() => {
          handleCarouselPosition("right");
        }}
      />
    </div>
  );
};

export default Carousel;
