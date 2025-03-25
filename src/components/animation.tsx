import { cn } from "@/lib/utils";
import { ComponentPropsWithoutRef, PropsWithChildren } from "react";
import { Button } from "./ui/button";

export const Animation = ({
  className,
  ...props
}: PropsWithChildren & ComponentPropsWithoutRef<"section">) => {
  return (
    <section
      data-slot="Animation"
      className={cn(
        "w-full min-w-[300px] items-center justify-center p-6 bg-black rounded-2xl",
        className
      )}
      {...props}
    />
  );
};
Animation.displayName = "Animation";

export const AnimationButton = ({
  className,
  ...props
}: PropsWithChildren & ComponentPropsWithoutRef<"button">) => {
  return (
    <Button
      data-slot="AnimationButton"
      size={"lg"}
      variant={"outline"}
      className={cn("p-4 mb-8", className)}
      {...props}
    />
  );
};
Animation.displayName = "Animation";

export const AnimationContent = ({
  className,
  ...props
}: PropsWithChildren & ComponentPropsWithoutRef<"div">) => {
  return (
    <div
      data-slot="AnimationContent"
      className={cn("", className)}
      {...props}
    />
  );
};
AnimationContent.displayName = "AnimationContent";

export const AnimationDescription = ({
  className,
  children,
  ...props
}: PropsWithChildren & ComponentPropsWithoutRef<"article">) => {
  return (
    <article
      data-slot="AnimationDescription"
      className={cn("font-mono text-lg mt-12 max-w-3xl text-white", className)}
      {...props}
    >
      <p className="mb-2 font-bold text-white">Description: </p>
      {children}
    </article>
  );
};
AnimationDescription.displayName = "AnimationDescription";
