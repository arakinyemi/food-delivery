"use client"
import CardItem from "../components/CardItem";
import CategoryFilterBtn from "../components/CategoryFilterBtn";
import { Pagination } from "antd";

import { useEffect, useState } from "react";

export default function Products({searchParams}) {
  const per_page = 8
  const [page, setPage] = useState(1);
  const [products, setProducts] = useState([]);
  const [total, setTotal] = useState(0);
  let start = (Number(page)-1) * Number(per_page)

  useEffect(() => {
    async function fetchProducts() {
      try {
        const response = await fetch(`https://dummyjson.com/products?limit=8&skip=${start}`);
        const result = await response.json();
        setProducts(result);
        setTotal(result.total)
      } catch(error) {
        console.log(error);
      }
    }
    fetchProducts();
  }, [page])
  console.log(products);

  function onChange(page) {
    setPage(page);
    start = (Number(page)-1) * Number(per_page);
  }

  return (
    <>
      <div className="px-[30px] md:px-[50px] lg:px-[100px] py-10"> 
        <p className="text-center text-4xl font-semibold my-3">Our Products</p>
        <div className="flex justify-end">
          <CategoryFilterBtn />
        </div>
      </div>
      <div className="bg-[#f7f7f7] h-full px-[30px] md:px-[50px] lg:px-[100px] py-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 p-5 mb-3">
        {
          products && products?.products?.length > 0 ?
            products?.products?.map((product)  => (
              <CardItem  product={product} />
            ))
          : null
        }
      </div>
      <div className="flex justify-center">
            <Pagination align="center" defaultCurrent={1} total={total} onChange={onChange} showSizeChanger={false} />
        </div>
      </div>
    </>
  );
}