"use client";
import { ListBlobResultBlob } from "@vercel/blob";
import styles from "./ImageTile.module.css";
import { useState } from "react";
import SplashScreen from "./SplashScreen";
import { CloudinaryResource, Folder } from "@/app/types/types";
import { listAllAssets, listAllImages } from "@/app/api/api";
import { AdvancedImage } from "@cloudinary/react";
import { Cloudinary } from "@cloudinary/url-gen/index";
import { useCloudinary } from "@/app/providers";

interface ImageTileProps {
  productFolder: Folder;
  fotos: CloudinaryResource[];
  description: CloudinaryResource;
}

const ImageTile = (props: ImageTileProps) => {
  const [isSplashOpen, setIsSplashOpen] = useState(false);
  const fotos = props.fotos;
  const description = props.description;

  const cld = useCloudinary();
  const thumbImg = cld.image(fotos[0].public_id);

  const handleTileClick = () => {
    setIsSplashOpen((prev) => !prev);
  };

  return (
    <>
      <div className={styles.imageTileWrapper} onClick={handleTileClick}>
        <div className={styles.itemName}>{props.productFolder.name}</div>
        <AdvancedImage cldImg={thumbImg} />
      </div>
      {isSplashOpen && (
        <div className={styles.splashWrap}>
          <SplashScreen
            itemName={props.productFolder.name}
            fotos={fotos}
            description={description}
            closeHandler={handleTileClick}
          />
        </div>
      )}
    </>
  );
};

export default ImageTile;
