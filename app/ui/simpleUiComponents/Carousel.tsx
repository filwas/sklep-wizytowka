"use client";

import styles from "./Carousel.module.css";
import { useState } from "react";
import ArrowIcon from "../icons/ArrowIcon";
import { CloudinaryResource } from "@/app/types/types";
import { Cloudinary } from "@cloudinary/url-gen/index";
import { AdvancedImage } from "@cloudinary/react";

interface CarouselProps {
  fotos: CloudinaryResource[];
}

const Carousel = (props: CarouselProps) => {
  const [carouselPosition, setCarouselPosition] = useState(0);
  const cld = new Cloudinary({
    cloud: {
      cloudName: process.env.CLOUD_NAME,
    },
  });

  console.log(props.fotos);
  

  const displayedImage = cld.image(props.fotos[carouselPosition].url);

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
      <ArrowIcon side="left" onClick={handleCarouselPosition} />
      <AdvancedImage cldImg={displayedImage} />
      <ArrowIcon side="right" onClick={handleCarouselPosition} />
    </div>
  );
};

export default Carousel;
