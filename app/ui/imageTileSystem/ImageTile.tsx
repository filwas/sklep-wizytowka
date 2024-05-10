"use client";

import styles from "./ImageTile.module.css";
import { useEffect, useState } from "react";
import SplashScreen from "./SplashScreen";
import { CloudinaryResource, Folder } from "@/app/types/types";
import { useCloudinary } from "@/app/providers";
import { AdvancedImage, lazyload } from "@cloudinary/react";
import { name } from "@cloudinary/url-gen/actions/namedTransformation";
import useIsSmallScreen from "@/utils/useIsSmallScreen";
import classNames from "classnames";

interface ImageTileProps {
  productFolder: Folder;
  fotos: CloudinaryResource[];
  description: CloudinaryResource;
}

const ImageTile = (props: ImageTileProps) => {
  const itemName = props.productFolder.name.replaceAll(/\d+/gi,"")
  const isSmallScreen = useIsSmallScreen(768)
  const nameStyles = classNames(isSmallScreen ? styles.smallItemName : styles.bigItemName)

  const [isSplashOpen, setIsSplashOpen] = useState(false);
  const handleTileClick = () => {
    setIsSplashOpen((prev) => !prev);
  };

  useEffect(() => {
    if (isSplashOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isSplashOpen]);

  const fotos = props.fotos;
  const description = props.description;

  const cld = useCloudinary();

  const thumbObject = props.fotos.find(object => object.public_id.includes("thumbnail")) || props.fotos[0]
    
  const thumbImg = cld.image(thumbObject.public_id).namedTransformation(name("createSquareImage"));

  return (
    <>
      <div className={styles.imageTileWrapper} onClick={handleTileClick}>
        <div className={nameStyles}>{itemName}</div>
        <AdvancedImage cldImg={thumbImg} plugins={[lazyload()]}/>
      </div>
      <SplashScreen
        itemName={itemName}
        fotos={fotos}
        description={description}
        isVisible={isSplashOpen}
        closeHandler={handleTileClick}
      />
    </>
  );
};

export default ImageTile;
