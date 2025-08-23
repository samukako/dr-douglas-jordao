import { cn } from "./utils";

function Skeleton({ classNameprops }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="skeleton"
      className={cn("bg-accent animate-pulse rounded-md", className)}
      {props}
    />
  );
}

export { Skeleton };