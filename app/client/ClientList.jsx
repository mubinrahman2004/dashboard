import Link from 'next/link'
import React from 'react'
import { FaCalendarAlt, FaChevronRight, FaFilter, FaSearch } from 'react-icons/fa'

const ClientList = () => {
  // Define the clients array that was missing
  const clients = [
    {
      id: 1,
      name: "John Doe",
      email: "john@example.com",
      phone: "+1 (555) 123-4567",
      orders: 12,
      status: "Active",
      joinDate: "Jan 15, 2022"
    },
    {
      id: 2,
      name: "Jane Smith",
      email: "jane@example.com",
      phone: "+1 (555) 987-6543",
      orders: 8,
      status: "Active",
      joinDate: "Feb 3, 2022"
    },
    {
      id: 3,
      name: "Robert Johnson",
      email: "robert@example.com",
      phone: "+1 (555) 456-7890",
      orders: 3,
      status: "Inactive",
      joinDate: "Mar 20, 2022"
    },
    {
      id: 4,
      name: "Sarah Wilson",
      email: "sarah@example.com",
      phone: "+1 (555) 234-5678",
      orders: 15,
      status: "Active",
      joinDate: "Dec 10, 2021"
    },
    {
      id: 5,
      name: "Mike Brown",
      email: "mike@example.com",
      phone: "+1 (555) 345-6789",
      orders: 6,
      status: "Pending",
      joinDate: "Apr 5, 2022"
    }
  ]

  const statusColors = {
    Active: "bg-green-100 text-green-800",
    Inactive: "bg-gray-100 text-gray-800",
    Pending: "bg-yellow-100 text-yellow-800"
  }

  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-6">
      {/* Breadcrumb and Date Range */}
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6 gap-4">
        <div>
          <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">Customers List</h1>
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <Link href="/" className="hover:text-gray-900 transition-colors">
              Home
            </Link>
            <FaChevronRight className="w-3 h-3" />
            <span className="text-gray-900 font-medium">Customers List</span>
          </div>
        </div>
        
        <div className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-300 rounded-lg text-gray-600">
          <FaCalendarAlt className="w-4 h-4" />
          <span className="text-sm font-medium">Feb 15, 2022 - Feb 21, 2022</span>
        </div>
      </div>

      {/* Filters Section */}
      <div className="bg-white rounded-xl shadow-sm p-4 md:p-6 mb-6">
        <div className="flex flex-col lg:flex-row gap-4">
          {/* Search and Category */}
          <div className="flex flex-col sm:flex-row gap-3 flex-1">
            <div className="relative flex-1">
              <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <input 
                type="text" 
                placeholder="Search customers..." 
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
              />
            </div>
            
            <select className="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white text-sm">
              <option>All Customers</option>
              <option>New Customers</option>
              <option>Returning Customers</option>
              <option>VIP Customers</option>
            </select>
          </div>

          {/* Date, Status, and Filters */}
          <div className="flex flex-col sm:flex-row gap-3">
            <div className="relative">
              <FaCalendarAlt className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <input 
                type="text" 
                placeholder="Select date..." 
                className="pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent w-full sm:w-40 text-sm"
              />
            </div>
            
            <select className="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white w-full sm:w-32 text-sm">
              <option>All Status</option>
              <option>Active</option>
              <option>Inactive</option>
              <option>Pending</option>
            </select>
            
            <button className="flex items-center gap-2 px-4 py-3 border border-gray-300 rounded-lg text-gray-600 hover:bg-gray-50 transition-colors text-sm">
              <FaFilter className="w-4 h-4" />
              <span className="hidden sm:inline">Filters</span>
            </button>
          </div>
        </div>
      </div>

      {/* Clients List - Desktop View */}
      <div className="hidden lg:block bg-white rounded-xl shadow-sm p-4 md:p-6">
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead className="bg-gray-50 border-b">
              <tr>
                <th className="p-4 font-medium text-gray-600 text-sm">Customer</th>
                <th className="p-4 font-medium text-gray-600 text-sm">Email</th>
                <th className="p-4 font-medium text-gray-600 text-sm">Phone</th>
                <th className="p-4 font-medium text-gray-600 text-sm">Orders</th>
                <th className="p-4 font-medium text-gray-600 text-sm">Join Date</th>
                <th className="p-4 font-medium text-gray-600 text-sm">Status</th>
                <th className="p-4 font-medium text-gray-600 text-sm">Action</th>
              </tr>
            </thead>
            <tbody>
              {clients.map((client) => (
                <tr key={client.id} className="border-b hover:bg-gray-50 transition-colors">
                  <td className="p-4">
                    <Link 
                      href={`/client/${client.id}`}
                      className="font-medium text-gray-900 hover:text-blue-600 transition-colors"
                    >
                      {client.name}
                    </Link>
                  </td>
                  <td className="p-4 text-gray-600 text-sm">{client.email}</td>
                  <td className="p-4 text-gray-600 text-sm">{client.phone}</td>
                  <td className="p-4 text-gray-600 text-sm">{client.orders} orders</td>
                  <td className="p-4 text-gray-600 text-sm">{client.joinDate}</td>
                  <td className="p-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${statusColors[client.status]}`}>
                      {client.status}
                    </span>
                  </td>
                  <td className="p-4">
                    <Link 
                      href={`/client/${client.id}`}
                      className="text-blue-600 hover:text-blue-800 text-sm font-medium transition-colors"
                    >
                      View Details
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Clients List - Mobile & Tablet View */}
      <div className="lg:hidden space-y-4">
        {clients.map((client) => (
          <Link 
            href={`/client/${client.id}`}
            key={client.id}
            className="block"
          >
            <div className="bg-white rounded-xl shadow-sm p-4 border hover:bg-gray-50 transition-colors">
              <div className="flex justify-between items-start mb-3">
                <div>
                  <h3 className="font-semibold text-gray-900 text-lg">{client.name}</h3>
                  <p className="text-gray-600 text-sm">{client.email}</p>
                </div>
                <span className={`px-3 py-1 rounded-full text-xs font-medium ${statusColors[client.status]}`}>
                  {client.status}
                </span>
              </div>

              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <span className="text-gray-500">Phone:</span>
                  <p className="text-gray-900 font-medium">{client.phone}</p>
                </div>
                <div>
                  <span className="text-gray-500">Orders:</span>
                  <p className="text-gray-900 font-medium">{client.orders} orders</p>
                </div>
                <div>
                  <span className="text-gray-500">Join Date:</span>
                  <p className="text-gray-900 font-medium">{client.joinDate}</p>
                </div>
                <div className="flex items-end">
                  <span className="text-blue-600 font-medium">View Details →</span>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default ClientList