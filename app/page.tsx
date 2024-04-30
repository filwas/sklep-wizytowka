import { head, list } from "@vercel/blob";
import ImageTile from "./ui/imageTileSystem/ImageTile";
import FotoSegmentWrapper from "./ui/pageSegments/FotoSegmentWrapper";
import Carousel from "./ui/simpleUiComponents/Carousel";
import SplashScreen from "./ui/imageTileSystem/SplashScreen";
import Header from "./ui/Header";
import DescriptionSegmentWrapper from "./ui/pageSegments/DescriptionSegmentWrapper";
import FooterSegmentWrapper from "./ui/pageSegments/FooterSegmentWrapper";
import ParallaxImage from "./ui/pageSegments/ParallaxImage";
import Footer from "./ui/Footer";

export default async function Home() {
  const { folders } = await list({
    mode: "folded",
    prefix: "FotoTiles/",
  });

  const url =
    "https://poemnvz5cpkx5zh6.public.blob.vercel-storage.com/HomeScreen/sauna-ICD3yEptHWD1jeIUsvxj6sPOCBN0dw.jpg";

  return (
    <div>
      <ParallaxImage url={url}/>
      <Header folderLinks={folders} />
      <DescriptionSegmentWrapper folder="HomeScreen/" customName="O nas" />
      {folders.map((folder, i) => {
        return <FotoSegmentWrapper folder={folder} key={i} />;
      })}
      <DescriptionSegmentWrapper folder="HomeScreen/" customName="Kontakt" />
      <Footer />
    </div>
  );
}
