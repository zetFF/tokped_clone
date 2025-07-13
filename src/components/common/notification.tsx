import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Popover, PopoverContent, PopoverTrigger } from "@radix-ui/react-popover";
import { BellIcon, Settings } from "lucide-react";

function notification() {
  return (
    <>
      <Popover>
        <PopoverTrigger asChild>
          <button aria-label="Notification" className="relative">
            <BellIcon className="w-5" />
          </button>
        </PopoverTrigger>
        <PopoverContent align="center" sideOffset={10} className="p-0 w-64 sm:w-[350px] z-10 shadow rounded-bl-lg bg-white rounded-br-lg">
          <div className="w-full max-w-xl px-2 sm:px-4 py-2 sm:py-3">
            <div className="flex items-center justify-between mb-2 sm:mb-4">
              <h1 className="text-sm sm:text-base font-semibold tracking-tight text-gray-800">Pengaturan Akses</h1>
              <button className="settings">
                <Settings className="w-4 sm:w-5" />
              </button>
            </div>
            <Tabs defaultValue="account" className="w-full p-1 sm:p-2 rounded-lg">
              <TabsList className="w-full bg-white ">
                {[
                  { label: "Pulsa", value: "account" },
                  { label: "Paket Data", value: "password" },
                ].map((tab) => (
                  <TabsTrigger
                    key={tab.value}
                    value={tab.value}
                    className="flex-1 px-2 sm:px-4 py-1 sm:py-2 text-xs sm:text-sm font-bold text-neutral-600 data-[state=active]:bg-white data-[state=active]:text-green-600 transition-all"
                  >
                    {tab.label}
                  </TabsTrigger>
                ))}
              </TabsList>
              <div className="w-full h-[1px] bg-neutral-200"></div>
              <TabsContent value="account" className="mt-2 sm:mt-4">
                <p className="text-xs sm:text-sm">Informasi akun kamu tampil di sini.</p>
              </TabsContent>
              <TabsContent value="password" className="mt-2 sm:mt-4">
                <p className="text-xs sm:text-sm">Form untuk password akan ditampilkan di sini.</p>
              </TabsContent>
            </Tabs>
          </div>
        </PopoverContent>
      </Popover>
    </>
  );
}

export default notification;
