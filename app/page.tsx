import FotoSegmentWrapper from "./ui/pageSegments/FotoSegmentWrapper";

import Header from "./ui/Header";
import DescriptionSegmentWrapper from "./ui/pageSegments/DescriptionSegmentWrapper";

import ParallaxImage from "./ui/pageSegments/ParallaxImage";
import Footer from "./ui/Footer";
import { listAllAssets, listAllImages, listSubfolders } from "./api/api";
import UpButton from "./ui/simpleUiComponents/UpButton";
import { CloudinaryResource, Folder } from "./types/types";
import folderSorter from "./helpers/folderSorter";

export default async function Home() {
  const fotoFolders = (await listSubfolders("FotoTiles")).folders;
  const parallaxPhoto = (await listAllImages("Descriptions")).resources;
  const descripAssets = (await listAllAssets("Descriptions")).resources;

  const oNasFile = descripAssets.find((file) => {
    return file.public_id.toLowerCase().includes("onas");
  }) as CloudinaryResource;

  const kontaktFile = descripAssets.find((file) => {
    return file.public_id.toLowerCase().includes("kontakt");
  }) as CloudinaryResource;

  //TODO: funkcja robiaca kolumny imageTilesow skokowo od szerokosci ekranu, imageTile width = 100%
  //ilosc kolumn = Math.floor(1+szerokosc ekranu/840px) czy cos takiego

  //albo moze zamiast tego co na gorze jakos ogarnac po prostu zeby wielkosc obrazka nie byla taka sztywna


  //TODO dwa: dodac onloading dla fotek!!!!!



  fotoFolders.sort(folderSorter);
  
  return (
    <div style={{ position: "absolute", width: "100%" }}>
      <Header folders={fotoFolders} />
      <ParallaxImage foto={parallaxPhoto[0]} />
      <UpButton />
      <DescriptionSegmentWrapper
        descriptionTextFile={oNasFile}
        customName="O nas"
      />
      {fotoFolders.map((folder, i) => {
        return <FotoSegmentWrapper folder={folder} key={i} />;
      })}
      <DescriptionSegmentWrapper
        descriptionTextFile={kontaktFile}
        customName="Kontakt"
      />
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
