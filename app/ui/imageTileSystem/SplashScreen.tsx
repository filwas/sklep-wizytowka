"use client";

import styles from "./SplashScreen.module.css";
import Carousel from "../simpleUiComponents/Carousel";

import CrossIcon from "./CrossIcon";
import TextElement from "../simpleUiComponents/TextElement";
import { CloudinaryResource } from "@/app/types/types";

interface SplashScreenProps {
  itemName: string;
  fotos: CloudinaryResource[];
  description: CloudinaryResource;
  closeHandler: () => void;
}

const SplashScreen = (props: SplashScreenProps) => {     

  return (
    <div className={styles.splasScreenWrapper}>
      <div className={styles.carouselPlusTextWrapper}>
        <Carousel fotos={props.fotos} />
        <div className={styles.textWrapper}>
          <h1>{props.itemName}</h1>
          <TextElement textSourceUrl={props.description.url} />
        </div>
      </div>
      <button onClick={props.closeHandler}>
        <CrossIcon />
      </button>
    </div>
  );
};

export default SplashScreen;
