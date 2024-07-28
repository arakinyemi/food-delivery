import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { RiArrowDropDownLine } from "react-icons/ri";
import { fetchCategories, fetchLimitCategories } from "@/lib/utils";
import Link from "next/link";

export default async function CategoryFilterBtn() {
  const categories = await fetchCategories();
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button>Filter By Categories <RiArrowDropDownLine/></Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel>Categories</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuRadioGroup value="bottom">
          {
            categories && categories.length > 0 ?
              categories.map((category) => (
                <Link href={`/category/${category.slug}`}><DropdownMenuRadioItem>{category.name}</DropdownMenuRadioItem></Link>
              )) : 
              null
          }
          
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
