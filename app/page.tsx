import { head, list } from "@vercel/blob";
import ImageTile from "./ui/imageTileSystem/ImageTile";
import FotoSegmentWrapper from "./ui/pageSegments/FotoSegmentWrapper";
import Carousel from "./ui/simpleUiComponents/Carousel";
import SplashScreen from "./ui/imageTileSystem/SplashScreen";
import Header from "./ui/Header";
import DescriptionSegmentWrapper from "./ui/pageSegments/DescriptionSegmentWrapper";
import FooterSegmentWrapper from "./ui/pageSegments/FooterSegmentWrapper";

export default async function Home() {
  const { folders } = await list({
    mode: "folded",
    prefix: "FotoTiles/",
  });

  return (
    <>
      <Header folderLinks={folders} />
      <DescriptionSegmentWrapper folder="HomeScreen/" customName="O nas" />
      {folders.map((folder, i) => {
        return <FotoSegmentWrapper folder={folder} key={i} />;
      })}
      <FooterSegmentWrapper folder="HomeScreen/" customName="Kontakt" />
    </>
  );
}
