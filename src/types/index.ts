interface User {
  id: number;
  avatar: string;
}

interface CartItem {
  id: number;
  quantity: number;
  name: string;
  price: number;
  image: string;
}

interface Product {
  id: number;
  name: string;
  description: string;
  discount: number;
  price: number;
  brand: string;
  images: { image: string; thumbnail: string }[];
}

export type { User, CartItem, Product };
