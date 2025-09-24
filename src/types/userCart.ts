export interface Order {

  taxPrice: number;
  shippingPrice: number;
  totalOrderPrice: number;
  paymentMethodType: string;
  isPaid: boolean;
  isDelivered: boolean;
  _id: string;
  user: Root0User;
  cartItems: Root0CartItems[];
  paidAt: string;
  createdAt: string;
  updatedAt: string;
  id: number;
  __v: number;
}
export interface Root0User {
  _id: string;
  name: string;
  email: string;
  phone: string;
}

export interface Root0CartItems {
  count: number;
  _id: string;
  product: Root0CartItemsProduct;
  price: number;
}
export interface Root0CartItemsProduct {
  subcategory: Root0CartItemsProductSubcategory[];
  ratingsQuantity: number;
  _id: string;
  title: string;
  imageCover: string;
  category: Root0CartItemsProductCategory;
  brand: Root0CartItemsProductBrand;
  ratingsAverage: number;
  id: string;
}

export interface Root0CartItemsProductSubcategory {
  _id: string;
  name: string;
  slug: string;
  category: string;
}

export interface Root0CartItemsProductCategory {
  _id: string;
  name: string;
  slug: string;
  image: string;
}
export interface Root0CartItemsProductBrand {
  _id: string;
  name: string;
  slug: string;
  image: string;
}