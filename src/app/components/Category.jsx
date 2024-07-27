import React from "react"
import { Card, CardContent } from "@/components/ui/card"

export default function Category(){
    return(
        <Card className="h-43 md:h-50 lg:h-50 aspect-square flex justify-center items-center rounded-xl border-black">
          <CardContent >
            <p className="text-center text-2xl font-semibold">Fruits</p>
          </CardContent>
        </Card>
    );
}
