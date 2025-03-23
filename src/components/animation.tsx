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
      className={cn("p-4", className)}
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
      className={cn("font-mono text-lg mt-12 max-w-3xl", className)}
      {...props}
    >
      <p className="mb-2 font-bold">Description: </p>
      {children}
    </article>
  );
};
AnimationDescription.displayName = "AnimationDescription";
