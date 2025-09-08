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
  images: Image[];
}

interface Image {
  id: number;
  image: string;
  thumbnail: string;
  alt: string;
}

export type { User, CartItem, Product, Image };
