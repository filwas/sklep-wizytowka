"use client";
import { ListBlobResultBlob } from "@vercel/blob";
import styles from "./ImageTile.module.css";
import { useState } from "react";
import SplashScreen from "./SplashScreen";
import { Folder } from "@/app/types/types";
import { listAllAssets, listAllImages } from "@/app/api/api";
import { AdvancedImage } from "@cloudinary/react";
import { Cloudinary } from "@cloudinary/url-gen/index";

interface ImageTileProps {
  productFolder: Folder;
}

const ImageTile = async (props: ImageTileProps) => {
  const [isSplashOpen, setIsSplashOpen] = useState(false);

  const fotos = (await listAllImages(props.productFolder.path)).resources;
  const description = (await listAllAssets(props.productFolder.path))
    .resources[0];

  console.log(description);

  const cld = new Cloudinary({
    cloud: {
      cloudName: process.env.CLOUD_NAME,
    },
  })

  const newImg = cld.image(fotos[0].public_id);

  fotos.forEach((foto) =>
    console.log(props.productFolder.name, foto.resource_type)
  );

  const handleTileClick = () => {
    setIsSplashOpen((prev) => !prev);
  };

  return (
    <>
      <div className={styles.imageTileWrapper} onClick={handleTileClick}>
        <div className={styles.itemName}>{props.productFolder.name}</div>
        <AdvancedImage cldImg={newImg} />
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
      </div>
    </>
  );
};

export default ImageTile;

/**
 *     <>
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
 */
