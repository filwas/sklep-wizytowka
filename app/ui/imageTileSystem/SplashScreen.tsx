"use client";

import { ListBlobResultBlob } from "@vercel/blob";
import styles from "./SplashScreen.module.css";
import Carousel from "../simpleUiComponents/Carousel";
import { useEffect, useState } from "react";
import CrossIcon from "./CrossIcon";

interface SplashScreenProps {
  itemName: string;
  fotoBlobs: ListBlobResultBlob[];
  textBlobs: ListBlobResultBlob[];
  closeHandler: () => void;
}

const SplashScreen = (props: SplashScreenProps) => {
  const [fileContents, setFileContents] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(props.textBlobs[0].url);
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const text = await response.text();
        setFileContents(text);
      } catch (error) {
        console.error("Error fetching file:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className={styles.splasScreenWrapper}>
      <Carousel fotoBlobs={props.fotoBlobs} />
      <div className={styles.textWrapper}>
        <h1>{props.itemName}</h1>
        <div>{fileContents}</div>
      </div>
      <div className={styles.buttonWrapper}>
        <button onClick={props.closeHandler}>
          <CrossIcon />
        </button>
      </div>
    </div>
  );
};

export default SplashScreen;
