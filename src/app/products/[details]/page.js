import AddToCartBtn from "@/app/components/AddToCartBtn";
import BreadcrumbComp from "@/app/components/BreadcrumbComp";
import { Button } from "@/components/ui/button";
import { fetchLimitProductDetails } from "@/lib/utils";

export default async function ProductDetails({params}) {
    const productDetails = await fetchLimitProductDetails(params.details);
    
    return (
      <div className="px-[30px] md:px-[50px] lg:px-[100px] py-10">
        <BreadcrumbComp title={productDetails?.title} />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 mt-4">
          <div  className="shadow-lg rounded-xl">
            <img src={productDetails?.thumbnail} className="w-full rounded-xl" />
          </div>
          <div className="flex flex-col gap-4">
            <h1 className="text-4xl font-bold">{productDetails?.title}</h1>
            <p className="text-xl font-medium">{productDetails?.description}</p>
            <p className="text-3xl font-semibold">Price: ₦{productDetails?.price}</p>
            <p className="text-xl font-medium">Category: {productDetails?.category}</p>
            <div>
              <AddToCartBtn productDetails={productDetails} />
            </div>
          </div>
        </div>
      </div>
    );
  }
  