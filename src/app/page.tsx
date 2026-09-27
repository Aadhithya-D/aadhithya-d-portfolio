"use client";
import { LeftSideMain } from "@/app/components/main-left-side";
import { RightSideMain } from "@/app/components/main-right-side";

export default function Home() {
  return (
    <div className="paper-page min-h-screen">
      <main className="mx-auto box-border w-full max-w-xl px-6 py-14 sm:px-8 sm:py-20">
        <LeftSideMain />
        <RightSideMain />
      </main>
    </div>
  );
}
