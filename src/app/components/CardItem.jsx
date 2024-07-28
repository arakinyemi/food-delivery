"use client"
import React from "react";
import { Card, CardContent, CardFooter } from "../../components/ui/card";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
// import placeholderPicture from "/place.jpg";

export default function CardItem(){
    const router = useRouter();

    function handleProductDetails() {
        router.push('/products/1')
    }
    return(
        <Card className="rounded-lg shadow-lg">
            <CardContent>
                <div className="w-full">
                    <Image src="/Buritto.jpeg" width={200} height={200} className="w-full rounded-t-lg"/>
                </div>
            </CardContent>
            <CardFooter className="mt-3 shadow-inner">
                <div className="flex gap-2 flex-col justify-between mt-4">
                    <p className="font-medium text-2xl">Borito</p>
                    <p className="font-semibold text-md">₦1,550.00</p>
                    <Button onClick={handleProductDetails}>View Details</Button>
                </div>
            </CardFooter>
        </Card>
    )
}