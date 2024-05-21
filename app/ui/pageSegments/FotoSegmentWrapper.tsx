import styles from "./FotoSegmentWrapper.module.css";
import ImageTile from "../imageTileSystem/ImageTile";
import { CloudinaryResource, FolderStructure } from "@/app/types/types";

interface FotoSegmentWrapperProps {
  folderStructure: FolderStructure;
  folderName: string;
}

const FotoSegmentWrapper = async (props: FotoSegmentWrapperProps) => {
  const folderName = props.folderName.replaceAll(/\d+/gi, "").toUpperCase();
  const productFolderStructure = props.folderStructure[
    props.folderName
  ] as FolderStructure;
  const productNames = Object.keys(productFolderStructure);

  productNames.sort((a: string, b: string) => {
    const numA = parseInt(a.match(/\d/g)?.[0] ?? "")
    const numB = parseInt(b.match(/\d/g)?.[0] ?? "")
    return (numA-numB);
  })

  return (
    <div id={props.folderName} className={styles.segmentTopWrapper}>
      <div className={styles.segmentName}>{folderName}</div>
      <div className={styles.imageTilesWrapper}>
        {productNames.map(async (productName, i) => {
          return (
            <div className={styles.singleItemWrapper} key={i}>
              <ImageTile
                productResources={
                  productFolderStructure[productName] as CloudinaryResource[]
                }
                productName={productName}
              />
            </div>
          );
        })}
      </div>
      <div className={styles.bottomLine} />
    </div>
  );
};

export default FotoSegmentWrapper;
