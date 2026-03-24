import React from "react";
import ProductCard from "../Ui/ProductCard";
import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const ProductBar = () => {
  const [Product, setProduct] = useState([]);
  useEffect(() => {
    const FetchProducts = async () => {
      try {
        let response = await axios.get("https://dummyjson.com/products");
        console.log(response.data.products);
        setProduct(response.data.products);
      } catch (error) {
        console.log(error);
      }
    };
    FetchProducts();
  }, []);

  return (
    <>
      <section className="p-6 flex items-center justify-center">
        <div className="grid grid-cols-1 sm:grid-cols-4 md:grid-cols-4 gap-4">
          {Product.map((data) => {
            return (
              <Link to={`/product/${data.id}`} key={data.id}>
                <ProductCard Product_data={data} />;
              </Link>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default ProductBar;
