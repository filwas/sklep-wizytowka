import { head, list } from "@vercel/blob";
import ImageTile from "./ui/ImageTile";
import SegmentWrapper from "./ui/SegmentWrapper";

export default async function Home() {
  const { folders } = await list({
    mode: "folded",
    prefix: "FotoTiles/",
  });


  return (
    <>
      {folders.map((folder, i) => {
        return <SegmentWrapper folder={folder} key={i}/>
      })}
    </>
  );
}
