"use client";

import { useEffect, useState } from "react";

import { getProducts } from "../api/products/api"; // Ensure you have this correctly imported

export default function Home() {
  const [products, setProducts] = useState([]);

  const callproducts = async () => {
    const res = await getProducts();
    setProducts(res);
  };

  useEffect(() => {
    callproducts();
  }, []);

  return (
    <div className="bg-blue-100">
      {products && products.length > 0 ? (
        products.map((product, index) => (
          <div key={index} className="p-4 m-2 bg-white shadow-md rounded">
            <h3 className="font-bold">{product.name}</h3>
          </div>
        ))
      ) : (
        <p>No products available</p>
      )}
    </div>
  );
}
