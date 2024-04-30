"use client";

import { ListBlobResultBlob } from "@vercel/blob";
import styles from "./Carousel.module.css";
import { useState } from "react";
import ArrowIcon from "../icons/ArrowIcon";

interface CarouselProps {
  fotoBlobs: ListBlobResultBlob[];
}

const Carousel = (props: CarouselProps) => {
  const [carouselPosition, setCarouselPosition] = useState(0);

  const handleCarouselPosition = (side: string) => {
    const fotoArrayLength = props.fotoBlobs.length - 1;
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
      <img src={props.fotoBlobs[carouselPosition].url} />
      <ArrowIcon side="right" onClick={handleCarouselPosition} />
    </div>
  );
};

export default Carousel;
