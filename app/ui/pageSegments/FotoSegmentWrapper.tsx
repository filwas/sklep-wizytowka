import styles from "./FotoSegmentWrapper.module.css";
import ImageTile from "../imageTileSystem/ImageTile";
import { Folder } from "@/app/types/types";
import { listAllAssets, listAllImages, listSubfolders } from "@/app/api/api";
import useIsSmallScreen from "@/utils/useIsSmallScreen";
import useGetScreenWidth from "@/utils/useGetScreenWidth";

interface FotoSegmentWrapperProps {
  folder: Folder;
}

const FotoSegmentWrapper = async (props: FotoSegmentWrapperProps) => {
  const products = (await listSubfolders(props.folder.path)).folders;

  return (
    <div id={props.folder.name} className={styles.segmentTopWrapper}>
      <div className={styles.segmentName}>{props.folder.name}</div>
      <div className={styles.imageTilesWrapper}>
        {products.map(async (productFolder, i) => {
          const fotos = (await listAllImages(productFolder.path)).resources;
          const description = (await listAllAssets(productFolder.path))
            .resources[0];
          return (
            <div className={styles.singleItemWrapper} key={i}>
              <ImageTile
                productFolder={productFolder}
                fotos={fotos}
                description={description}
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
