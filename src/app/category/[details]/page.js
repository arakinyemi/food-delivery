import { Button } from "@/components/ui/button";
import { RiArrowDropDownLine } from "react-icons/ri";
import CardItem from "../../components/CardItem";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination"

export default function CategoryDetails({params}) {
  return (
    <>
      <div className="px-[30px] md:px-[50px] lg:px-[100px] py-10"> 
        <p className="text-center text-4xl font-semibold my-3">Dessert</p>
      </div>
      <div className="bg-[#f7f7f7] h-full px-[30px] md:px-[50px] lg:px-[100px] py-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 p-5 mb-3">
          <CardItem/>
          <CardItem/>
          <CardItem/>
          <CardItem/>
          <CardItem/>
          <CardItem/>
          <CardItem/>
          <CardItem/>
      </div>
      </div>
    </>
  );
}