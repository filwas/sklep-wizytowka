import { ListBlobResultBlob } from "@vercel/blob";
import styles from "./ImageTile.module.css";

interface ImageTileProps {
  blob: ListBlobResultBlob;
}

const ImageTile = (props: ImageTileProps) => {
  return (
    <div className={styles.imageTileWrapper}>
      <p>text</p>
      <img src={props.blob.url} />
    </div>
  );
};

export default ImageTile;
