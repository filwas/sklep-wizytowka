"use client";

import styles from "./Carousel.module.css";
import { useState } from "react";
import ArrowIcon from "../icons/ArrowIcon";
import { CloudinaryResource } from "@/app/types/types";
import { AdvancedImage } from "@cloudinary/react";
import { useCloudinary } from "@/app/providers";

interface CarouselProps {
  fotos: CloudinaryResource[];
}

const Carousel = (props: CarouselProps) => {
  const [carouselPosition, setCarouselPosition] = useState(0);
  const cld = useCloudinary()

  const displayedImage = cld.image(props.fotos[carouselPosition].public_id);

  const handleCarouselPosition = (side: string) => {
    const fotoArrayLength = props.fotos.length - 1;
    setCarouselPosition((prev) => {
      if ((side = "left")) {
        return prev == 0 ? fotoArrayLength : prev - 1;
      } else {
        return prev == fotoArrayLength ? 0 : prev + 1;
      }
    });
  };

  return (
    <div className={styles.carouselWrapper}>
      <ArrowIcon side="left" onClick={() => {handleCarouselPosition("left")}} />
      <AdvancedImage
        cldImg={displayedImage}
        style={{
          position: "relative",
          width: "100%",
          height: "100%",
        }}
      />
      <ArrowIcon side="right" onClick={() => {handleCarouselPosition("right")}} />
    </div>
  );
};

export default Carousel;
