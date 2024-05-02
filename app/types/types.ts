export type Folder = {
  name: string;
  path: string;
};

export type FolderInfo = {
  folders: Folder[];
  next_cursor: string | null;
  total_count: number;
};

export type CloudinaryResource = {
  asset_id: string;
  public_id: string;
  format: string;
  version?: number;
  resource_type: string;
  type: string;
  created_at: string;
  bytes: number;
  width?: number;
  height?: number;
  backup?: boolean;
  access_mode: string;
  url: string;
  secure_url: string;
};

export type CloudinaryResponse = {
  resources: CloudinaryResource[];
};
