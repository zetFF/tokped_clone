// import { auth } from "@clerk/nextjs/server";
import Main from "@/components/layout/main-nav";
import Carousel from "@/components/features/carousel";
import AccessPanel from "@/components/features/access-panel";
import SliderCategory from "@/features/category/slider-category";

export default async function HomePage() {
  // const { userId } = await auth();

  return (
    <>
      <main>
        <Main />
        <SliderCategory />
        <Carousel />
        <AccessPanel />
      </main>
    </>
  );
}
