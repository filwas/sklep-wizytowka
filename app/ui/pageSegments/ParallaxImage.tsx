"use client";
import styles from "./ParallaxImage.module.css";

import { ParallaxBanner, ParallaxBannerLayer } from "react-scroll-parallax";

interface ParallaxImageProps {
  url: string;
}

export default function ParallaxImage(props: ParallaxImageProps) {
  return (
    <div className={styles.parallaxWrapper}>
      <h1>SAUNY</h1>
      <h3>dwadzieścia cztery pe el</h3>
      <ParallaxBanner style={{ aspectRatio: "1 / 1" }}>
        <ParallaxBannerLayer image={props.url} speed={-100} />
      </ParallaxBanner>
    </div>
  );
}
