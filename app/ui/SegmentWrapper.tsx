import { list } from "@vercel/blob";
import ImageTile from "./ImageTile";

interface SegmentWrapperProps {
  folder: string;
}

const SegmentWrapper = async (props: SegmentWrapperProps) => {
  const { folders } = await list({
    mode: "folded",
    prefix: props.folder,
  });

  return (
    <>
      {folders.map((folder, i) => {
        console.log(folder);
        return <ImageTile folder={folder} key={i} />;
      })}
    </>
  );
};

export default SegmentWrapper;
