import CategoryFilterBtn from "@/app/components/CategoryFilterBtn";
import CardItem from "../../components/CardItem";
import { fetchProductByCategory } from "@/lib/utils";

export default async function CategoryDetails({params}) {
  const products = await fetchProductByCategory(params.details);
  const name = params.details.replace(/-/g,  ' ');
  return (
    <>
      <div className="px-[30px] md:px-[50px] lg:px-[100px] py-10"> 
        <p className="text-center text-4xl font-semibold my-3 capitalize">{name}</p>
        <div className="flex justify-end">
          <CategoryFilterBtn />
        </div>
      </div>
      <div className="bg-[#f7f7f7] h-full px-[30px] md:px-[50px] lg:px-[100px] py-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 p-5 mb-3">
          {
          products && products.length > 0 ?
            products.map((product)  => (
              <CardItem  product={product} />
            ))
          : null
        }
      </div>
      </div>
    </>
  );
}