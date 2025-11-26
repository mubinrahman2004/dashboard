

import ProductDetailsClient from "../ProductDetailsClient";

export default async function ProductDetailsPage({ params }) {
 

  const product = {
    id,
    name: "Watch",
    category: "Accessories",
    brand: "Rolex",
    sku: "FOK-2863",
    regularPrice: 100,
    salePrice: 80,
    stock: 1208,
    taxClass: "Standard",
    description: "Sample description",
    images: ["/watch.png"],
  };

  return <ProductDetailsClient product={product} />;
}
