import { HeaderLogo } from "@/sections/MobileHeader/components/HeaderLogo";
import { AuthButtons } from "@/components/navigation/AuthButtons";

export const MobileHeader = () => {
  return (
    <header className="items-center bg-neutral-900 border-l-gray-200 border-r-gray-200 border-t-gray-200 box-border caret-transparent flex h-14 justify-between outline-[3px] fixed no-underline w-full z-[100] px-4 border-b-white/0 border-b border-solid top-0 md:hidden">
      <HeaderLogo />
      <AuthButtons
        containerVariant="gap-x-2 flex min-h-[auto] min-w-[auto] gap-y-2 md:min-h-0 md:min-w-0"
        buttonVariant="block min-h-[auto] min-w-[auto] md:min-h-0 md:min-w-0"
      />
    </header>
  );
};
