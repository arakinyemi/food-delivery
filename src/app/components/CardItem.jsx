"use client"
import React from "react";
import { Card, CardContent, CardFooter } from "../../components/ui/card";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
// import placeholderPicture from "/place.jpg";

export default function CardItem({product}){
    const router = useRouter();

    function handleProductDetails(id) {
        router.push(`/products/${id}`)
    }
    return(
        <Card className="rounded-lg shadow-lg">
            <CardContent>
                <div className="w-full">
                    <img src={product.thumbnail} className="w-full rounded-t-lg"/>
                </div>
            </CardContent>
            <CardFooter className="mt-3 shadow-inner">
                <div className="flex gap-2 flex-col justify-between mt-4">
                    <p className="font-medium text-2xl">{product.title}</p>
                    <p className="font-semibold text-md">₦{product.price}</p>
                    <div>
                        <Button onClick={() => handleProductDetails(product.id)}>View Details</Button>
                    </div>
                </div>
            </CardFooter>
        </Card>
    )
}