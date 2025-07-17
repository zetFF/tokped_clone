import { Skeleton } from "@/components/ui/skeleton";

function SkeletonCard() {
 return (
  <>
   <div className="w-full max-w-6xl mx-auto mt-8">
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6">
     {[...Array(12)].map((_, index) => (
      <div key={index} className="animate-pulse">
       <Skeleton className="h-40 rounded-lg mb-3" />
       <Skeleton className="h-5 rounded bg-green-200 mb-2" />
       <Skeleton className="h-4 rounded bg-red-200 w-3/4" />
       <Skeleton className="h-4 rounded bg-neutral-200 mt-2 w-3/5" />
      </div>
     ))}
    </div>
   </div>
  </>
 );
}

export default SkeletonCard;
