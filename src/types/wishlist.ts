export interface Root {
  status: string;
  count: number;
  data: RootData[];
}

export interface RootData {
  sold: number;
  images: string[];
  subcategory: RootDataSubcategory[];
  ratingsQuantity: number;
  _id: string;
  title: string;
  slug: string;
  description: string;
  quantity: number;
  price: number;
  priceAfterDiscount: number;
  imageCover: string;
  category: RootDataCategory;
  brand: RootDataBrand;
  ratingsAverage: number;
  createdAt: string;
  updatedAt: string;
  __v: number;
  id: string;
}

export interface RootDataSubcategory {
  _id: string;
  name: string;
  slug: string;
  category: string;
}

export interface RootDataCategory {
  _id: string;
  name: string;
  slug: string;
  image: string;
}

export interface RootDataBrand {
  _id: string;
  name: string;
  slug: string;
  image: string;
}