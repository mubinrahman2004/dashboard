import React from 'react'
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaCalendarAlt } from 'react-icons/fa'

const ClientListItem = () => {
  const customers = [
    {
      id: 1,
      name: "Bessie Cooper",
      email: "bessie.cooper@example.com",
      phone: "+1 (555) 123-4567",
      billingAddress: "123 Main St, New York, NY 10001",
      status: "Active",
      joinedDate: "Aug 5th, 2021",
      img: "/Avatar1.png",
      orders: 15,
      totalSpent: "$2,458.00"
    },
    {
      id: 2,
      name: "Annette Black",
      email: "annette.black@example.com",
      phone: "+1 (555) 234-5678",
      billingAddress: "456 Oak Ave, Los Angeles, CA 90210",
      status: "Active",
      joinedDate: "Aug 6th, 2021",
      img: "/saller.png",
      orders: 8,
      totalSpent: "$1,245.00"
    },
    {
      id: 3,
      name: "Brooklyn Simmons",
      email: "brooklyn.s@example.com",
      phone: "+1 (555) 345-6789",
      billingAddress: "789 Pine Rd, Chicago, IL 60601",
      status: "Inactive",
      joinedDate: "Aug 7th, 2021",
      img: "/Avatar2.png",
      orders: 3,
      totalSpent: "$450.00"
    },
    {
      id: 4,
      name: "Robert Fox",
      email: "robert.fox@example.com",
      phone: "+1 (555) 456-7890",
      billingAddress: "321 Elm St, Houston, TX 77001",
      status: "Active",
      joinedDate: "Aug 8th, 2021",
      img: "/Avatar3.png",
      orders: 22,
      totalSpent: "$5,678.00"
    },
    {
      id: 5,
      name: "Jenny Wilson",
      email: "jenny.wilson@example.com",
      phone: "+1 (555) 567-8901",
      billingAddress: "654 Maple Dr, Phoenix, AZ 85001",
      status: "Active",
      joinedDate: "Aug 9th, 2021",
      img: "/Avatar4.png",
      orders: 12,
      totalSpent: "$3,210.00"
    },
    {
      id: 6,
      name: "Kristin Watson",
      email: "kristin.w@example.com",
      phone: "+1 (555) 678-9012",
      billingAddress: "987 Cedar Ln, Philadelphia, PA 19101",
      status: "Inactive",
      joinedDate: "Aug 10th, 2021",
      img: "/Avatar5.png",
      orders: 5,
      totalSpent: "$789.00"
    }
  ];

  const statusColor = {
    Active: "bg-green-500",
    Inactive: "bg-gray-400",
    Pending: "bg-yellow-500",
    Blocked: "bg-red-500",
  };

  const statusTextColor = {
    Active: "text-green-700",
    Inactive: "text-gray-600",
    Pending: "text-yellow-700",
    Blocked: "text-red-700",
  };

  return (
    <div className="bg-white rounded-xl shadow-sm">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between px-4 md:px-6 py-4 border-b">
        <h1 className="text-lg md:text-xl font-semibold text-gray-900 mb-2 sm:mb-0">Customers List</h1>
        <div className="flex items-center gap-3">
          <button className="px-3 py-2 border border-gray-300 rounded-lg text-gray-600 hover:bg-gray-50 transition-colors text-sm">
            Export
          </button>
          <button className="px-3 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors text-sm">
            Add Customer
          </button>
        </div>
      </div>
      
      {/* Desktop Table */}
      <div className="hidden lg:block">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 border-b">
              <tr>
                <th className="p-4">
                  <input type="checkbox" className="w-4 h-4 rounded border-gray-300" />
                </th>
                <th className="p-4 font-semibold text-gray-900 text-sm text-left">Customer</th>
                <th className="p-4 font-semibold text-gray-900 text-sm text-left">Email</th>
                <th className="p-4 font-semibold text-gray-900 text-sm text-left">Phone</th>
                <th className="p-4 font-semibold text-gray-900 text-sm text-left">Billing Address</th>
                <th className="p-4 font-semibold text-gray-900 text-sm text-left">Orders</th>
                <th className="p-4 font-semibold text-gray-900 text-sm text-left">Total Spent</th>
                <th className="p-4 font-semibold text-gray-900 text-sm text-left">Status</th>
                <th className="p-4 font-semibold text-gray-900 text-sm text-left">Joined</th>
                <th className="p-4 font-semibold text-gray-900 text-sm text-left">Actions</th>
              </tr>
            </thead>

            <tbody className="divide-y divide-gray-200">
              {customers.map((customer) => (
                <tr key={customer.id} className="hover:bg-gray-50 transition-colors">
                  <td className="p-4">
                    <input type="checkbox" className="w-4 h-4 rounded border-gray-300" />
                  </td>
                  <td className="p-4">
                    <div className="flex items-center gap-3">
                      <img 
                        src={customer.img} 
                        alt={customer.name}
                        className="w-8 h-8 rounded-full object-cover"
                      />
                      <div>
                        <p className="font-medium text-gray-900">{customer.name}</p>
                      </div>
                    </div>
                  </td>
                  <td className="p-4">
                    <div className="flex items-center gap-2">
                      <FaEnvelope className="w-4 h-4 text-gray-400" />
                      <span className="text-gray-600 text-sm">{customer.email}</span>
                    </div>
                  </td>
                  <td className="p-4">
                    <div className="flex items-center gap-2">
                      <FaPhone className="w-4 h-4 text-gray-400" />
                      <span className="text-gray-600 text-sm">{customer.phone}</span>
                    </div>
                  </td>
                  <td className="p-4 max-w-xs">
                    <div className="flex items-center gap-2">
                      <FaMapMarkerAlt className="w-4 h-4 text-gray-400 flex-shrink-0" />
                      <span className="text-gray-600 text-sm truncate">{customer.billingAddress}</span>
                    </div>
                  </td>
                  <td className="p-4">
                    <span className="px-2 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-medium">
                      {customer.orders} orders
                    </span>
                  </td>
                  <td className="p-4 font-semibold text-gray-900">{customer.totalSpent}</td>
                  <td className="p-4">
                    <div className="flex items-center gap-2">
                      <span className={`w-2 h-2 rounded-full ${statusColor[customer.status]}`} />
                      <span className={`text-sm font-medium ${statusTextColor[customer.status]}`}>
                        {customer.status}
                      </span>
                    </div>
                  </td>
                  <td className="p-4">
                    <div className="flex items-center gap-2">
                      <FaCalendarAlt className="w-4 h-4 text-gray-400" />
                      <span className="text-gray-600 text-sm">{customer.joinedDate}</span>
                    </div>
                  </td>
                  <td className="p-4">
                    <div className="flex items-center gap-2">
                      <button className="text-gray-400 hover:text-gray-600 transition-colors p-1">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                        </svg>
                      </button>
                      <button className="text-gray-400 hover:text-gray-600 transition-colors p-1">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                        </svg>
                      </button>
                      <button className="text-gray-400 hover:text-red-600 transition-colors p-1">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                        </svg>
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Tablet View (768px - 1024px) */}
      <div className="hidden md:block lg:hidden p-4">
        <div className="grid grid-cols-1 gap-4">
          {customers.map((customer) => (
            <div key={customer.id} className="bg-gray-50 rounded-lg p-4 border border-gray-200">
              <div className="flex justify-between items-start mb-4">
                <div className="flex items-center gap-3">
                  <input type="checkbox" className="w-4 h-4 rounded border-gray-300" />
                  <img 
                    src={customer.img} 
                    alt={customer.name}
                    className="w-10 h-10 rounded-full object-cover"
                  />
                  <div>
                    <h3 className="font-semibold text-gray-900">{customer.name}</h3>
                    <p className="text-sm text-gray-600">{customer.email}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <span className={`w-2 h-2 rounded-full ${statusColor[customer.status]}`} />
                  <span className={`text-sm font-medium ${statusTextColor[customer.status]}`}>
                    {customer.status}
                  </span>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 text-sm">
                <div className="flex items-center gap-2">
                  <FaPhone className="w-4 h-4 text-gray-400" />
                  <span className="text-gray-600">{customer.phone}</span>
                </div>
                <div className="flex items-center gap-2">
                  <FaMapMarkerAlt className="w-4 h-4 text-gray-400" />
                  <span className="text-gray-600 truncate">{customer.billingAddress}</span>
                </div>
                <div>
                  <span className="text-gray-600">Orders:</span>
                  <span className="ml-2 px-2 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-medium">
                    {customer.orders}
                  </span>
                </div>
                <div>
                  <span className="text-gray-600">Total Spent:</span>
                  <span className="ml-2 font-semibold text-gray-900">{customer.totalSpent}</span>
                </div>
                <div className="flex items-center gap-2 col-span-2">
                  <FaCalendarAlt className="w-4 h-4 text-gray-400" />
                  <span className="text-gray-600">Joined {customer.joinedDate}</span>
                </div>
              </div>

              <div className="flex justify-end gap-2 mt-4 pt-4 border-t border-gray-200">
                <button className="text-gray-400 hover:text-gray-600 transition-colors p-2">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                </button>
                <button className="text-gray-400 hover:text-gray-600 transition-colors p-2">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                  </svg>
                </button>
                <button className="text-gray-400 hover:text-red-600 transition-colors p-2">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Mobile Cards (< 768px) */}
      <div className="md:hidden p-4 space-y-4">
        {customers.map((customer) => (
          <div key={customer.id} className="bg-gray-50 rounded-lg p-4 border border-gray-200">
            <div className="flex justify-between items-start mb-4">
              <div className="flex items-center gap-3">
                <input type="checkbox" className="w-4 h-4 rounded border-gray-300" />
                <img 
                  src={customer.img} 
                  alt={customer.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <h3 className="font-semibold text-gray-900">{customer.name}</h3>
                  <p className="text-sm text-gray-600">{customer.email}</p>
                </div>
              </div>
              <div className="flex flex-col items-end gap-1">
                <div className="flex items-center gap-2">
                  <span className={`w-2 h-2 rounded-full ${statusColor[customer.status]}`} />
                  <span className={`text-xs font-medium ${statusTextColor[customer.status]}`}>
                    {customer.status}
                  </span>
                </div>
                <span className="px-2 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-medium">
                  {customer.orders} orders
                </span>
              </div>
            </div>

            <div className="space-y-3 text-sm">
              <div className="flex items-center gap-2">
                <FaPhone className="w-4 h-4 text-gray-400" />
                <span className="text-gray-600">{customer.phone}</span>
              </div>
              
              <div className="flex items-start gap-2">
                <FaMapMarkerAlt className="w-4 h-4 text-gray-400 mt-0.5" />
                <span className="text-gray-600 flex-1">{customer.billingAddress}</span>
              </div>
              
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Total Spent:</span>
                <span className="font-semibold text-gray-900">{customer.totalSpent}</span>
              </div>
              
              <div className="flex items-center gap-2">
                <FaCalendarAlt className="w-4 h-4 text-gray-400" />
                <span className="text-gray-600">Joined {customer.joinedDate}</span>
              </div>
            </div>

            <div className="flex justify-center gap-4 mt-4 pt-4 border-t border-gray-200">
              <button className="flex items-center gap-1 text-gray-600 hover:text-gray-900 transition-colors text-sm">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
                View
              </button>
              <button className="flex items-center gap-1 text-gray-600 hover:text-gray-900 transition-colors text-sm">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                </svg>
                Edit
              </button>
              <button className="flex items-center gap-1 text-gray-600 hover:text-red-600 transition-colors text-sm">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                </svg>
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 px-4 md:px-6 py-4 border-t">
        <p className="text-sm text-gray-600">
          Showing 1 to {customers.length} of 100 results
        </p>
        <div className="flex gap-2">
          <button className="px-3 py-2 border border-gray-300 rounded-lg text-gray-600 hover:bg-gray-50 transition-colors text-sm">
            Previous
          </button>
          <button className="px-3 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors text-sm">
            1
          </button>
          <button className="px-3 py-2 border border-gray-300 rounded-lg text-gray-600 hover:bg-gray-50 transition-colors text-sm">
            2
          </button>
          <button className="px-3 py-2 border border-gray-300 rounded-lg text-gray-600 hover:bg-gray-50 transition-colors text-sm">
            Next
          </button>
        </div>
      </div>
    </div>
  )
}

export default ClientListItem