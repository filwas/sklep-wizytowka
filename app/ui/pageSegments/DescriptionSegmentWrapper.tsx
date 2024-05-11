import styles from "./DescriptionSegmentWrapper.module.css";

import TextElement from "../simpleUiComponents/TextElement";
import { list } from "@vercel/blob";
import { CloudinaryResource, Folder } from "@/app/types/types";

interface DescriptionSegmentWrapperProps {
  descriptionTextFile: CloudinaryResource;
  customName: string;
}

const DescriptionSegmentWrapper = (props: DescriptionSegmentWrapperProps) => {
  return (
    <div className={styles.segmentTopWrapper} id={props.customName}>
      <div className={styles.topLine} />
      <div className={styles.segmentName}>{props.customName.toUpperCase()}</div>
      <TextElement textSourceUrl={props.descriptionTextFile.secure_url} />
      <div className={styles.bottomLine} />
    </div>
  );
};

export default DescriptionSegmentWrapper;
