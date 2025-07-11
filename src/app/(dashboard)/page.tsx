// import { auth } from "@clerk/nextjs/server";
import Main from "@/components/layout/main-nav";
import Carousel from "@/components/features/carousel";
import AccessPanel from "@/components/features/access-panel";

export default async function HomePage() {
  // const { userId } = await auth();

  return (
    <>
      <main>
        <Main />
        <Carousel />
        <AccessPanel />
      </main>
    </>
  );
}
