"use client";

import styles from "./SplashScreen.module.css";
import Carousel from "../simpleUiComponents/Carousel";
import CrossIcon from "../icons/CrossIcon";
import TextElement from "../simpleUiComponents/TextElement";
import useIsSmallScreen from "@/utils/useIsSmallScreen";
import { CloudinaryResource } from "@/app/types/types";
import classNames from "classnames";
import { Dispatch, SetStateAction, useState } from "react";

interface SplashScreenProps {
  itemName: string;
  isVisible: boolean;
  setIsVisible: Dispatch<SetStateAction<boolean>>;
  fotos: CloudinaryResource[];
  description: CloudinaryResource;
}

const SplashScreen = (props: SplashScreenProps) => {
  const [isClosing, setIsClosing] = useState(false);
  const isSmallScreen = useIsSmallScreen(768);

  const splashScreenWrapper = classNames(
    styles.splashScreenWrapper,
    props.isVisible ? styles.visible : "",
    isClosing ? styles.closing : ""
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

  const closeHandler = () => {
    setIsClosing(true);
    setTimeout(() => {
      props.setIsVisible(false);
      setIsClosing(false);
    }, 750);
  };

  props.fotos.sort((a, b) => {
    const getNumbers = (str: String) =>
      parseInt(str.replace(/\D/g, "") || "0", 10);
    return getNumbers(a.public_id) - getNumbers(b.public_id);
  });

  return (
    <div className={splashScreenWrapper}>
      <div className={styles.overflowWrapper}>
        <div className={carouselPlusTextWrapper}>
          <div className={splashCarouselWrapper}>
            {isSmallScreen && <h1>{props.itemName.toUpperCase()}</h1>}
            <Carousel fotos={props.fotos} />
          </div>
          <div className={textWrapper}>
            {!isSmallScreen && <h1>{props.itemName.toUpperCase()}</h1>}
            <TextElement textSourceUrl={props.description.secure_url} />
          </div>
        </div>
      </div>
      <button onClick={closeHandler}>
        <CrossIcon />
      </button>
    </div>
  );
};

export default SplashScreen;
