import type { FC } from "react";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import Links from "@/lib/access-option";

const AccessOption: FC = () => {
  return (
    <>
      <Popover>
        <PopoverTrigger asChild>
          <button type="button" className="px-4 py-2 text-sm font-semibold text-neutral-700 hover:text-green-600 transition-colors">
            :
          </button>
        </PopoverTrigger>
        <PopoverContent align="start" side="bottom" className="w-52 p-4 shadow-md border rounded-lg bg-white">
          <nav className="flex flex-col gap-3 text-sm font-medium text-neutral-700">
            {Links.map((label, index) => (
              <a key={index} href="#" className="hover:text-green-600 transition-colors">
                {label}
              </a>
            ))}
          </nav>
        </PopoverContent>
      </Popover>
    </>
  );
};

export default AccessOption;
