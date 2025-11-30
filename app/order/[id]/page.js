
import OrderDetails from "../../components/OrderDetails";

export default async function page() {
  const product = {
    name: "Example",
    category: "Watches",
  };

  return <OrderDetails product={product} />;
}
