import BreadcrumbComp from "@/app/components/BreadcrumbComp";
import { Button } from "@/components/ui/button";

export default function ProductDetails({params}) {
    console.log(params);
    
    return (
      <div className="px-[30px] md:px-[50px] lg:px-[100px] py-10">
        <BreadcrumbComp title="Borito" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 mt-4">
          <div  className="border-slate-400 border-2 rounded-xl">
            <img src="/place.jpg" className="w-full rounded-xl" />
          </div>
          <div className="flex flex-col gap-4">
            <h1 className="text-4xl font-bold">Borito</h1>
            <p className="text-xl font-medium">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum </p>
            <p className="text-3xl font-semibold">Price: ₦1,550.00</p>
            <p className="text-xl font-medium">Category: Desert</p>
            <div>
              <Button>Add to Cart</Button>
            </div>
          </div>
        </div>
      </div>
    );
  }
  