"use client";

import AppStoreCard from "@/animations/app-store-card";
import BasisTransform from "@/animations/basic-transform";
import CopyButton from "@/animations/copy-button";
import DragBall from "@/animations/drag-ball";
import DynamicHeight from "@/animations/dynamic-height";
import LayoutAnimate from "@/animations/layout-animate";
import MultiStateButton from "@/animations/multi-state-button";
import SharedLayoutAnimation from "@/animations/shared-layout-animation";
import AnimatedTabsComponent from "@/animations/shared-layout-tab-animations";
import Task1 from "@/animations/task-1";
import UseTransform from "@/animations/use-transform";
import PageWrap from "@/components/page-wrap";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { useState } from "react";

type AnimateDemos =
  | "basic-transform"
  | "layout-animation"
  | "task-1"
  | "shared-layout-animation"
  | "shared-layout-animation-tabs"
  | "copy-button"
  | "multi-state-button"
  | "dynamic-height"
  | "drag-ball"
  | "use-transform"
  | "appstore-card";

const animationOptions: {
  value: AnimateDemos;
  title: string;
}[] = [
  {
    value: "basic-transform",
    title: "Basic Transform",
  },
  {
    value: "layout-animation",
    title: "Layout Animation",
  },
  {
    value: "task-1",
    title: "Layout Task",
  },
  {
    value: "shared-layout-animation",
    title: "Shared Layout Animation - App Store List",
  },
  {
    value: "shared-layout-animation-tabs",
    title: "Shared Layout Animation - Tabs",
  },
  {
    value: "copy-button",
    title: "AnimatePresence - Copy Button",
  },
  {
    value: "multi-state-button",
    title: "AnimationPresence - Multiple State Button",
  },
  {
    value: "dynamic-height",
    title: "Animate Dynamic Height",
  },
  {
    value: "drag-ball",
    title: "Animate Drag - Drag Ball",
  },
  {
    value: "use-transform",
    title: "Animate with - Use Transform",
  },
  {
    value: "appstore-card",
    title: "Shared Layout Animation - App Store Card",
  },
];

export default function Home() {
  const [animateDemo, setAnimateDemo] =
    useState<AnimateDemos>("basic-transform");

  const renderAnimation = () => {
    switch (animateDemo) {
      case "basic-transform":
        return <BasisTransform />;
      case "layout-animation":
        return <LayoutAnimate />;
      case "task-1":
        return <Task1 />;
      case "shared-layout-animation":
        return <SharedLayoutAnimation />;
      case "shared-layout-animation-tabs":
        return <AnimatedTabsComponent />;
      case "copy-button":
        return <CopyButton />;
      case "multi-state-button":
        return <MultiStateButton />;
      case "dynamic-height":
        return <DynamicHeight />;
      case "drag-ball":
        return <DragBall />;
      case "use-transform":
        return <UseTransform />;
      case "appstore-card":
        return <AppStoreCard />;
    }
  };

  return (
    <PageWrap>
      <h1 className="text-3xl font-mono mb-8">Animations</h1>
      <RadioGroup
        value={animateDemo}
        onValueChange={(value: AnimateDemos) => setAnimateDemo(value)}
        className="mb-12 grid grid-cols-3 place-items-start"
      >
        {animationOptions.map((animation, index) => (
          <div key={index} className="flex items-start space-x-2 ">
            <RadioGroupItem
              value={animation.value}
              id={animation.value}
              className="mt-[5px] cursor-pointer"
            />
            <Label
              htmlFor={animation.value}
              className="font-mono text-lg cursor-pointer"
            >
              {animation.title}
            </Label>
          </div>
        ))}
      </RadioGroup>

      {renderAnimation()}
    </PageWrap>
  );
}
