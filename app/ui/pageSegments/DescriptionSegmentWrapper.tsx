import { ListBlobResultBlob, list } from "@vercel/blob";
import styles from "./DescriptionSegmentWrapper.module.css";
import ImageTile from "../imageTileSystem/ImageTile";

interface DescriptionSegmentWrapperProps {
  folder: string;
}

const DescriptionSegmentWrapper = async (props: DescriptionSegmentWrapperProps) => {
  const { blobs } = await list({
    prefix: props.folder,
  });  

  const segmentName = props.folder.split("/")[1];
  const imageArray: { [key: string]: ListBlobResultBlob[] } = {};

  blobs.forEach((blob) => {
    const pathArray = blob.pathname.split("/").filter(Boolean);
    const itemName = pathArray[2];
    if (pathArray.length !== 4) return;
    if (imageArray.hasOwnProperty(itemName)) {
      imageArray[itemName].push(blob);
    } else {
      imageArray[itemName] = [blob];
    }
  });

  return (
    <div className={styles.segmentTopWrapper} id={props.folder}>
      <h1>{segmentName}</h1>
      <div className={styles.imageTilesWrapper}>
        {Object.entries(imageArray).map(([itemName, blobsArray], i) => {
          return (
            <div className={styles.singleItemWrapper} key={i}>
              <ImageTile itemName={itemName} blobData={blobsArray} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default DescriptionSegmentWrapper;
