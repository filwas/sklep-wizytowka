"use client";

import { CloudinaryResource } from "@/app/types/types";
import styles from "./ParallaxImage.module.css";
import { ParallaxBanner, ParallaxBannerLayer } from "react-scroll-parallax";
import { useCloudinary } from "@/app/providers";
import { AdvancedImage } from "@cloudinary/react";
import { crop } from "@cloudinary/url-gen/actions/resize";
import { autoGravity } from "@cloudinary/url-gen/qualifiers/gravity";
import { format, quality } from "@cloudinary/url-gen/actions/delivery";
import { auto as autoQuality } from "@cloudinary/url-gen/qualifiers/quality";
import { auto as autoFormat } from "@cloudinary/url-gen/qualifiers/format";
import useGetScreenWidth from "@/utils/useGetScreenWidth";

interface ParallaxImageProps {
  foto: CloudinaryResource;
}

export default function ParallaxImage(props: ParallaxImageProps) {
  const cld = useCloudinary();

  const image = cld
    .image(props.foto.public_id)
    .resize(
      crop()
        .height(useGetScreenWidth() + 2000)
        .aspectRatio("9:16")
        .gravity(autoGravity())
    )
    .delivery(quality(autoQuality()))
    .delivery(format(autoFormat()));

  return (
    <div className={styles.parallaxWrapper} id="">
      <ParallaxBanner style={{ aspectRatio: "1.8/1" }}>
        <ParallaxBannerLayer style={{ zIndex: "1000" }}>
          <div className={styles.parallaxText}>
            <h1>OGRODOWY CHILLOUT</h1>
            <h2>SAUNY, BALIE I AKCESORIA</h2>
          </div>
        </ParallaxBannerLayer>
        <ParallaxBannerLayer speed={-50}>
          <AdvancedImage cldImg={image} style={{width: "100%"}} />
        </ParallaxBannerLayer>
      </ParallaxBanner>
    </div>
  );
}
