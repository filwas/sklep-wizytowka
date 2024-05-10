"use client";
import { CloudinaryResource } from "@/app/types/types";
import styles from "./ParallaxImage.module.css";

import { ParallaxBanner, ParallaxBannerLayer } from "react-scroll-parallax";
import { useCloudinary } from "@/app/providers";
import { AdvancedImage } from "@cloudinary/react";

import { name } from "@cloudinary/url-gen/actions/namedTransformation";

interface ParallaxImageProps {
  foto: CloudinaryResource;
}

export default function ParallaxImage(props: ParallaxImageProps) {
  const cld = useCloudinary();
  const image = cld.image(props.foto.public_id).namedTransformation(name("createParallaxImage"));
  
  return (
    <div className={styles.parallaxWrapper} id="">
      <ParallaxBanner style={{ aspectRatio: "2/1" }}>
        <ParallaxBannerLayer style={{ zIndex: "1000" }}>
          <div className={styles.parallaxText}>
            <h1>OGRODOWY CHILLOUT</h1>
            <h2>SAUNY, BALIE I AKCESORIA</h2>
          </div>
        </ParallaxBannerLayer>
        <ParallaxBannerLayer speed={-50} >
          <AdvancedImage cldImg={image} style={{width:"100%"}}/>
        </ParallaxBannerLayer>
      </ParallaxBanner>
    </div>
  );
}
