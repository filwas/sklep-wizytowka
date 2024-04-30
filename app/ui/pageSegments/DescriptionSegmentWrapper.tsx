import styles from "./DescriptionSegmentWrapper.module.css";

import TextElement from "../simpleUiComponents/TextElement";
import { list } from "@vercel/blob";

interface DescriptionSegmentWrapperProps {
  folder: string;
  customName?: string;
}

const DescriptionSegmentWrapper = async (
  props: DescriptionSegmentWrapperProps
) => {
  const { blobs } = await list({
    prefix: props.folder,
  });

  const textBlobs = blobs.filter((blob) => blob.url.endsWith(".txt") && blob.url.toLowerCase().includes("onas"));

  return (
    <div
      className={styles.segmentTopWrapper}
      id={props.customName ? props.customName : props.folder}
    >
            <div className={styles.topLine} />
      <div className={styles.segmentName}>{props.customName}</div>
      <TextElement textSourceUrl={textBlobs[0].url} />
      <div className={styles.bottomLine} />
    </div>
  );
};

export default DescriptionSegmentWrapper;
