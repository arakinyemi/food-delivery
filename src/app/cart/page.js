"use client"
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
import { useContext, useEffect, useState } from "react";
import { CartContext } from "../context/CartContext";


export default function Cart() {
  const {cartItems, setCartItems} = useContext(CartContext);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    setTotal(cartItems.reduce((acc, curr) => Math.round(acc + curr?.price), 0))
  }, [cartItems])

  function removeFromCart(id) {
    let cpyCart = [...cartItems]
    cpyCart  = cpyCart.filter((item) => item.id != id)
    setCartItems(cpyCart);
  }
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
              {cartItems &&  cartItems.length > 0 ? 
                cartItems.map((item) => (
                  <>
                    <TableRow className="text-[18px]">
                    <TableCell>
                      <img src={item.thumbnail} className="w-full" />
                    </TableCell>
                    <TableCell>{item.title}</TableCell>
                    <TableCell>{item.category}</TableCell>
                    <TableCell className="font-bold text-xl">₦{item.price}</TableCell>
                    <TableCell className="text-right">
                      <Button onClick={() => removeFromCart(item.id)}>Remove From Cart</Button>
                    </TableCell>
                    </TableRow>
                  </>
                ))
            : 
            null
            }
          </TableBody>
        </Table>

        <div className="text-3xl font-bold text-center mt-10">
          <h1>Total: ₦ {total}</h1>
        </div>

      </div>
    );
  }
  