
import FotoSegmentWrapper from "./ui/pageSegments/FotoSegmentWrapper";

import Header from "./ui/Header";
import DescriptionSegmentWrapper from "./ui/pageSegments/DescriptionSegmentWrapper";

import ParallaxImage from "./ui/pageSegments/ParallaxImage";
import Footer from "./ui/Footer";
import { listAllAssets, listAllImages, listSubfolders } from "./api/api";
import UpButton from "./ui/simpleUiComponents/UpButton";
import Carousel from "./ui/simpleUiComponents/Carousel";
import SplashScreen from "./ui/imageTileSystem/SplashScreen";

export default async function Home() {
  const fotoFolders = (await listSubfolders("FotoTiles")).folders;
  const descripFolders = (await listSubfolders("Descriptions")).folders;
  const parallaxPhoto = (await listAllImages("Descriptions")).resources;


  //TODO: funkcja robiaca kolumny imageTilesow skokowo od szerokosci ekranu, imageTile width = 100%
  //ilosc kolumn = Math.floor(1+szerokosc ekranu/840px) czy cos takiego

  //albo moze zamiast tego co na gorze jakos ogarnac po prostu zeby wielkosc obrazka nie byla taka sztywna

  //z jakiegos powodu tekst w splashu sie nie wczytuje

  //trzeba splash ogarnac w koncu

  return (
    <div style={{ position: "absolute", width: "100%" }}>
    <Header folders={fotoFolders} />
    <ParallaxImage foto={parallaxPhoto[0]} />
    <UpButton />
    <DescriptionSegmentWrapper folder="HomeScreen/" customName="O nas" />
    {fotoFolders.map((folder, i) => {
      return <FotoSegmentWrapper folder={folder} key={i} />;
    })}
    <DescriptionSegmentWrapper folder="HomeScreen/" customName="Kontakt" />
    <Footer />
  </div>
  );
}

/**
      <div style={{ position: "absolute", width: "100%" }}>
      <Header folders={fotoFolders} />
      <ParallaxImage foto={parallaxPhoto[0]} />
      <UpButton />
      <DescriptionSegmentWrapper folder="HomeScreen/" customName="O nas" />
      {fotoFolders.map((folder, i) => {
        return <FotoSegmentWrapper folder={folder} key={i} />;
      })}
      <DescriptionSegmentWrapper folder="HomeScreen/" customName="Kontakt" />
      <Footer />
    </div>
 */
