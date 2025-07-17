import React from "react";
import { Skeleton } from "@/components/ui/skeleton";

function skeleton() {
 return (
  <>
   <div className="w-full max-w-6xl mx-auto mt-8">
    <div className="grid grid-cols-4 gap-2">
     {[...Array(4)].map((_, index) => (
      <div key={index} className="animate-pulse">
       <Skeleton className="h-40 rounded-lg mb-3" />
      </div>
     ))}
    </div>
   </div>
  </>
 );
}

export default skeleton;
