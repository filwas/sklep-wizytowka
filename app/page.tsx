import { head, list } from "@vercel/blob";
import Header from "./ui/Header";
import ImageTile from "./ui/ImageTile";

export default async function Home() {
  const { folders, blobs } = await list({
    mode: "folded",
    prefix: "FotoTiles/Sauna01/",
  });

  console.log(folders);

  return (
    <>
      {blobs.map(async (singleBlob, i) => {
        if (
          (await head(singleBlob.url)).contentType.startsWith("image")
        ) {
          console.log((await head(singleBlob.url)).contentType);
          return <ImageTile blob={singleBlob} key={i} />;
        }
      })}
    </>
  );
}
