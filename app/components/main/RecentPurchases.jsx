export default function RecentPurchases() {
  const orders = [
    {
      product: "MacBook Pro",
      orderId: "#25413",
      date: "Aug 5th, 2021",
      name: "Bessie Cooper",
      img: "/Avatar1.png",
      status: "Delivered",
      amount: "$400.00"
    },
    {
      product: "iPhone 11 Pro",
      orderId: "#25413",
      date: "Aug 5th, 2021",
      name: "Annette Black",
      img: "/saller.png",
      status: "Pending",
      amount: "$200.00"
    },
    {
      product: "Oppo A20",
      orderId: "#25413",
      date: "Aug 5th, 2021",
      name: "Brooklyn",
      img: "/Avatar2.png",
      status: "Canceled",
      amount: "$150.00"
    },
    {
      product: "MacBook Air",
      orderId: "#25413",
      date: "Aug 5th, 2021",
      name: "Brooklyn",
      img: "/Avatar3.png",
      status: "Canceled",
      amount: "$150.00"
    },
    {
      product: "MacBook Air",
      orderId: "#25413",
      date: "Aug 5th, 2021",
      name: "Brooklyn",
      img: "/Avatar4.png",
      status: "Canceled",
      amount: "$150.00"
    },
    {
      product: "Samsung A50",
      orderId: "#25413",
      date: "Aug 5th, 2021",
      name: "Brooklyn",
      img: "/Avatar5.png",
      status: "Canceled",
      amount: "$150.00"
    }
  ];

  const statusColor = {
    Delivered: "bg-green-500",
    Pending: "bg-yellow-500",
    Canceled: "bg-red-500",
  };

  return (
    <>
      <h1 className="text-base md:text-lg text-black font-semibold px-4 md:px-6 py-4">Recent Purchases</h1>
      
      <div className="hidden lg:block p-4 md:p-6">
        <div className="bg-white shadow-md rounded-lg overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left min-w-full">
              <thead className="bg-gray-100 border-b">
                <tr>
                  <th className="p-3 md:p-4"><input type="checkbox" className="w-4 h-4" /></th>
                  <th className="p-3 md:p-4 font-medium">Products</th>
                  <th className="p-3 md:p-4 font-medium">Order ID</th>
                  <th className="p-3 md:p-4 font-medium">Date</th>
                  <th className="p-3 md:p-4 font-medium">Customer name</th>
                  <th className="p-3 md:p-4 font-medium">Status</th>
                  <th className="p-3 md:p-4 font-medium">Amount</th>
                  <th className="p-3 md:p-4"></th>
                </tr>
              </thead>

              <tbody>
                {orders.map((o, index) => (
                  <tr key={index} className="border-b hover:bg-gray-50 transition-colors">
                    <td className="p-3 md:p-4"><input type="checkbox" className="w-4 h-4" /></td>
                    <td className="p-3 md:p-4 font-medium">{o.product}</td>
                    <td className="p-3 md:p-4 text-gray-600">{o.orderId}</td>
                    <td className="p-3 md:p-4 text-gray-600">{o.date}</td>

                    <td className="p-3 md:p-4 flex items-center gap-3">
                      <img src={o.img} alt={o.name} className="w-8 h-8 rounded-full object-cover" />
                      <span className="text-gray-800">{o.name}</span>
                    </td>

                    <td className="p-3 md:p-4">
                      <div className="flex items-center gap-2">
                        <span className={`w-3 h-3 rounded-full ${statusColor[o.status]}`} />
                        <span className={`text-sm font-medium ${
                          o.status === 'Delivered' ? 'text-green-700' : 
                          o.status === 'Pending' ? 'text-yellow-700' : 'text-red-700'
                        }`}>
                          {o.status}
                        </span>
                      </div>
                    </td>

                    <td className="p-3 md:p-4 font-semibold text-gray-800">{o.amount}</td>
                    <td className="p-3 md:p-4 cursor-pointer text-xl text-gray-500 hover:text-gray-700">⋮</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div className="lg:hidden p-4 space-y-4">
        {orders.map((o, index) => (
          <div key={index} className="bg-white shadow-md rounded-lg p-4 border">
            <div className="flex justify-between items-start mb-3">
              <div className="flex items-center gap-3">
                <input type="checkbox" className="w-4 h-4" />
                <div>
                  <h3 className="font-semibold text-gray-800">{o.product}</h3>
                  <p className="text-sm text-gray-600">{o.orderId}</p>
                </div>
              </div>
              <div className="cursor-pointer text-xl text-gray-500">⋮</div>
            </div>

            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="text-gray-600">Date:</span>
                <span className="text-gray-800">{o.date}</span>
              </div>

              <div className="flex justify-between items-center">
                <span className="text-gray-600">Customer:</span>
                <div className="flex items-center gap-2">
                  <img src={o.img} alt={o.name} className="w-6 h-6 rounded-full object-cover" />
                  <span className="text-gray-800">{o.name}</span>
                </div>
              </div>

              <div className="flex justify-between items-center">
                <span className="text-gray-600">Status:</span>
                <div className="flex items-center gap-2">
                  <span className={`w-2 h-2 rounded-full ${statusColor[o.status]}`} />
                  <span className={`text-sm font-medium ${
                    o.status === 'Delivered' ? 'text-green-700' : 
                    o.status === 'Pending' ? 'text-yellow-700' : 'text-red-700'
                  }`}>
                    {o.status}
                  </span>
                </div>
              </div>

              <div className="flex justify-between">
                <span className="text-gray-600">Amount:</span>
                <span className="font-semibold text-gray-800">{o.amount}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}