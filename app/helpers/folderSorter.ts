import { Folder } from "../types/types";

const folderSorter = (a: Folder, b: Folder) => {
  const getIntFromName = (str: string) => {
    const match = str.match(/\d+/);
    return match ? parseInt(match[0]) : Infinity;
  };

  const intA = getIntFromName(a.name);
  const intB = getIntFromName(b.name);

  return intA - intB;
};

export default folderSorter;
