import { LeftSideMain } from "@/components/left-side-main";
import { RightSideMain } from "@/components/right-side-main";

export default function Home() {
  return (
    <main className="w-full h-[calc(100vh-2rem)] p-6 border border-gray-300 rounded-2xl overflow-hidden">
      <div className="flex h-[calc(100%+3rem)] w-full -my-6 -mb-8">
        <div className="w-[40%] border-r border-gray-300 py-6 pr-6">
          <LeftSideMain />
        </div>
        <div className="w-[60%] py-6 pl-6 overflow-y-auto">
          <RightSideMain />
        </div>
      </div>
    </main>
  );
}
