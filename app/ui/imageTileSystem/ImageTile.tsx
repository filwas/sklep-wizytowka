"use client";

import styles from "./ImageTile.module.css";
import { useEffect, useState } from "react";
import SplashScreen from "./SplashScreen";
import { CloudinaryResource } from "@/app/types/types";
import { useCloudinary } from "@/app/providers";
import { AdvancedImage, lazyload } from "@cloudinary/react";
import useIsSmallScreen from "@/utils/useIsSmallScreen";
import classNames from "classnames";
import { auto as autoResize } from "@cloudinary/url-gen/actions/resize";
import { auto as autoQuality } from "@cloudinary/url-gen/qualifiers/quality";
import { auto as autoFormat } from "@cloudinary/url-gen/qualifiers/format";
import { autoGravity } from "@cloudinary/url-gen/qualifiers/gravity";
import { format, quality } from "@cloudinary/url-gen/actions/delivery";

interface ImageTileProps {
  productResources: CloudinaryResource[];
  productName: string;
}

const ImageTile = (props: ImageTileProps) => {
  const itemName = props.productName.replaceAll(/\d+/gi, "");
  const isSmallScreen = useIsSmallScreen(768);
  const nameStyles = classNames(
    isSmallScreen ? styles.smallItemName : styles.bigItemName
  );

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

  const fotos = props.productResources.slice().filter((resource) => {
    return resource.resource_type == "image";
  });
  const description = props.productResources.slice().filter((resource) => {
    return resource.resource_type == "raw";
  })[0];

  const cld = useCloudinary();

  const thumbObject =
    fotos.find((object) => object.public_id.includes("thumbnail")) || fotos[0];

  const thumbImg = cld
    .image(thumbObject.public_id)
    .resize(autoResize().width(1000).height(1000).gravity(autoGravity()))
    .delivery(quality(autoQuality()))
    .delivery(format(autoFormat()));

  return (
    <>
      <div className={styles.imageTileWrapper} onClick={handleTileClick}>
        <div className={nameStyles}>{itemName}</div>
        <AdvancedImage cldImg={thumbImg} plugins={[lazyload()]} />
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
