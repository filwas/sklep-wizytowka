"use client";
import { CloudinaryResource } from "@/app/types/types";
import styles from "./ParallaxImage.module.css";

import { ParallaxBanner, ParallaxBannerLayer } from "react-scroll-parallax";
import { useCloudinary } from "@/app/providers";
import { AdvancedImage } from "@cloudinary/react";
import { fill, thumbnail } from "@cloudinary/url-gen/actions/resize";
import { AspectRatio } from "@cloudinary/url-gen/qualifiers";
import { ar16X9 } from "@cloudinary/url-gen/qualifiers/aspectRatio";
import { Cloudinary } from "@cloudinary/url-gen/index";
import { focusOn } from "@cloudinary/url-gen/qualifiers/gravity";
import { faces } from "@cloudinary/url-gen/qualifiers/focusOn";

interface ParallaxImageProps {
  foto: CloudinaryResource;
}

export default function ParallaxImage(props: ParallaxImageProps) {
  const cld = useCloudinary();
  const image = cld.image(props.foto.public_id).resize(
    fill()
      .aspectRatio(9 / 16)
      .gravity(focusOn(faces()))
  );
  return (
    <div className={styles.parallaxWrapper} id="">
      <ParallaxBanner style={{ aspectRatio: "2/1" }}>
        <ParallaxBannerLayer style={{ zIndex: "1000" }}>
          <div className={styles.parallaxText}>
            <h1>WUWUWU SAUNY</h1>
            <h2>DWADZIEŚCIA CZTERY PE EL</h2>
          </div>
        </ParallaxBannerLayer>
        <ParallaxBannerLayer speed={-50} >
          <AdvancedImage cldImg={image} style={{width:"100%"}}/>
        </ParallaxBannerLayer>
      </ParallaxBanner>
    </div>
  );
}
