// import * as React from "react";
// import { cn } from "@/lib/utils";

// interface ResponsiveCardProps extends React.ComponentProps<"div"> {
//   variant?: "desktop" | "mobile" | "auto";
// }

// function ResponsiveCard({ className, variant = "auto", ...props }: ResponsiveCardProps) {
//   const baseClasses = "bg-card text-card-foreground flex flex-col rounded-xl border shadow-sm";

//   const variantClasses = {
//     desktop: "gap-6 py-6",
//     mobile: "gap-3 py-3",
//     auto: "gap-3 sm:gap-6 py-3 sm:py-6",
//   };

//   return <div data-slot="card" className={cn(baseClasses, variantClasses[variant], className)} {...props} />;
// }

// function ResponsiveCardHeader({ className, variant = "auto", ...props }: ResponsiveCardProps) {
//   const baseClasses = "@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-3 sm:[.border-b]:pb-6";

//   const variantClasses = {
//     desktop: "gap-1.5 px-6",
//     mobile: "gap-1 px-3",
//     auto: "gap-1 sm:gap-1.5 px-3 sm:px-6",
//   };

//   return <div data-slot="card-header" className={cn(baseClasses, variantClasses[variant], className)} {...props} />;
// }

// function ResponsiveCardTitle({ className, variant = "auto", ...props }: ResponsiveCardProps) {
//   const variantClasses = {
//     desktop: "text-lg",
//     mobile: "text-sm",
//     auto: "text-sm sm:text-lg",
//   };

//   return <div data-slot="card-title" className={cn("leading-none font-semibold", variantClasses[variant], className)} {...props} />;
// }

// function ResponsiveCardDescription({ className, variant = "auto", ...props }: ResponsiveCardProps) {
//   const variantClasses = {
//     desktop: "text-base",
//     mobile: "text-xs",
//     auto: "text-xs sm:text-sm",
//   };

//   return <div data-slot="card-description" className={cn("text-muted-foreground", variantClasses[variant], className)} {...props} />;
// }

// function ResponsiveCardAction({ className, ...props }: React.ComponentProps<"div">) {
//   return <div data-slot="card-action" className={cn("col-start-2 row-span-2 row-start-1 self-start justify-self-end", className)} {...props} />;
// }

// function ResponsiveCardContent({ className, variant = "auto", ...props }: ResponsiveCardProps) {
//   const variantClasses = {
//     desktop: "px-6",
//     mobile: "px-3",
//     auto: "px-3 sm:px-6",
//   };

//   return <div data-slot="card-content" className={cn(variantClasses[variant], className)} {...props} />;
// }

// function ResponsiveCardFooter({ className, variant = "auto", ...props }: ResponsiveCardProps) {
//   const baseClasses = "flex items-center [.border-t]:pt-3 sm:[.border-t]:pt-6";

//   const variantClasses = {
//     desktop: "px-6",
//     mobile: "px-3",
//     auto: "px-3 sm:px-6",
//   };

//   return <div data-slot="card-footer" className={cn(baseClasses, variantClasses[variant], className)} {...props} />;
// }

// export { ResponsiveCard, ResponsiveCardHeader, ResponsiveCardFooter, ResponsiveCardTitle, ResponsiveCardAction, ResponsiveCardDescription, ResponsiveCardContent };
