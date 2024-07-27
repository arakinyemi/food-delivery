import React from "react";
import CardItem from "./components/CardItem";
import Category from "./components/Category";
export default function Home() {
  return (
    <>
    <div className="p-10 bg-[#f7f7f7] h-100">
      <div className="flex-col items-center justify-center px-[30px] md:px-[50px] lg:px-[100px] py-10">
          <p className="text-center text-2xl md:text-3xl lg:text-4xl font-semibold ">Welcome to SharpSharp</p>
        <div>
          <p className="text-center text-l font-light p-2">We are all about bringing items from the place of sale to your doorstep exactly how you want them, without stress and <strong className="font-semibold">Sharp Sharp!</strong></p>
        </div>
      </div>
    </div>
    <div className="px-[30px] md:px-[50px] lg:px-[100px] py-10">
      <p className="text-center text-2xl md:text-3xl lg:text-4xl font-semibold p-6">Top Categories</p>
      <div className="flex justify-center">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-2  mx-auto">
          <Category category="Fruit" />
          <Category category="Desert" />
          <Category category="Appetizer" />
          <Category category="Vegetables" />
        </div>
      </div>
    </div>
    <div className="bg-[#f7f7f7] h-full px-[30px] sm:px-[50px] lg:px-[100px] py-10">
      <p className="text-center text-2xl md:text-3xl lg:text-4xl font-semibold p-6">Our Newest Offers</p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 p-5 mb-3">
        <CardItem/>
        <CardItem/>
        <CardItem/>
        <CardItem/>
        <CardItem/>
        <CardItem/>
        <CardItem/>
        <CardItem/>
    </div>
    <div className="flex justify-center items-center">
    <a href="/products" className="text-center text-base lg:text-l font-semibold p-6">View All Products</a>
    </div>
    </div>
    </>
  );
}
