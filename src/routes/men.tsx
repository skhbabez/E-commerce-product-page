import { createFileRoute } from "@tanstack/react-router";
import ProductPage from "../layouts/productPage";
import type { Product } from "../types";

export const Route = createFileRoute("/men")({
  component: ProductComponent,
});
const product: Product = {
  id: 2,
  name: "Fall Limited Edition Boots",
  brand: "Boots Company",
  description:
    "These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they’ll withstand everything the weather can offer.",
  price: 125,
  discount: 0.75,
  images: [
    {
      id: 5,
      image: "images/image-product-2.jpg",
      thumbnail: "images/image-product-2-thumbnail.jpg",
      alt: "Product picture",
    },
    {
      id: 6,
      image: "images/image-product-1.jpg",
      thumbnail: "images/image-product-1-thumbnail.jpg",
      alt: "Product picture",
    },
    {
      id: 7,
      image: "images/image-product-3.jpg",
      thumbnail: "images/image-product-3-thumbnail.jpg",
      alt: "Product picture",
    },
    {
      id: 8,
      image: "images/image-product-4.jpg",
      thumbnail: "images/image-product-4-thumbnail.jpg",
      alt: "Product picture",
    },
  ],
};
function ProductComponent() {
  return <ProductPage product={product}></ProductPage>;
}
