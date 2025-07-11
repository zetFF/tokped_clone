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
        <PopoverContent align="center" sideOffset={10} className="p-0 w-[350px] z-10 shadow rounded-bl-lg bg-white rounded-br-lg">
          <div className="w-full max-w-xl px-4 py-3">
            <div className="flex items-center justify-between mb-4">
              <h1 className="text-base font-semibold tracking-tight  text-gray-800">Pengaturan Akses</h1>
              <button className="settings">
                <Settings className="w-5" />
              </button>
            </div>
            <Tabs defaultValue="account" className="w-full p-2 rounded-lg">
              <TabsList className="w-full bg-white ">
                {[
                  { label: "Pulsa", value: "account" },
                  { label: "Paket Data", value: "password" },
                ].map((tab) => (
                  <TabsTrigger
                    key={tab.value}
                    value={tab.value}
                    className="flex-1 px-4 py-2 text-sm font-bold text-neutral-600 data-[state=active]:bg-white data-[state=active]:text-green-600 transition-all"
                  >
                    {tab.label}
                  </TabsTrigger>
                ))}
              </TabsList>
              <div className="w-full h-[1px] bg-neutral-200"></div>

              <TabsContent value="account" className="mt-4">
                <p>Informasi akun kamu tampil di sini.</p>
              </TabsContent>
              <TabsContent value="password" className="mt-4">
                <p>Form untuk password akan ditampilkan di sini.</p>
              </TabsContent>
            </Tabs>
          </div>
        </PopoverContent>
      </Popover>
    </>
  );
}

export default notification;
