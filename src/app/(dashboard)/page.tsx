// import { auth } from "@clerk/nextjs/server";
import ResponsiveLayout from "@/components/layout/ResponsiveLayout";
import ResponsiveFeatures from "@/components/features/ResponsiveFeatures";
import ResponsiveCategory from "@/components/features/ResponsiveCategory";

export default async function HomePage() {

  return (
    <ResponsiveLayout>
      <ResponsiveCategory />
      <ResponsiveFeatures />
    </ResponsiveLayout>
  );
}
