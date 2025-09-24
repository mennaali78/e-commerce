export interface Root {
  results: number;
  metadata: RootMetadata;
  data: RootData[];
}

export interface RootMetadata {
  currentPage: number;
  numberOfPages: number;
  limit: number;
}

export interface RootData {
  _id: string;
  name: string;
  slug: string;
  image: string;
  createdAt: string;
  updatedAt: string;
}