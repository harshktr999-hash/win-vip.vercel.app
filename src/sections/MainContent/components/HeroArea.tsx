import { HeroCarousel } from "@/sections/MainContent/components/HeroArea/components/HeroCarousel";
import { PromoCards } from "@/sections/MainContent/components/HeroArea/components/PromoCards";

export const HeroArea = () => {
  return (
    <div className="box-border caret-transparent gap-x-[normal] block grid-cols-none outline-[3px] gap-y-[normal] no-underline md:gap-x-4 md:grid md:grid-cols-[1fr_320px] md:gap-y-4">
      <HeroCarousel />
      <PromoCards />
    </div>
  );
};
