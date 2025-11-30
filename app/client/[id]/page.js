// import React from 'react'

// const page = () => {
//   return (
//     <div>page</div>
//   )
// }

// export default page

import ClientDetails from "@/app/components/ClientDetails";

export default async function page() {
  const product = {
    name: "Example",
    category: "Watches",
  };

  return <ClientDetails product={product} />;
}
