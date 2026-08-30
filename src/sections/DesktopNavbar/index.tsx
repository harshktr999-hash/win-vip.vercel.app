import { NavbarLogo } from "@/sections/DesktopNavbar/components/NavbarLogo";
import { PrimaryNav } from "@/sections/DesktopNavbar/components/PrimaryNav";
import { AuthButtons } from "@/components/navigation/AuthButtons";

export const DesktopNavbar = () => {
  return (
    <nav className="[align-items:normal] bg-transparent border-b-gray-200 border-l-gray-200 border-r-gray-200 border-t-gray-200 box-border caret-transparent hidden h-auto outline-[3px] static no-underline w-auto z-auto px-0 border-b-0 border-solid top-auto md:items-center md:bg-neutral-900 md:flex md:h-[60px] md:fixed md:w-full md:z-[100] md:px-6 md:border-b-white/0 md:border-b md:top-0">
      <NavbarLogo />
      <PrimaryNav />
      <AuthButtons
        containerVariant="gap-x-[normal] block min-h-0 min-w-0 gap-y-[normal] ml-0 md:gap-x-3 md:flex md:min-h-[auto] md:min-w-[auto] md:gap-y-3 md:ml-auto"
        buttonVariant="inline-block min-h-0 min-w-0 md:block md:min-h-[auto] md:min-w-[auto]"
      />
    </nav>
  );
};
