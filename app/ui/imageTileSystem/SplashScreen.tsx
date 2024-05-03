"use client";

import styles from "./SplashScreen.module.css";
import Carousel from "../simpleUiComponents/Carousel";

import CrossIcon from "./CrossIcon";
import TextElement from "../simpleUiComponents/TextElement";
import useIsSmallScreen from "@/utils/useIsSmallScreen";
import { CloudinaryResource } from "@/app/types/types";
import classNames from "classnames";

interface SplashScreenProps {
  itemName: string;
  fotos: CloudinaryResource[];
  description: CloudinaryResource;
  closeHandler: () => void;
}

const SplashScreen = (props: SplashScreenProps) => {
  const isSmallScreen = useIsSmallScreen(768);

  return (
    <div className={styles.splashScreenWrapper}>
      <div
        className={styles.carouselPlusTextWrapper}
        style={{ flexDirection: isSmallScreen ? "column" : "row" }}
      >
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
