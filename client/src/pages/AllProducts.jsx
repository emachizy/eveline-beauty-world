import React, { useEffect, useState } from "react";
import { useAppContext } from "../context/useAppContext";
import ProductCard from "../components/ProductCard";

const AllProducts = () => {
  const { products, searchQuery } = useAppContext();
  const [filteredProduct, setFilteredProduct] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadProducts = () => {
      setLoading(true);
      // Simulate delay or wait for actual data load
      setTimeout(() => {
        const filtered =
          searchQuery.length > 0
            ? products.filter((product) =>
                product.name.toLowerCase().includes(searchQuery.toLowerCase())
              )
            : products;

        setFilteredProduct(filtered);
        setLoading(false);
      }, 500); // Optional: simulate loading delay
    };

    loadProducts();
  }, [products, searchQuery]);

  return (
    <div className="mt-16 flex flex-col">
      <div className="flex flex-col items-end w-max">
        <p className="text-2xl font-medium uppercase">All products</p>
        <div className="w-16 h-0.5 bg-primary rounded-full"></div>
      </div>

      {loading ? (
        <div className="flex justify-center items-center h-64 w-full">
          <div className="animate-spin rounded-full h-10 w-10 border-t-2 border-b-2 border-primary"></div>
        </div>
      ) : filteredProduct.filter((product) => product.inStock).length === 0 ? (
        <div className="text-center text-gray-500 mt-10 text-lg">
          Your search doesn’t match any products.
        </div>
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 md:gap-6 lg:grid-cols-5 mt-6">
          {filteredProduct
            .filter((product) => product.inStock)
            .map((product, index) => (
              <ProductCard key={index} product={product} />
            ))}
        </div>
      )}
    </div>
  );
};

export default AllProducts;
