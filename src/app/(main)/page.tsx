import ResponsiveLayout from "@/components/layout/ResponsiveLayout";
import CustomCarouselDesktop from "@/components/features/carousel/Carousel";
import AccessPanelDesktop from "@/components/features/access-panel/access-panel";
import ProductDesktop from "@/components/features/products/product";
import CategorySliderMobile from "@/components/features/category/category-slider";

export default function HomePage() {
 return (
  <ResponsiveLayout>
   <div className="w-full">
    <div className="block lg:hidden">
     <CategorySliderMobile />
    </div>
   </div>
   <div className="w-full">
    <div className="block">
     <CustomCarouselDesktop />
    </div>
    <div className="hidden lg:block">
     <AccessPanelDesktop />
    </div>
    <div className="w-full">
     <div className="block">
      <ProductDesktop />
     </div>
    </div>
   </div>
  </ResponsiveLayout>
 );
}
