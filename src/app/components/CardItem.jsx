import React from "react";
import { Card, CardContent, CardFooter } from "../../components/ui/card";
import Image from "next/image";
// import placeholderPicture from "/place.jpg";

export default function CardItem(){
    return(
        <Card className="rounded-lg border-black aspect-square">
            <CardContent>
                <div className="w-full">
                <Image src="/placeholder.svg" width={200} height={200} className="w-full rounded-t-lg"/>
                </div>
            </CardContent>
            <CardFooter className="border-t-black">
                <div className="flex-col justify-between">
                    <p className="font-light text-2xl pb-1">Borito</p>
                    <p className="">₦1,550.00</p>
                </div>
            </CardFooter>
        </Card>
    )
}