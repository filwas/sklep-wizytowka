"use client";
import { ListBlobResultBlob } from "@vercel/blob";
import styles from "./ImageTile.module.css";
import { useEffect, useState } from "react";
import SplashScreen from "./SplashScreen";
import { CloudinaryResource, Folder } from "@/app/types/types";
import { useCloudinary } from "@/app/providers";
import { AdvancedImage } from "@cloudinary/react";
import { crop, fill, thumbnail } from "@cloudinary/url-gen/actions/resize";
import { autoGravity } from "@cloudinary/url-gen/qualifiers/gravity";
import { faces } from "@cloudinary/url-gen/qualifiers/focusOn";
import { AspectRatio } from "@cloudinary/url-gen/qualifiers";
import classNames from "classnames";
import { Transformation } from "@cloudinary/url-gen/index";
import { name } from "@cloudinary/url-gen/actions/namedTransformation";

interface ImageTileProps {
  productFolder: Folder;
  fotos: CloudinaryResource[];
  description: CloudinaryResource;
}

const ImageTile = (props: ImageTileProps) => {
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
  const thumbImg = cld.image(fotos[0].public_id).namedTransformation(name("createSquareImage"));

  return (
    <>
      <div className={styles.imageTileWrapper} onClick={handleTileClick}>
        <div className={styles.itemName}>{props.productFolder.name}</div>
        <AdvancedImage cldImg={thumbImg}/>
      </div>
      <SplashScreen
        itemName={props.productFolder.name}
        fotos={fotos}
        description={description}
        isVisible={isSplashOpen}
        closeHandler={handleTileClick}
      />
    </>
  );
};

export default ImageTile;
