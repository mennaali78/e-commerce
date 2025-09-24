export interface brands {
  results: number;
  metadata: RootMetadata;
  data: RootData[];
}

export interface RootMetadata {
  currentPage: number;
  numberOfPages: number;
  limit: number;
  nextPage: number;
}

export interface RootData {
  _id: string;
  name: string;
  slug: string;
  image: string;
  createdAt: string;
  updatedAt: string;
}