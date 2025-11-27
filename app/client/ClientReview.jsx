"use client";

import { useState } from "react";
import { FaStar, FaEllipsisV } from "react-icons/fa";

const reviews = [
  {
    id: 1,
    name: "Jerome Bell",
    email: "sid_turner78@gmail.com",
    comment:
      "Aliquet libero in sit imperdiet ut at donec sagittis malesuada massa venenatis vehicula orci.",
    rating: 5,
    date: "28 Jan 2022",
  },
  {
    id: 2,
    name: "Kristin Watson",
    email: "maxime_moen@yahoo.com",
    comment:
      "Amet ultricies convallis netus nec, quisque arcu vitae elit cursus eros.",
    rating: 4,
    date: "28 Jan 2022",
  },
  {
    id: 3,
    name: "Ronald Richards",
    email: "santerfield35@gmail.com",
    comment:
      "Mauris cursus morbi sagittis euismod ipsum felis quis at ut molestie sit augue.",
    rating: 5,
    date: "28 Jan 2022",
  },
];

export default function ClientReview() {
  const [openAction, setOpenAction] = useState(null);

  return (
    <div className="p-6">
      <h2 className="text-xl font-semibold mb-4">Reviews List</h2>

      <div className="bg-white shadow rounded-md">
        <table className="w-full border-collapse">
          <thead>
            <tr className="text-left bg-gray-100">
              <th className="p-4"></th>
              <th className="p-4">Customer</th>
              <th className="p-4">Comment</th>
              <th className="p-4">Rating</th>
              <th className="p-4">Date</th>
              <th className="p-4">Actions</th>
            </tr>
          </thead>

          <tbody>
            {reviews.map((review) => (
              <tr key={review.id} className="border-b hover:bg-gray-50">
                <td className="p-4">
                  <input type="checkbox" className="h-4 w-4" />
                </td>

                <td className="p-4">
                  <div className="font-semibold">{review.name}</div>
                  <div className="text-sm text-gray-500">{review.email}</div>
                </td>

                <td className="p-4 max-w-xs">{review.comment}</td>

                <td className="p-4">
                  <div className="flex gap-1">
                    {[...Array(review.rating)].map((_, index) => (
                      <FaStar key={index} className="text-yellow-500" />
                    ))}
                  </div>
                </td>

                <td className="p-4">{review.date}</td>

                <td className="p-4 relative">
                  <button
                    onClick={() =>
                      setOpenAction(openAction === review.id ? null : review.id)
                    }
                    className="p-2 hover:bg-gray-200 rounded-full"
                  >
                    <FaEllipsisV />
                  </button>

                  {openAction === review.id && (
                    <div className="absolute right-4 top-10 w-32 bg-white shadow-lg rounded-md border z-10">
                      <button className="block w-full px-4 py-2 text-left hover:bg-gray-100">
                        Approved
                      </button>
                      <button className="block w-full px-4 py-2 text-left hover:bg-gray-100">
                        Reply
                      </button>
                      <button className="block w-full px-4 py-2 text-left hover:bg-red-200 text-red-600">
                        Delete
                      </button>
                    </div>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
