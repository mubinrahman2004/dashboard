// import React from 'react'

// const Revenue = () => {

//     const RevenueCard = [
//   {
//     id: 1,
//     price:1735 ,
//     name: "Orders",
//     bgcolor: "bg-purple-100",
// },
//   {
//     id: 2,
//     price:1735 ,
//     name: "Earnings"
// },
//   {
//     id: 3,
//     price:1735 ,
//     name: "Transactions"
// },
//   {
//     id: 4,
//     price:1735 ,
//     name: "Followers"
// },
//   {
//     id: 5,
//     price:1735 ,
//     name: "Refunds"
// },
//   {
//     id: 6,
//     price:1735 ,
//     name: "Conversation"
// },
//   {
//     id: 7,
//     price:1735 ,
//     name: "Rating"
// },

// ]
//   return (
//     <div>
//         <div>
//            <div>
//             {RevenueCard.map((R)=>(
//     <h2 key={R.id}>{R.price} {R.name}</h2>
//             ))}
//            </div>
//         </div>
//     </div>
//   )
// }

// export default Revenue
import React from 'react'

const Revenue = () => {
  const RevenueCard = [
    { id: 1, price: 1735, name: "Orders", bgcolor: "bg-purple-100" },
    { id: 2, price: 1735, name: "Earnings", bgcolor: "bg-blue-100" },
    { id: 3, price: 1735, name: "Transactions", bgcolor: "bg-green-100" },
    { id: 4, price: 1735, name: "Followers", bgcolor: "bg-yellow-100" },
    { id: 5, price: 1735, name: "Refunds", bgcolor: "bg-red-100" },
    { id: 6, price: 1735, name: "Conversation", bgcolor: "bg-indigo-100" },
    { id: 7, price: 1735, name: "Rating", bgcolor: "bg-pink-100" },
  ]

  return (
    <div className="bg-white rounded-xl shadow-sm p-4 md:p-6">
      <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-6">Revenue Overview</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-7 gap-3 md:gap-4">
        {RevenueCard.map((R) => (
          <div 
            key={R.id} 
            className={`${R.bgcolor} rounded-xl p-4 text-center hover:shadow-md transition-shadow duration-200`}
          >
            <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-1">{R.price}</h3>
            <p className="text-xs md:text-sm text-gray-600 font-medium">{R.name}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Revenue