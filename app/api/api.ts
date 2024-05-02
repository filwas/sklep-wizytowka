import { CloudinaryResponse, FolderInfo } from "../types/types";

const API_BASE_URL = `https://api.cloudinary.com/v1_1/${process.env.CLOUD_NAME}`;

const REQUEST_OPTIONS = {
  method: "GET",
  headers: {
    Authorization: `Basic ${btoa(
      `${process.env.API_KEY}:${process.env.API_SECRET}`
    )}`,
  },
};

export async function listRootFolders() {
  try {
    const response = await fetch(`${API_BASE_URL}/folders`, REQUEST_OPTIONS);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error listing root folders:", error);
    throw error;
  }
}

export async function listSubfolders(folder: string) {
  try {
    const response = await fetch(
      `${API_BASE_URL}/folders/${folder}`,
      REQUEST_OPTIONS
    );
    const data = await response.json();
    return data as FolderInfo;
  } catch (error) {
    console.error("Error listing subfolders:", error);
    throw error;
  }
}

export async function listAllImages(prefix?: string) {
  const prefixOption = prefix ? "/upload?prefix=" + prefix : "";

  try {
    const response = await fetch(
      `${API_BASE_URL}/resources/image${prefixOption}`,
      REQUEST_OPTIONS
    );

    const data = await response.json();

    return data as CloudinaryResponse;
  } catch (error) {
    console.error("Error listing assets by folder:", error);
    throw error;
  }
}

export async function listAllAssets(prefix?: string) {
  const prefixOption = prefix ? "&prefix=" + prefix : "";

  try {
    const response = await fetch(
      `${API_BASE_URL}/resources/raw?type=upload${prefixOption}`,
      REQUEST_OPTIONS
    );

    const data = await response.json();

    return data as CloudinaryResponse;
  } catch (error) {
    console.error("Error listing assets by folder:", error);
    throw error;
  }
}

export async function listALLALLAssets() {
  try {
    const response = await fetch(
      `${API_BASE_URL}/resources/raw`,
      REQUEST_OPTIONS
    );

    const data = await response.json();

    return data as CloudinaryResponse;
  } catch (error) {
    console.error("Error listing assets by folder:", error);
    throw error;
  }
}
