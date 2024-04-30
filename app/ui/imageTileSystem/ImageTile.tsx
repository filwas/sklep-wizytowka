"use client";
import { ListBlobResultBlob } from "@vercel/blob";
import styles from "./ImageTile.module.css";
import { useState } from "react";
import SplashScreen from "./SplashScreen";

interface ImageTileProps {
  itemName: string;
  blobData: ListBlobResultBlob[];
}

const ImageTile = (props: ImageTileProps) => {
  const [isSplashOpen, setIsSplashOpen] = useState(false);
  const fotoBlobs = props.blobData.filter((blob) => blob.url.endsWith(".jpg"));
  const textBlobs = props.blobData.filter((blob) => blob.url.endsWith(".txt"));

  const handleTileClick = () => {
    setIsSplashOpen((prev) => !prev);
  };

  return (
    <>
      <div className={styles.imageTileWrapper} onClick={handleTileClick}>
        <div className={styles.itemName}>{props.itemName}</div>
        <img src={fotoBlobs[0].url} alt={props.itemName} />
      </div>
      {isSplashOpen && (
        <div className={styles.splashWrap}>
          <SplashScreen
            itemName={props.itemName}
            fotoBlobs={fotoBlobs}
            textBlobs={textBlobs}
            closeHandler={handleTileClick}
          />
        </div>
      )}
    </>
  );
};

export default ImageTile;
