import React from "react"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link";

export default function Category({category}){
    return(
        <Link href={`/category/${category.slug}`}>
          <Card className="flex justify-center items-center rounded-xl shadow-lg w-[200px] h-[200px]">
            <CardContent>
              <p className="text-center text-2xl font-semibold">{category.name}</p>
            </CardContent>
          </Card>
        </Link>
    );
}
