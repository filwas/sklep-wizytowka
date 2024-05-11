import styles from "./FooterSegmentWrapper.module.css";

import TextElement from "../simpleUiComponents/TextElement";
import { list } from "@vercel/blob";

interface FooterSegmentWrapperProps {
  folder: string;
  customName?: string;
}

const FooterSegmentWrapper = async (
  props: FooterSegmentWrapperProps
) => {
  const { blobs } = await list({
    prefix: props.folder,
  });

  const textBlobs = blobs.filter((blob) => blob.url.endsWith(".txt") && blob.url.toLowerCase().includes("kontakt"));

  return (
    <div
      className={styles.segmentTopWrapper}
      id={props.customName ? props.customName : props.folder}
    >
      <div className={styles.segmentName}>{props.customName?.toUpperCase()}</div>
      <TextElement textSourceUrl={textBlobs[0].url} />
    </div>
  );
};

export default FooterSegmentWrapper;
