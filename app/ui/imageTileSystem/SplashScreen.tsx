"use client";

import { ListBlobResultBlob } from "@vercel/blob";
import styles from "./SplashScreen.module.css";
import Carousel from "../simpleUiComponents/Carousel";
import { useEffect, useState } from "react";
import CrossIcon from "./CrossIcon";
import TextElement from "../simpleUiComponents/TextElement";

interface SplashScreenProps {
  itemName: string;
  fotoBlobs: ListBlobResultBlob[];
  textBlobs: ListBlobResultBlob[];
  closeHandler: () => void;
}

const SplashScreen = (props: SplashScreenProps) => {
  return (
    <div className={styles.splasScreenWrapper}>
      <div className={styles.carouselPlusTextWrapper}>
        <Carousel fotoBlobs={props.fotoBlobs} />
        <div className={styles.textWrapper}>
          <h1>{props.itemName}</h1>
          <TextElement textSourceUrl={props.textBlobs[0].url} />
        </div>
      </div>
      <button onClick={props.closeHandler}>
        <CrossIcon />
      </button>
    </div>
  );
};

export default SplashScreen;