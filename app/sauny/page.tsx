import { list } from "@vercel/blob";

export default async function Home() {
  const blobList = await list();

  console.log(blobList);

  return (
    <>
      {blobList.blobs.map((singleBlob, i) => {
        console.log(singleBlob.pathname + " hahaha");
        return <img src={singleBlob.url} key={i}></img>;
      })}
    </>
  );
}
