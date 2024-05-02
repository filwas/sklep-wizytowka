import FotoSegmentWrapper from "./ui/pageSegments/FotoSegmentWrapper";

import Header from "./ui/Header";
import DescriptionSegmentWrapper from "./ui/pageSegments/DescriptionSegmentWrapper";

import ParallaxImage from "./ui/pageSegments/ParallaxImage";
import Footer from "./ui/Footer";
import { listSubfolders } from "./api/api";
import { Cloudinary } from "@cloudinary/url-gen/index";

export default async function Home() {
  const fotoFolders = (await listSubfolders("FotoTiles")).folders

  //TODO: funkcja robiaca kolumny imageTilesow skokowo od szerokosci ekranu, imageTile width = 100%
  //ilosc kolumn = Math.floor(1+szerokosc ekranu/840px) czy cos takiego
  const url =
    "https://poemnvz5cpkx5zh6.public.blob.vercel-storage.com/HomeScreen/sauna-ICD3yEptHWD1jeIUsvxj6sPOCBN0dw.jpg";

  return (
    <div>
      <ParallaxImage url={url}/>
      <Header folders={fotoFolders} />
      <DescriptionSegmentWrapper folder="HomeScreen/" customName="O nas" />
      {fotoFolders.map((folder, i) => {
        return <FotoSegmentWrapper folder={folder} key={i} />;
      })}
      <DescriptionSegmentWrapper folder="HomeScreen/" customName="Kontakt" />
      <Footer />
    </div>
  );
}
