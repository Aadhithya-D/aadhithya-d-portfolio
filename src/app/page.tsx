"use client";
import { LeftSideMain } from "@/components/left-side-main";
import { RightSideMain } from "@/components/right-side-main";
import GridPattern from "@/components/ui/grid-pattern";

export default function Home() {
  return (
    <div>
      <div className="min-h-screen flex items-center justify-center ">
        <GridPattern
          width={30}
          height={30}
          x={-1}
          y={-1}
          strokeDasharray={"4 2"}
          className="absolute inset-0 size-full opacity-80"
        />
        <div
          className="absolute inset-x-0   w-full  h-full -z-10 transform-gpu  blur-3xl   "
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%-11rem)]  aspect-[1155/678]  -translate-x-2/3 w-full translate-y-1/3  rotate-[90deg] bg-gradient-to-tr  from-fuchsia-100 to-fuchsia-200 opacity-30 sm:left-[calc(50%-30rem)] sm:w-[100rem]"
            style={{
              clipPath: "ellipse(37% 30% at 28% 50%)",
            }}
          />
          <div
            className="left-[calc(50%-11rem)]  aspect-[1155/678]  -translate-y-[calc(100%)] -translate-x-[20%] w-full rotate-[180deg]  bg-gradient-to-r from-cyan-300 via-cyan-200 to-fuchsia-300 opacity-30 sm:left-[calc(50%-30rem)] sm:w-[100rem]"
            style={{
              clipPath: "ellipse(407% 10% at 90% 100%)",
              borderRadius: "106px",
            }}
          />
          <div
            className="relative left-[calc(50%-11rem)]  aspect-[1155/678]   w-full  -translate-y-[200%] rotate-[90deg] bg-gradient-to-tr  from-cyan-100 to-cyan-300 opacity-30 sm:right-[calc(50%-30rem)] sm:w-[100rem]"
            style={{
              clipPath: "ellipse(67% 20% at 15% 40%)",
            }}
          />
        </div>
        <main className="max-w-screen-2xl h-[100vh] p-6 overflow-hidden relative">
          <div className="flex h-[calc(100%+3rem)] w-full -my-6 -mb-8 gap-3 flex-col md:flex-row overflow-y-auto">
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
    </div>
  );
}
