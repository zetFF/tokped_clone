// import { auth } from "@clerk/nextjs/server";
import TopNav from "@/components/top-nav";
import Navbar from "@/components/navbar";
import Carousel from "@/components/carousel";
import AccessPanel from "@/components/access-panel";

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
