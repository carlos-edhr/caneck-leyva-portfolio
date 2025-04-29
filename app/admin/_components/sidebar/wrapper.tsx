"use client";
import { cn } from "@/lib/utils";
import { useSidebar } from "@/store/use-sidebar";
import { useState, useEffect } from "react";
import { useIsClient } from "usehooks-ts";
import { ToggleSkeleton } from "./toggle";
// import { RecommendedSkeleton } from "./recommended";
// import { FollowingSkeleton } from "./following";

interface WrapperProps {
  children: React.ReactNode;
}

export const Wrapper = ({ children }: WrapperProps) => {
  const isClient = useIsClient();
  const { collapsed } = useSidebar((state) => state);

  if (!isClient)
    return (
      <aside className="fixed left-0 flex flex-col w-60 h-full bg-stone-200 border-r border-[#2d2e35] z-50">
        <ToggleSkeleton />
        {/* <FollowingSkeleton /> */}
        {/* <RecommendedSkeleton /> */}
      </aside>
    );

  return (
    <aside
      className={cn(
        "fixed left-0 flex flex-col w-60 h-full bg-stone-200 text-slate-900 border-r border-[#2d2e35] z-50",
        collapsed && "w-[70px]",
      )}
    >
      {children}
    </aside>
  );
};
