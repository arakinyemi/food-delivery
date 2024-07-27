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

export default function Products() {
  return (
    <>
      <div className="relative h-40 px-[30px] md:px-[50px] lg:px-[100px] py-10"> 
        <p className="text-center text-4xl font-semibold">Our Products</p>
        <Button className="absolute bottom-4 right-4 lg:bottom-8 lg:right-8 ">Filter By Categories <RiArrowDropDownLine/></Button>
      </div>
      <div className="bg-[#dedede] h-full">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 p-5 mb-3">
          {Array.from({length: 24}).map((_, index) => (
            <a href="/" key={index}><CardItem/></a>
          ))}
        </div>
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
              <PaginationEllipsis />
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">3</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">4</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationNext href="#" />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </div>
    </>
  );
}