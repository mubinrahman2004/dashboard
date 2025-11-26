export default function OrderDetails() {
  const order = {
    id: "#68543",
    date: "Mon, Jan 28, 2022, 8:40AM",
    status: "Pending",
    customer: {
      name: "Jane Cooper",
      email: "tim.jennings@example.com",
      phone: "+099 856 245",
    },
    orderInfo: {
      shipping: "Next express",
      payment: "Paypal",
      status: "Pending",
    },
    deliverTo: {
      address1: "Santa Ana, Illinois 85486",
      address2: "2972 Westheimer Rd.",
      block: "Block 9A",
    },
    paymentInfo: {
      card: "Master Card **** **** 8657",
      business: "Fox Market LLC",
      phone: "+09985 6578 52"
    },
    products: [
      { name: "Bose noise cancelling", price: 948.55, qty: 2, img: "/watch.png" },
      { name: "Philips wireless headphone", price: 767.50, qty: 3, img: "/watch.png" },
      { name: "Cummit smart watch", price: 396.84, qty: 1, img: "/watch.png" },
      { name: "Google Pixel Buds", price: 778.35, qty: 4, img: "/watch.png" },
    ]
  };

  const subtotal = order.products.reduce((sum, p) => sum + p.price, 0);
  const tax = subtotal * 0.20;
  const discount = 293.01;
  const total = 310000;

  return (
    <div className="p-6 md:p-10 max-w-6xl mx-auto">
      {/* Header */}
      <h1 className="text-2xl font-bold">Order Details</h1>
      <p className="text-sm text-gray-500 mt-1">Home › Dashboard</p>

      <div className="bg-white p-6 mt-6 rounded-xl shadow">
        <h2 className="text-lg font-semibold">
          Order ID: <span className="text-gray-700">{order.id}</span>
        </h2>

        <div className="flex items-center justify-between mt-3">
          <p className="text-gray-600">{order.date}</p>

          <div className="flex items-center gap-3">
            <select className="border p-2 rounded-lg">
              <option>Change Status</option>
              <option>Delivered</option>
              <option>Pending</option>
              <option>Canceled</option>
            </select>

            <button className="bg-purple-600 text-white px-4 py-2 rounded-lg">
              Save
            </button>

            <button className="border p-2 rounded-lg text-gray-600">
              🖨️
            </button>
          </div>
        </div>

        <span className="text-sm text-yellow-600 font-medium mt-2 block">
          {order.status}
        </span>

        {/* Info Cards */}
        <div className="grid md:grid-cols-4 gap-4 mt-6">
          
          {/* Customer */}
          <div className="border p-4 rounded-lg">
            <h3 className="font-medium">Customer</h3>
            <p className="text-sm mt-2"><b>Full name:</b> {order.customer.name}</p>
            <p className="text-sm"><b>E-mail:</b> {order.customer.email}</p>
            <p className="text-sm"><b>Phone:</b> {order.customer.phone}</p>
            <button className="text-blue-600 text-sm mt-3">View Profile</button>
          </div>

          {/* Order Info */}
          <div className="border p-4 rounded-lg">
            <h3 className="font-medium">Order Info</h3>
            <p className="text-sm mt-2"><b>Shipping:</b> {order.orderInfo.shipping}</p>
            <p className="text-sm"><b>Pay Method:</b> {order.orderInfo.payment}</p>
            <p className="text-sm"><b>Status:</b> {order.orderInfo.status}</p>
            <button className="text-blue-600 text-sm mt-3">Download Info</button>
          </div>

          {/* Deliver to */}
          <div className="border p-4 rounded-lg">
            <h3 className="font-medium">Deliver to</h3>
            <p className="text-sm mt-2">{order.deliverTo.address1}</p>
            <p className="text-sm">{order.deliverTo.address2}</p>
            <p className="text-sm">{order.deliverTo.block}</p>
            <button className="text-blue-600 text-sm mt-3">View Profile</button>
          </div>

          {/* Payment info */}
          <div className="border p-4 rounded-lg">
            <h3 className="font-medium">Payment Info</h3>
            <p className="text-sm mt-2">{order.paymentInfo.card}</p>
            <p className="text-sm"><b>Business name:</b> {order.paymentInfo.business}</p>
            <p className="text-sm"><b>Phone:</b> {order.paymentInfo.phone}</p>
          </div>

        </div>

        {/* Notes */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
          <div className="border p-4 rounded-lg">
            <h3 className="font-medium">Notes</h3>
            <textarea className="w-full mt-2 border p-2 rounded-lg" placeholder="Type some note" rows={4}></textarea>
          </div>
        </div>

        {/* Product Table */}
        <h3 className="text-lg font-semibold mt-10">Products</h3>

        <div className="overflow-x-auto mt-4 border rounded-lg">
          <table className="w-full">
            <thead className="bg-gray-100">
              <tr>
                <th className="p-4"><input type="checkbox" /></th>
            
                <th className="p-4 text-left">Product Name</th>
                <th className="p-4 text-left">Price</th>
                <th className="p-4 text-left">Quantity</th>
                <th className="p-4 text-left">Total</th>
              </tr>
            </thead>

            <tbody>
              {order.products.map((p, index) => (
                <tr key={index} className="border-t">
                  <td className="p-4"><input type="checkbox" /></td>
                  <td className="p-4 flex items-center gap-3">
                    <img src={p.img} className="w-10 h-10 object-cover" />
                    {p.name}
                  </td>
                  <td className="p-4">${p.price.toFixed(2)}</td>
                  <td className="p-4">{p.qty}</td>
                  <td className="p-4">${(p.price * p.qty).toFixed(2)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Totals */}
        <div className="mt-6 flex justify-end">
          <div className="text-right space-y-1">
            <p>Subtotal: <b>${subtotal.toFixed(2)}</b></p>
            <p>Tax (20%): <b>${tax.toFixed(2)}</b></p>
            <p>Discount: <b>${discount.toFixed(2)}</b></p>

            <p className="text-xl font-bold mt-2">
              Total: <span className="text-purple-600">${total.toLocaleString()}</span>
            </p>

            <p className="text-sm mt-1">
              Status: <span className="text-yellow-600 font-medium">{order.status}</span>
            </p>
          </div>
        </div>

      </div>
    </div>
  );
}
