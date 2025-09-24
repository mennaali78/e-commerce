export interface ProductType {
  sold: number;
  images: string[];
  subcategory: RootSubcategory[];
  ratingsQuantity: number;
  _id: string;
  title: string;
  slug: string;
  description: string;
  quantity: number;
  price: number;
  imageCover: string;
  category: RootCategory;
  brand: RootBrand;
  ratingsAverage: number;
  createdAt: string;
  updatedAt: string;
  id: string;
}

export interface RootSubcategory {
  _id: string;
  name: string;
  slug: string;
  category: string;
}

export interface RootCategory {
  _id: string;
  name: string;
  slug: string;
  image: string;
}

export interface RootBrand {
  _id: string;
  name: string;
  slug: string;
  image: string;
}