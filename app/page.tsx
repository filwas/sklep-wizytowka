import FotoSegmentWrapper from "./ui/pageSegments/FotoSegmentWrapper";
import Header from "./ui/headerAndFooter/Header";
import DescriptionSegmentWrapper from "./ui/pageSegments/DescriptionSegmentWrapper";
import ParallaxImage from "./ui/pageSegments/ParallaxImage";
import Footer from "./ui/headerAndFooter/Footer";
import { listTotalAssets, listTotalImages } from "./api/api";
import { CloudinaryResource, FolderStructure } from "./types/types";
import useGetFolderStructure from "@/utils/useGetFolderStructure";

export default async function Home() {
  const totalImages = await listTotalImages(500);
  const totalAssets = await listTotalAssets(500);

  const combinedAssets = [...totalImages.resources, ...totalAssets.resources];

  const folderStructure = useGetFolderStructure(combinedAssets);
  const fotoTilesFolderStructure = folderStructure[
    "FotoTiles"
  ] as FolderStructure;
  const fotoSegmentNames = Object.keys(fotoTilesFolderStructure);

  fotoSegmentNames.sort((a: string, b: string) => {
    const numA = parseInt(a.match(/\d/g)?.[0] ?? "");
    const numB = parseInt(b.match(/\d/g)?.[0] ?? "");
    return numA - numB;
  });

  const descriptionAssets = folderStructure[
    "Descriptions"
  ] as CloudinaryResource[];

  const oNasFile = descriptionAssets.find((file) => {
    return file.public_id.toLowerCase().includes("onas");
  }) as CloudinaryResource;

  const kontaktFile = descriptionAssets.find((file) => {
    return file.public_id.toLowerCase().includes("kontakt");
  }) as CloudinaryResource;

  const parallaxPhoto = descriptionAssets.find((file) => {
    return file.resource_type === "image";
  }) as CloudinaryResource;

  return (
    <div style={{ position: "absolute", width: "100%" }}>
      <Header folders={fotoSegmentNames} />
      <ParallaxImage foto={parallaxPhoto} />
      <DescriptionSegmentWrapper
        descriptionTextFile={oNasFile}
        customName="O nas"
      />
      {fotoSegmentNames.map((segmentName, i) => {
        return (
          <FotoSegmentWrapper
            folderStructure={fotoTilesFolderStructure}
            folderName={segmentName}
            key={i}
          />
        );
      })}
      <DescriptionSegmentWrapper
        descriptionTextFile={kontaktFile}
        customName="Kontakt"
      />
      <Footer />
    </div>
  );
}
