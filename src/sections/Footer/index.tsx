import { FooterTop } from "@/sections/Footer/components/FooterTop";
import { FooterAccordion } from "@/sections/Footer/components/FooterAccordion";
import { FooterPromoCard } from "@/sections/Footer/components/FooterPromoCard";
import { FooterContacts } from "@/sections/Footer/components/FooterContacts";
import { FooterSocialLinks } from "@/sections/Footer/components/FooterSocialLinks";
import { FooterCopyright } from "@/sections/Footer/components/FooterCopyright";

export const Footer = () => {
  return (
    <footer className="bg-gray-900 border-b-gray-200 border-l-gray-200 border-r-gray-200 box-border caret-transparent outline-[3px] no-underline ml-0 pt-8 pb-[88px] px-0.5 border-t-white/10 border-t border-solid md:ml-[260px] md:pb-8">
      <FooterTop />
      <FooterAccordion
        title="Information"
        links={["Rules", "Promotions", "Partner program"]}
      />
      <FooterAccordion
        title="Categories"
        links={[
          "Live",
          "Upcoming",
          "Live Casino",
          "Esports",
          "Bonuses",
          "Tournaments",
          "Poker",
          "Casino",
          "Forum",
        ]}
      />
      <FooterPromoCard
        cardVariant="bg-[linear-gradient(135deg,rgb(124,58,237),rgb(168,85,247))]"
        contentClassName=""
        title="1win for iOS"
        titleClassName="font-semibold"
        description={
          <>
            <span className="box-border caret-transparent text-amber-400 font-bold outline-[3px] no-underline">
              200 Points
            </span>{" "}
            for installing the app
          </>
        }
        descriptionClassName="text-white/80"
        buttonText="Install"
        buttonClassName="items-center bg-white text-black gap-x-2 inline-flex gap-y-2 mt-3 px-6 py-2.5"
        buttonIconSrc="https://c.animaapp.com/0KjVNUbKnt_GFjT-ALLmtQ/assets/icon-30.svg"
        buttonIconAlt="Icon"
        buttonIconClassName="box-border caret-transparent h-[18px] outline-[3px] no-underline w-[18px]"
        imageAlt="1win app"
        imageClassName="max-w-full top-0"
      />
      <FooterPromoCard
        cardVariant="bg-gray-800"
        contentClassName="max-w-[60%] relative z-[2]"
        title={
          <>
            Support
            <span className="bg-green-500 box-border caret-transparent block text-[11px] leading-[16.5px] min-h-[auto] min-w-[auto] outline-[3px] no-underline px-2 py-0.5 rounded-full">
              24/7
            </span>
          </>
        }
        titleClassName="items-center gap-x-2 flex font-bold gap-y-2"
        description="Contact us if you still have questions"
        descriptionClassName="text-neutral-400"
        buttonText="Contact support"
        buttonClassName="bg-transparent bg-[linear-gradient(135deg,rgb(33,150,243),rgb(66,165,245))] block text-sm leading-[21px] w-full mt-4 p-3"
        imageAlt="Support agent"
        imageSrc="https://c.animaapp.com/0KjVNUbKnt_GFjT-ALLmtQ/assets/bottomgirl.png"
        imageClassName="max-w-[38%] object-[100%_100%] pointer-events-none z-[1] bottom-0"
      />
      <FooterContacts />
      <FooterSocialLinks />
      <FooterCopyright />
    </footer>
  );
};
