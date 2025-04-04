"use client";
import { motion } from "motion/react";
import { RefreshCcw, Send, ShieldAlert, WalletMinimal } from "lucide-react";
import { useState } from "react";

import { cn } from "@/lib/utils";

import { Card } from "@/components/ui/card";

const tabs = [
  {
    icon: WalletMinimal,
    text: "your wallet",
    textColor: "text-gray-200",
    bgColor: "bg-zinc-400/10",
  },
  {
    icon: Send,
    text: "send",
    textColor: "text-gray-200",
    bgColor: "bg-zinc-400/10",
  },
  {
    icon: RefreshCcw,
    text: "swap",
    textColor: "text-gray-200",
    bgColor: "bg-zinc-400/10",
  },
  {
    icon: ShieldAlert,
    text: "secure",
    textColor: "text-red-500",
    bgColor: "bg-red-300/10",
  },
];

const AnimatedTabsComponent = () => {
  const [activeTab, setActiveTab] = useState<string>();

  return (
    <Card className="flex w-full min-w-[300px] items-center justify-center p-6">
      <div
        className="rounded-2xl bg-zinc-900 p-2 shadow-[inset_0px_0.5px_0px_1px_#65656522] drop-shadow-md 
    md:h-[54px] md:min-w-[450px]"
        onMouseLeave={() => setActiveTab("")}
      >
        <div className="flex h-full w-full flex-col items-center justify-evenly md:flex-row">
          {tabs.map((tab) => (
            <motion.div
              key={tab.text}
              layout
              className={cn(
                "relative flex w-full cursor-pointer items-center gap-6 px-4 py-2 text-sm outline-none transition-colors",
                activeTab === tab.text ? tab.textColor : "text-zinc-400"
              )}
              onFocus={() => setActiveTab(tab.text)}
              onMouseOver={() => setActiveTab(tab.text)}
              onMouseLeave={() => setActiveTab(tab.text)}
            >
              {activeTab === tab.text ? (
                <motion.div
                  layoutId="tab-indicator"
                  className={cn(
                    "absolute inset-0 rounded-lg transition-colors",
                    tab.bgColor
                  )}
                />
              ) : null}
              <tab.icon className="h-3 w-3" />
              <span className="relative text-nowrap text-lg text-inherit">
                {tab.text}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </Card>
  );
};

export default AnimatedTabsComponent;
