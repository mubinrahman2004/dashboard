import ProductDetailsClient from "../../components/ProductDetailsClient";

export default async function ProductDetailsPage() {


  const product = {

    name: "Example",
    category: "Watches",
  };

  return <ProductDetailsClient product={product} />;
}
