import Link from "next/link";

export default function OrderList() {
  const orders = [
    {
      id: 1,
      product: "MacBook Pro",
      orderId: "#25413",
      date: "Aug 5th, 2021",
      name: "Bessie Cooper",
      img: "/Avatar1.png",
      status: "Delivered",
      amount: "$400.00",
      payment: "PayPal",
    },
    {
      id: 2,
      product: "iPhone 11 Pro",
      orderId: "#25414",
      date: "Aug 5th, 2021",
      name: "Annette Black",
      img: "/saller.png",
      status: "Pending",
      amount: "$200.00",
      payment: "PayPal",
    },
    {
      id: 3,
      product: "Oppo A20",
      orderId: "#25415",
      date: "Aug 5th, 2021",
      name: "Brooklyn",
      img: "/Avatar2.png",
      status: "Canceled",
      amount: "$150.00",
      payment: "PayPal",
    },
    {
      id: 4,
      product: "MacBook Air",
      orderId: "#25416",
      date: "Aug 5th, 2021",
      name: "Brooklyn",
      img: "/Avatar3.png",
      status: "Canceled",
      amount: "$150.00",
      payment: "PayPal",
    },
    {
      id: 5,
      product: "MacBook Air",
      orderId: "#25417",
      date: "Aug 5th, 2021",
      name: "Brooklyn",
      img: "/Avatar4.png",
      status: "Canceled",
      amount: "$150.00",
      payment: "PayPal",
    },
    {
      id: 6,
      product: "Samsung A50",
      orderId: "#25418",
      date: "Aug 5th, 2021",
      name: "Brooklyn",
      img: "/Avatar5.png",
      status: "Canceled",
      amount: "$150.00",
      payment: "PayPal",
    }
  ];

  const statusColor = {
    Delivered: "bg-green-500",
    Pending: "bg-yellow-500",
    Canceled: "bg-red-500",
  };

  return (
    <div className="p-4 md:p-6">
      <h1 className="text-base md:text-lg text-black font-semibold mb-4 md:mb-6">Recent Orders</h1>
      
      {/* Desktop/Tablet View */}
      <div className="hidden lg:block">
        <div className="bg-white shadow-md rounded-lg overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead className="bg-gray-100 border-b">
                <tr>
                  <th className="p-3 md:p-4"><input type="checkbox" className="w-4 h-4" /></th>
                  <th className="p-3 md:p-4 font-medium text-sm">Order Name</th>
                  <th className="p-3 md:p-4 font-medium text-sm">Order ID</th>
                  <th className="p-3 md:p-4 font-medium text-sm">Customer Name</th>
                  <th className="p-3 md:p-4 font-medium text-sm">Payment Method</th>
                  <th className="p-3 md:p-4 font-medium text-sm">Date</th>
                  <th className="p-3 md:p-4 font-medium text-sm">Status</th>
                  <th className="p-3 md:p-4 font-medium text-sm">Total</th>
                  <th className="p-3 md:p-4 font-medium text-sm">Action</th>
                </tr>
              </thead>

              <tbody>
                {orders.map((order) => (
                  <tr key={order.id} className="border-b hover:bg-gray-50 transition-colors">
                    <td className="p-3 md:p-4"><input type="checkbox" className="w-4 h-4" /></td>
                    <td className="p-3 md:p-4 font-medium text-sm">{order.product}</td>
                    <td className="p-3 md:p-4 font-medium text-sm">{order.orderId}</td>
                    <td className="p-3 md:p-4">
                      <div className="flex items-center gap-3">
                        <img src={order.img} alt={order.name} className="w-8 h-8 rounded-full object-cover" />
                        <span className="text-gray-800 text-sm">{order.name}</span>
                      </div>
                    </td>
                    <td className="p-3 md:p-4 text-gray-600 text-sm">{order.payment}</td>
                    <td className="p-3 md:p-4 text-gray-600 text-sm">{order.date}</td>
                    <td className="p-3 md:p-4">
                      <div className="flex items-center gap-2">
                        <span className={`w-3 h-3 rounded-full ${statusColor[order.status]}`} />
                        <span className={`text-sm font-medium ${
                          order.status === 'Delivered' ? 'text-green-700' : 
                          order.status === 'Pending' ? 'text-yellow-700' : 'text-red-700'
                        }`}>
                          {order.status}
                        </span>
                      </div>
                    </td>
                    <td className="p-3 md:p-4 font-semibold text-gray-800 text-sm">{order.amount}</td>
                    <td className="p-3 md:p-4">
                      <Link 
                        href={`/order/${order.id}`}
                        className="cursor-pointer text-gray-500 hover:text-gray-700 text-lg"
                      >
                        ⋮
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Mobile View */}
      <div className="lg:hidden space-y-4">
        {orders.map((order) => (
          <Link 
            href={`/order/${order.id}`}
            key={order.id}
            className="block"
          >
            <div className="bg-white shadow-md rounded-lg p-4 border hover:bg-gray-50 transition-colors">
              <div className="flex justify-between items-start mb-3">
                <div className="flex items-center gap-3">
                  <input type="checkbox" className="w-4 h-4" />
                  <div>
                    <h3 className="font-semibold text-gray-800 text-sm">{order.product}</h3>
                    <p className="text-xs text-gray-600">{order.orderId}</p>
                  </div>
                </div>
                <div className="cursor-pointer text-gray-500 text-lg">⋮</div>
              </div>

              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-gray-600 text-sm">Date:</span>
                  <span className="text-gray-800 text-sm">{order.date}</span>
                </div>

                <div className="flex justify-between items-center">
                  <span className="text-gray-600 text-sm">Customer:</span>
                  <div className="flex items-center gap-2">
                    <img src={order.img} alt={order.name} className="w-6 h-6 rounded-full object-cover" />
                    <span className="text-gray-800 text-sm">{order.name}</span>
                  </div>
                </div>

                <div className="flex justify-between items-center">
                  <span className="text-gray-600 text-sm">Payment:</span>
                  <span className="text-gray-800 text-sm">{order.payment}</span>
                </div>

                <div className="flex justify-between items-center">
                  <span className="text-gray-600 text-sm">Status:</span>
                  <div className="flex items-center gap-2">
                    <span className={`w-2 h-2 rounded-full ${statusColor[order.status]}`} />
                    <span className={`text-xs font-medium ${
                      order.status === 'Delivered' ? 'text-green-700' : 
                      order.status === 'Pending' ? 'text-yellow-700' : 'text-red-700'
                    }`}>
                      {order.status}
                    </span>
                  </div>
                </div>

                <div className="flex justify-between">
                  <span className="text-gray-600 text-sm">Amount:</span>
                  <span className="font-semibold text-gray-800 text-sm">{order.amount}</span>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}