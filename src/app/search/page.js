"use client"
import CardItem from "../components/CardItem";
import {useEffect, useState} from "react"

export default function Search({searchParams}) {
    const [products, setProducts] = useState([])
    useEffect(() => {
        async function fetchProducts() {
          try {
            const response = await fetch(`https://dummyjson.com/products/search?q=${searchParams.q}`);
            const result = await response.json();
            setProducts(result.products);
          } catch(error) {
            console.log(error);
          }
        }
        fetchProducts();
      }, [searchParams])
      console.log(products);
  return (
    <>
      <div className="px-[30px] md:px-[50px] lg:px-[100px] py-10"> 
        <p className="text-center text-4xl font-semibold my-3 capitalize">Search Results</p>
      </div>
      <div className="bg-[#f7f7f7] h-full px-[30px] md:px-[50px] lg:px-[100px] py-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 p-5 mb-3">
          {
          products && products.length > 0 ?
            products.map((product)  => (
              <CardItem  product={product} />
            ))
          : null
        }
      </div>
      </div>
    </>
  );
}