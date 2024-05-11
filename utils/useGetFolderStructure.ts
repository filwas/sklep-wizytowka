import { CloudinaryResource, CloudinaryResponse } from "@/app/types/types";

interface FolderStructure {
  [key: string]: FolderStructure | CloudinaryResource[];
}
function createFolderStructure(
  resources: CloudinaryResource[]
): FolderStructure {
  const folderStructure: FolderStructure = {};

  resources.forEach((resource) => {
    const parts = resource.public_id.split("/"); // Splitting the public_id by '/'

    let currentFolder = folderStructure;

    // Iterating over each part of the path
    for (let i = 0; i < parts.length - 1; i++) {
      const part = parts[i];

      // If the current part is not yet a key in the current folder, add it
      if (!currentFolder[part]) {
        // If the next part is a filename, initialize it as an array
        if (i === parts.length - 2) {
          currentFolder[part] = [resource]; // Adding the filename
        } else {
          currentFolder[part] = {}; // Creating a new nested folder
        }
      } else if (i === parts.length - 2) {
        // If it's the last part and it's already a folder, add the filename to it
        (currentFolder[part] as CloudinaryResource[]).push(resource);
      }

      // Move to the next folder
      currentFolder = currentFolder[part] as FolderStructure;
    }
  });

  return folderStructure;
}

export default createFolderStructure;
