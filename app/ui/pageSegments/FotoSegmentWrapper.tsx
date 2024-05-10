import styles from "./FotoSegmentWrapper.module.css";
import ImageTile from "../imageTileSystem/ImageTile";
import { CloudinaryResource, Folder, FolderStructure } from "@/app/types/types";
import { listAllAssets, listAllImages, listSubfolders } from "@/app/api/api";
import useIsSmallScreen from "@/utils/useIsSmallScreen";

interface FotoSegmentWrapperProps {
  folderStructure: FolderStructure;
  folderName: string;
}

const FotoSegmentWrapper = async (props: FotoSegmentWrapperProps) => {
  const folderName = props.folderName.replaceAll(/\d+/gi, "").toUpperCase();
  const productFolderStructure = props.folderStructure[props.folderName] as CloudinaryResource[]
  const productNames = Object.keys(productFolderStructure);



  return (
    <div id={props.folderName} className={styles.segmentTopWrapper}>
      <div className={styles.segmentName}>{folderName}</div>
      <div className={styles.imageTilesWrapper}>
        {productNames.map(async (productName, i) => {
          return (
            <div className={styles.singleItemWrapper} key={i}>
              <ImageTile
                productResources={productFolderStructure[productName]}
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
