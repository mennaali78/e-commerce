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
  shippingAddress: RootDataShippingAddress;
  taxPrice: number;
  shippingPrice: number;
  totalOrderPrice: number;
  paymentMethodType: string;
  isPaid: boolean;
  isDelivered: boolean;
  _id: string;
  user: RootDataUser;
  cartItems: RootDataCartItems[];
  createdAt: string;
  updatedAt: string;
  id: number;
}

export interface RootDataShippingAddress {
  details: string;
  phone: string;
  city: string;
}

export interface RootDataUser {
  _id: string;
  name: string;
  email: string;
  phone: string;
}

export interface RootDataCartItems {
  count: number;
  _id: string;
  product: RootDataCartItemsProduct;
  price: number;
}

export interface RootDataCartItemsProduct {
  subcategory: RootDataCartItemsProductSubcategory[];
  ratingsQuantity: number;
  _id: string;
  title: string;
  imageCover: string;
  category: RootDataCartItemsProductCategory;
  brand: RootDataCartItemsProductBrand;
  ratingsAverage: number;
  id: string;
}

export interface RootDataCartItemsProductSubcategory {
  _id: string;
  name: string;
  slug: string;
  category: string;
}

export interface RootDataCartItemsProductCategory {
  _id: string;
  name: string;
  slug: string;
  image: string;
}

export interface RootDataCartItemsProductBrand {
  _id: string;
  name: string;
  slug: string;
  image: string;
}