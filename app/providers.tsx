"use client";

import React, { createContext, useContext } from "react";
import { Cloudinary } from "@cloudinary/url-gen/index";
import { ParallaxProvider } from "react-scroll-parallax";

const CloudinaryContext = createContext<Cloudinary | null>(null);
export const useCloudinary = () => useContext(CloudinaryContext)!;

function CloudinaryProvider({ children }: { children: React.ReactNode }) {
  const cld = new Cloudinary({
    cloud: {
      cloudName: process.env.NEXT_PUBLIC_CLOUD_NAME,
    },
  });

  return (
    <CloudinaryContext.Provider value={cld}>
      {children}
    </CloudinaryContext.Provider>
  );
}

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ParallaxProvider>
      <CloudinaryProvider>{children}</CloudinaryProvider>
    </ParallaxProvider>
  );
}
