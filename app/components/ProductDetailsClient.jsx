
"use client";

import React, { useState } from "react";
import { FiUpload, FiX } from "react-icons/fi";

const ProductDetailsClient = ({ product }) => {
  const [images, setImages] = useState(product.images || []);
  const [previewImg, setPreviewImg] = useState(product.images?.[0] || "/watch.png");

  const handleUpload = (e) => {
    const files = Array.from(e.target.files);
    const newImages = files.map((file) => URL.createObjectURL(file));
    setImages([...images, ...newImages]);
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Product Details</h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      
        <div className="lg:col-span-2 bg-white p-6 rounded-xl shadow">

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

            <div>
              <label className="font-semibold text-sm">Product Name</label>
              <input
                type="text"
                defaultValue={product.name}
                className="w-full mt-2 p-2 border rounded-lg"
              />
            </div>

            <div>
              <label className="font-semibold text-sm">Category</label>
              <input
                type="text"
                defaultValue={product.category}
                className="w-full mt-2 p-2 border rounded-lg"
              />
            </div>

            <div>
              <label className="font-semibold text-sm">Brand</label>
              <input
                type="text"
                defaultValue={product.brand}
                className="w-full mt-2 p-2 border rounded-lg"
              />
            </div>

            <div>
              <label className="font-semibold text-sm">SKU</label>
              <input
                type="text"
                defaultValue={product.sku}
                className="w-full mt-2 p-2 border rounded-lg"
              />
            </div>

            <div>
              <label className="font-semibold text-sm">Regular Price</label>
              <input
                type="number"
                defaultValue={product.regularPrice}
                className="w-full mt-2 p-2 border rounded-lg"
              />
            </div>

            <div>
              <label className="font-semibold text-sm">Sale Price</label>
              <input
                type="number"
                defaultValue={product.salePrice}
                className="w-full mt-2 p-2 border rounded-lg"
              />
            </div>

            <div>
              <label className="font-semibold text-sm">Stock Quantity</label>
              <input
                type="number"
                defaultValue={product.stock}
                className="w-full mt-2 p-2 border rounded-lg"
              />
            </div>

            <div>
              <label className="font-semibold text-sm">Tax Class</label>
              <select className="w-full mt-2 p-2 border rounded-lg" defaultValue={product.taxClass}>
                <option>Standard</option>
                <option>Reduced</option>
              </select>
            </div>
          </div>

          <div className="mt-4">
            <label className="font-semibold text-sm">Description</label>
            <textarea
              defaultValue={product.description}
              className="w-full p-2 mt-2 border rounded-lg"
              rows={4}
            ></textarea>
          </div>

          <div className="flex gap-4 mt-6">
            <button className="px-5 py-2 bg-purple-600 text-white rounded-lg">
              Update
            </button>
            <button className="px-5 py-2 bg-red-500 text-white rounded-lg">
              Delete
            </button>
            <button className="px-5 py-2 bg-gray-400 text-white rounded-lg">
              Cancel
            </button>
          </div>
        </div>

        <div>
          <div className="bg-white p-6 shadow rounded-xl">
            <img
              src={previewImg}
              className="w-full h-64 object-contain rounded-lg"
            />
          </div>

          <div className="bg-white p-6 shadow rounded-xl mt-6">
            <label className="font-semibold mb-2 block">Product Gallery</label>

            <label className="border border-dashed border-blue-500 p-6 rounded-lg flex flex-col items-center justify-center cursor-pointer">
              <FiUpload size={28} className="text-blue-600" />
              <p className="text-sm mt-2">Drop your image here, or browse</p>

              <input
                type="file"
                multiple
                onChange={handleUpload}
                className="hidden"
              />
            </label>

            <div className="mt-4 space-y-3">
              {images.map((img, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between p-2 border rounded-lg bg-gray-50"
                >
                  <div className="flex items-center gap-3">
                    <img
                      src={img}
                      className="w-14 h-14 rounded object-cover cursor-pointer"
                      onClick={() => setPreviewImg(img)}
                    />
                    <span className="text-gray-700 text-sm">
                      product_thumbnail_{index + 1}.png
                    </span>
                  </div>

                  <button
                    onClick={() =>
                      setImages(images.filter((_, i) => i !== index))
                    }
                    className="text-red-500"
                  >
                    <FiX size={20} />
                  </button>
                </div>
              ))}
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailsClient;
