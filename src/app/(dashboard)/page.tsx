// import { auth } from "@clerk/nextjs/server";
import ResponsiveLayout from "@/components/layout/ResponsiveLayout";
import ResponsiveFeatures from "@/components/features/ResponsiveFeatures";
import ResponsiveCategory from "@/features/category/ResponsiveCategory";

export default async function HomePage() {
  // const { userId } = await auth();

  return (
    <ResponsiveLayout>
      <ResponsiveCategory />
      <ResponsiveFeatures />
    </ResponsiveLayout>
  );
}
