import { ListBlobResultBlob, list } from "@vercel/blob";
import styles from "./FotoSegmentWrapper.module.css";
import ImageTile from "../imageTileSystem/ImageTile";
import { Folder } from "@/app/types/types";
import { listSubfolders } from "@/app/api/api";

interface FotoSegmentWrapperProps {
  folder: Folder;
}

const FotoSegmentWrapper = async (props: FotoSegmentWrapperProps) => {
  const { blobs } = await list({
    prefix: "props.folder",
  });

  const products = (await listSubfolders(props.folder.path)).folders;

  //const segmentName = props.folder.split("/")[1];
  //const imageArray: { [key: string]: ListBlobResultBlob[] } = {};

  /*blobs.forEach((blob) => {
    const pathArray = blob.pathname.split("/").filter(Boolean);
    const itemName = pathArray[2];
    if (pathArray.length !== 4) return;
    if (imageArray.hasOwnProperty(itemName)) {
      imageArray[itemName].push(blob);
    } else {
      imageArray[itemName] = [blob];
    }
  });*/

  return (
    <div id={props.folder.name} className={styles.segmentTopWrapper}>
      <div className={styles.segmentName}>{props.folder.name}</div>
      <div className={styles.imageTilesWrapper}>
        {products.map((productFolder, i) => {
          return (
            <div className={styles.singleItemWrapper} key={i}>
              <ImageTile productFolder={productFolder} />
            </div>
          );
        })}
      </div>
      <div className={styles.bottomLine} />
    </div>
  );
};

export default FotoSegmentWrapper;
