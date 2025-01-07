import { LeftSideMain } from "@/components/left-side-main";
import { RightSideMain } from "@/components/right-side-main";

export default function Home() {
  return (
    // <main className="w-full h-[calc(100vh-2rem)] p-6 border border-gray-300 rounded-2xl overflow-hidden">
    //   <div className="flex h-[calc(100%+3rem)] w-full -my-6 -mb-8">
    //     <div className="w-[40%] border-r border-gray-300 py-6 pr-6">
    //       <LeftSideMain />
    //     </div>
    //     <div className="w-[60%] py-6 pl-6 overflow-y-auto">
    //       <RightSideMain />
    //     </div>
    //   </div>
    // </main>
    <main className="w-full h-[100vh] p-6 overflow-hidden bg-primary-background">
      <div className="flex h-[calc(100%+3rem)] w-full -my-6 -mb-8 gap-3">
        <div className="w-[40%] py-6">
          <div className="h-full bg-background  rounded-xl shadow-lg p-4 transition-all duration-300 hover:shadow-xl">
            <LeftSideMain />
          </div>
        </div>
        <div className="w-[60%] py-6 ">
          <div className="h-full bg-background  rounded-xl shadow-lg p-4 transition-all duration-300 hover:shadow-xl overflow-y-auto">
            <RightSideMain />
          </div>
        </div>
      </div>
    </main>
  );
}
