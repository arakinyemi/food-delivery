import { Button } from "@/components/ui/button";
import { RiArrowDropDownLine } from "react-icons/ri";
import CardItem from "../components/CardItem";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination"
import CategoryFilterBtn from "../components/CategoryFilterBtn";

export default function Products() {
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
          <CardItem/>
          <CardItem/>
          <CardItem/>
          <CardItem/>
          <CardItem/>
          <CardItem/>
          <CardItem/>
          <CardItem/>
      </div>
      <div>
        <Pagination>
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious href="#" />
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">1</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">2</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationNext href="#" />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </div>
      </div>
    </>
  );
}