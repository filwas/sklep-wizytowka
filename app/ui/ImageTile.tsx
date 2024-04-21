import { ListBlobResultBlob, list } from "@vercel/blob";
import styles from "./ImageTile.module.css";

interface ImageTileProps {
  folder: string;
}

const ImageTile = async (props: ImageTileProps) => {
  const {folders, blobs} = await list({mode: "folded", prefix: props.folder });

  const fotoBlobs = blobs.filter((blob) => blob.url.endsWith(".jpg"))
  
  
  return (
    <div className={styles.imageTileWrapper}>
      <p>{props.folder.split("/")[2]}</p>
      <img src={fotoBlobs[0].url} />
    </div>
  );
};

export default ImageTile;
