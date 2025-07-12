import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const responsiveButtonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground shadow-xs hover:bg-primary/90",
        destructive: "bg-destructive text-white shadow-xs hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",
        outline: "border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50",
        secondary: "bg-secondary text-secondary-foreground shadow-xs hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        // Desktop sizes
        desktop: "h-10 px-6 py-2 text-sm has-[>svg]:px-4",
        desktop_sm: "h-9 px-4 py-2 text-sm has-[>svg]:px-3",
        desktop_lg: "h-12 px-8 py-3 text-base has-[>svg]:px-6",

        // Mobile sizes
        mobile: "h-8 px-4 py-1.5 text-xs has-[>svg]:px-3",
        mobile_sm: "h-7 px-3 py-1 text-xs has-[>svg]:px-2.5",
        mobile_lg: "h-9 px-5 py-2 text-sm has-[>svg]:px-4",

        // Responsive sizes (default)
        default: "h-8 sm:h-9 px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm has-[>svg]:px-2.5 sm:has-[>svg]:px-3",
        sm: "h-7 sm:h-8 rounded-md gap-1.5 px-2.5 sm:px-3 text-xs sm:text-sm has-[>svg]:px-2 sm:has-[>svg]:px-2.5",
        lg: "h-9 sm:h-10 rounded-md px-4 sm:px-6 py-2 sm:py-2 text-sm sm:text-base has-[>svg]:px-3 sm:has-[>svg]:px-4",
        icon: "size-8 sm:size-9",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

interface ResponsiveButtonProps extends React.ComponentProps<"button">, VariantProps<typeof responsiveButtonVariants> {
  asChild?: boolean;
  responsive?: boolean;
}

function ResponsiveButton({ className, variant, size, asChild = false, responsive = true, ...props }: ResponsiveButtonProps) {
  const Comp = asChild ? Slot : "button";

  // If responsive is false, use desktop size
  const finalSize = responsive ? size : size?.includes("mobile") ? "desktop" : size;

  return <Comp data-slot="button" className={cn(responsiveButtonVariants({ variant, size: finalSize, className }))} {...props} />;
}

export { ResponsiveButton, responsiveButtonVariants };
