"use client";
import { LeftSideMain } from "@/components/left-side-main";
import { RightSideMain } from "@/components/right-side-main";
import GridPattern from "@/components/ui/grid-pattern";

export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-primary-background">
      <GridPattern
        width={30}
        height={30}
        x={-1}
        y={-1}
        strokeDasharray={"4 2"}
        className="absolute inset-0 size-full opacity-80 bg-primary-background"
      />
      <main className="max-w-screen-2xl h-[100vh] p-6 w-full relative ">
        <div className="flex h-[calc(100%+3rem)] w-full -my-6 -mb-8 gap-3 flex-col md:flex-row ">
          <div className="md:w-[40%] w-[100%] py-6">
            <div className="h-full p-4 bg-background border-2 rounded-xl overflow-y-auto">
              <LeftSideMain />
            </div>
          </div>
          <div className="md:w-[60%] w-[100%] py-6 ">
            <div className="h-full bg-background pb-4 rounded-xl  border-2 overflow-y-auto">
              <RightSideMain />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
