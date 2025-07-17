import React from "react";
import { Button } from "@/components/ui/button";

function pulsa() {
 return (
  <>
   <div className="flex flex-row gap-4">
    <div className="flex flex-col gap-2 w-full">
     <label className="text-sm font-semibold text-neutral-500 tracking-tight">Nomor Telepon</label>
     <input type="text" className="p-3 w-full rounded-sm text-sm border bg-white border-neutral-200 focus:outline-none" placeholder="Masukan Nomor" />
    </div>
    <div className="flex flex-col gap-2 w-full">
     <label className="text-sm font-semibold text-neutral-500 tracking-tight">Nominal</label>
     <div className="flex gap-2">
      <input type="text" className="p-3 w-full rounded-sm text-sm border bg-white border-neutral-200 focus:outline-none" />
      <Button className="bg-neutral-400 px-7 py-5 text-base">Beli</Button>
     </div>
    </div>
   </div>
  </>
 );
}

export default pulsa;
