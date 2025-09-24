export interface CartType {
  status: string;
  numOfCartItems: number;
  cartId: string;
  data: Data;
}

export interface Data {
  _id: string;
  cartOwner: string;
  products: CartProductType[];
  createdAt: string;
  updatedAt: string;
  __v: number;
  totalCartPrice: number;
}

export interface CartProductType {
  count: number;
  _id: string;
  product: Product2;
  price: number;
}

export interface Product2 {
  subcategory: RootDataProductsProductSubcategory[];
  _id: string;
  title: string;
  quantity: number;
  imageCover: string;
  category: RootDataProductsProductCategory;
  brand: RootDataProductsProductBrand;
  ratingsAverage: number;
  id: string;
}

export interface RootDataProductsProductSubcategory {
  _id: string;
  name: string;
  slug: string;
  category: string;
}

export interface RootDataProductsProductCategory {
  _id: string;
  name: string;
  slug: string;
  image: string;
}

export interface RootDataProductsProductBrand {
  _id: string;
  name: string;
  slug: string;
  image: string;
}