import { MobileHeader } from "@/sections/MobileHeader";
import { DesktopNavbar } from "@/sections/DesktopNavbar";
import { Sidebar } from "@/sections/Sidebar";
import { MainContent } from "@/sections/MainContent";
import { BottomNavigation } from "@/sections/BottomNavigation";

export const App = () => {
  return (
    <body className="accent-auto bg-neutral-900 box-border caret-transparent text-white block text-base not-italic normal-nums font-normal tracking-[normal] leading-6 list-outside list-disc outline-[3px] overflow-x-hidden overflow-y-auto pointer-events-auto text-start no-underline indent-[0px] normal-case visible w-full border-separate font-inter">
      <div className="box-border caret-transparent outline-[3px] no-underline">
        <div className="box-border caret-transparent min-h-[1000px] outline-[3px] no-underline">
          <MobileHeader />
          <DesktopNavbar />
          <Sidebar />
          <MainContent />
          <BottomNavigation />
        </div>
      </div>
    </body>
  );
};
