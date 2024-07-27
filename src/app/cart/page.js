import { Button } from "@/components/ui/button";
import BreadcrumbComp from "../components/BreadcrumbComp";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"


export default function Cart() {
    return (
      <div className="px-[30px] md:px-[50px] lg:px-[100px] py-10">
        <BreadcrumbComp title="Cart" />
        <Table className="mt-4">
          <TableHeader>
            <TableRow>
              <TableHead className="w-[150px]"></TableHead>
              <TableHead>Title</TableHead>
              <TableHead>Category</TableHead>
              <TableHead>Price</TableHead>
              <TableHead className="text-right">Remove</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow className="text-[18px]">
              <TableCell>
                <img src="/place.jpg" className="w-full" />
              </TableCell>
              <TableCell>Borito</TableCell>
              <TableCell>Dessert</TableCell>
              <TableCell className="font-bold text-xl">₦ 1,550.00</TableCell>
              <TableCell className="text-right">
                <Button>Remove From Cart</Button>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>

        <div className="text-3xl font-bold text-center mt-10">
          <h1>Total: ₦ 1,550.00</h1>
        </div>

      </div>
    );
  }
  