
import React from 'react'

const CompletedTransactions = () => {
  const orders = [
    {
      product: "Macknsnsndnswook Pro",
      orderId: "#25413",
      date: "Aug 5th, 2021",
      name: "Bessie Cooper",
      img: "/Avatar1.png",
      status: "Completed",
      amount: "$400.00",
      paid: "$2458",
      payment: "visddda"
    },
    {
      product: "iPhone 11 Pro",
      orderId: "#25414",
      date: "Aug 5th, 2021",
      name: "Annette Black",
      img: "/saller.png",
      status: "Completed",
      amount: "$200.00",
      paid: "$2458",
      payment: "visa"
    },
    {
      product: "Oppo A20",
      orderId: "#25415",
      date: "Aug 5th, 2021",
      name: "Brooklyn",
      img: "/Avatar2.png",
      status: "Completed",
      amount: "$150.00",
      paid: "$2458",
      payment: "visa"
    },
    {
      product: "MacBook Air",
      orderId: "#25416",
      date: "Aug 5th, 2021",
      name: "Brooklyn",
      img: "/Avatar3.png",
      status: "Completed",
      amount: "$150.00",
      paid: "$2458",
      payment: "visa"
    },
        {
      product: "MacBook Air",
      orderId: "#25416",
      date: "Aug 5th, 2021",
      name: "Brooklyn",
      img: "/Avatar3.png",
      status: "Completed",
      amount: "$150.00",
      paid: "$2458",
      payment: "visa"
    },
    {
      product: "MacBook Air",
      orderId: "#25417",
      date: "Aug 5th, 2021",
      name: "Brooklyn",
      img: "/Avatar4.png",
      status: "Completed",
      amount: "$150.00",
      paid: "$2458",
      payment: "visa"
    },
    {
      product: "Samsung A50",
      orderId: "#25418",
      date: "Aug 5th, 2021",
      name: "Brooklyn",
      img: "/Avatar5.png",
      status: "Completed",
      amount: "$150.00",
      paid: "$2458",
      payment: "visa"
    }
  ];

  const statusColor = {
    Completed: "bg-green-500",
    Pending: "bg-yellow-500",
    Canceled: "bg-red-500",
  };

  return (
    <div className="bg-white rounded-xl shadow-sm">
      <h1 className="text-lg md:text-xl font-semibold text-gray-900 px-4 md:px-6 py-4 border-b">Completed Transactions</h1>
      
      <div className="hidden lg:block">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 border-b">
              <tr>
                <th className="p-4">
                  <input type="checkbox" className="w-4 h-4 rounded border-gray-300" />
                </th>
                <th className="p-4 font-semibold text-gray-900 text-sm text-left">Order ID</th>
                <th className="p-4 font-semibold text-gray-900 text-sm text-left">Paid</th>
                <th className="p-4 font-semibold text-gray-900 text-sm text-left">Payment Method</th>
                <th className="p-4 font-semibold text-gray-900 text-sm text-left">Date</th>
                <th className="p-4 font-semibold text-gray-900 text-sm text-left">Status</th>
                <th className="p-4 font-semibold text-gray-900 text-sm text-left">Amount</th>
                <th className="p-4"></th>
              </tr>
            </thead>

            <tbody className="divide-y divide-gray-200">
              {orders.map((order, index) => (
                <tr key={index} className="hover:bg-gray-50 transition-colors">
                  <td className="p-4">
                    <input type="checkbox" className="w-4 h-4 rounded border-gray-300" />
                  </td>
                  <td className="p-4 text-gray-600">{order.orderId}</td>
                  <td className="p-4 text-gray-900 font-medium">{order.paid}</td>
                  <td className="p-4">
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-4 bg-blue-500 rounded-sm"></div>
                      <span className="text-gray-600">{order.payment}</span>
                    </div>
                  </td>
                  <td className="p-4 text-gray-600">{order.date}</td>
                  <td className="p-4">
                    <div className="flex items-center gap-2">
                      <span className={`w-2 h-2 rounded-full ${statusColor[order.status]}`} />
                      <span className="text-sm font-medium text-green-700">
                        {order.status}
                      </span>
                    </div>
                  </td>
                  <td className="p-4 font-semibold text-gray-900">{order.amount}</td>
                  <td className="p-4">
                    <button className="text-gray-400 hover:text-gray-600 transition-colors text-xl">
                      ⋮
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="lg:hidden p-4 space-y-4">
        {orders.map((order, index) => (
          <div key={index} className="bg-gray-50 rounded-lg p-4 border border-gray-200">
            <div className="flex justify-between items-start mb-4">
              <div className="flex items-center gap-3">
                <input type="checkbox" className="w-4 h-4 rounded border-gray-300" />
                <div>
                  <h3 className="font-semibold text-gray-900">{order.product}</h3>
                  <p className="text-sm text-gray-600">{order.orderId}</p>
                </div>
              </div>
              <button className="text-gray-400 hover:text-gray-600 transition-colors text-xl">
                ⋮
              </button>
            </div>

            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-gray-600 text-sm">Date:</span>
                <span className="text-gray-900 font-medium">{order.date}</span>
              </div>

              <div className="flex justify-between items-center">
                <span className="text-gray-600 text-sm">Paid:</span>
                <span className="text-gray-900 font-medium">{order.paid}</span>
              </div>

              <div className="flex justify-between items-center">
                <span className="text-gray-600 text-sm">Payment:</span>
                <div className="flex items-center gap-2">
                  <div className="w-4 h-3 bg-blue-500 rounded-sm"></div>
                  <span className="text-gray-900 font-medium">{order.payment}</span>
                </div>
              </div>

              <div className="flex justify-between items-center">
                <span className="text-gray-600 text-sm">Status:</span>
                <div className="flex items-center gap-2">
                  <span className={`w-2 h-2 rounded-full ${statusColor[order.status]}`} />
                  <span className="text-sm font-medium text-green-700">
                    {order.status}
                  </span>
                </div>
              </div>

              <div className="flex justify-between items-center">
                <span className="text-gray-600 text-sm">Amount:</span>
                <span className="font-semibold text-gray-900">{order.amount}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default CompletedTransactions
