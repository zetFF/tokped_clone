// import { auth } from "@clerk/nextjs/server";
import TopNav from "@/components/layout/TopNav";
import Navbar from "@/components/layout/Navbar";
import Carousel from "@/components/features/carousel";
import AccessPanel from "@/components/features/access-panel";

export default async function HomePage() {
  // const { userId } = await auth();

  return (
    <>
      <header>
        <TopNav />
        <Navbar />
        <Carousel />
        <AccessPanel />
      </header>
    </>
  );
}
