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
  isVisible: boolean;
  fotos: CloudinaryResource[];
  description: CloudinaryResource;
  closeHandler?: () => void;
}

const SplashScreen = (props: SplashScreenProps) => {
  const isSmallScreen = useIsSmallScreen(768);

  const splashScreenWrapper = classNames(
    styles.splashScreenWrapper,
    props.isVisible ? styles.visible : ""
  );

  const carouselPlusTextWrapper = classNames(
    styles.carouselPlusTextWrapper,
    isSmallScreen ? styles.carouselPlusTextSmall : ""
  );

  const splashCarouselWrapper = classNames(
    styles.splashCarouselWrapper,
    isSmallScreen ? styles.carouselSmall : styles.carouselBig
  );

  const textWrapper = classNames(
    styles.textWrapper,
    isSmallScreen ? styles.textSmall : styles.textBig
  );

  return (
    <div className={splashScreenWrapper}>
      <div className={carouselPlusTextWrapper}>
        <div className={splashCarouselWrapper}>
          {isSmallScreen && <h1>{props.itemName}</h1>}
          <Carousel fotos={props.fotos} />
        </div>
        <div className={textWrapper}>
          {!isSmallScreen && <h1>{props.itemName}</h1>}
          <TextElement textSourceUrl={props.description.secure_url} />
        </div>
      </div>
      <button onClick={props.closeHandler}>
        <CrossIcon />
      </button>
    </div>
  );
};

export default SplashScreen;
