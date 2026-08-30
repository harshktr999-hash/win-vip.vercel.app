import { SidebarLogin } from "@/sections/Sidebar/components/SidebarLogin";
import { SidebarPromo } from "@/sections/Sidebar/components/SidebarPromo";
import { SidebarNav } from "@/sections/Sidebar/components/SidebarNav";
import { SidebarAppCard } from "@/sections/Sidebar/components/SidebarAppCard";
import { SidebarSocialLinks } from "@/sections/Sidebar/components/SidebarSocialLinks";
import { SidebarLanguage } from "@/sections/Sidebar/components/SidebarLanguage";
import { SidebarSupport } from "@/sections/Sidebar/components/SidebarSupport";

export const Sidebar = () => {
  return (
    <aside className="bg-transparent border-b-gray-200 border-l-gray-200 border-r-gray-200 border-t-gray-200 box-border caret-transparent hidden h-auto outline-[3px] static no-underline w-auto z-auto overflow-visible pt-0 border-r-0 border-solid left-auto top-auto md:bg-neutral-900 md:block md:h-[1000px] md:fixed md:w-[260px] md:z-[90] md:overflow-auto md:pt-2 md:border-r-white/10 md:border-r md:left-0 md:top-0">
      <SidebarLogin />
      <SidebarPromo />
      <button
        aria-label="Toggle sidebar"
        className="[align-items:normal] bg-transparent caret-transparent text-white inline-block h-auto justify-normal outline-[3px] static text-center no-underline w-auto z-auto border-gray-200 p-0 rounded-none border-0 right-auto top-auto md:items-center md:bg-slate-800 md:text-neutral-400 md:flex md:h-8 md:justify-center md:absolute md:w-8 md:z-[91] md:border md:rounded-[50%] md:border-white/10 md:-right-4 md:top-[120px] hover:text-neutral-100 hover:bg-gray-700"
      >
        <img
          src="https://c.animaapp.com/0KjVNUbKnt_GFjT-ALLmtQ/assets/icon-6.svg"
          alt="Icon"
          className="box-border caret-transparent text-white h-4 outline-[3px] no-underline w-4 md:text-neutral-400"
        />
      </button>
      <SidebarNav
        className="box-border caret-transparent list-disc outline-[3px] no-underline py-0 md:list-none md:py-2"
        items={[
          {
            iconSrc:
              "https://c.animaapp.com/0KjVNUbKnt_GFjT-ALLmtQ/assets/icon-7.svg",
            label: "Casino",
            trailingText: "›",
            trailingClassName:
              "box-border caret-transparent text-white inline text-base leading-6 min-h-0 min-w-0 outline-[3px] no-underline ml-0 md:text-neutral-400 md:block md:text-xs md:leading-[18px] md:min-h-[auto] md:min-w-[auto] md:ml-auto hover:text-neutral-400 hover:bg-transparent hover:shadow-none hover:outline-offset-0 hover:outline-[3px] hover:no-underline hover:decoration-solid hover:decoration-auto hover:border-gray-200 hover:rounded-none hover:border-0 hover:border-solid",
          },
          {
            iconSrc:
              "https://c.animaapp.com/0KjVNUbKnt_GFjT-ALLmtQ/assets/icon-8.svg",
            label: "Sports",
            trailingText: "›",
            trailingClassName:
              "box-border caret-transparent text-white inline text-base leading-6 min-h-0 min-w-0 outline-[3px] no-underline ml-0 md:text-neutral-400 md:block md:text-xs md:leading-[18px] md:min-h-[auto] md:min-w-[auto] md:ml-auto hover:text-neutral-400 hover:bg-transparent hover:shadow-none hover:outline-offset-0 hover:outline-[3px] hover:no-underline hover:decoration-solid hover:decoration-auto hover:border-gray-200 hover:rounded-none hover:border-0 hover:border-solid",
          },
          {
            iconSrc:
              "https://c.animaapp.com/0KjVNUbKnt_GFjT-ALLmtQ/assets/icon-9.svg",
            label: "Markets",
          },
          {
            iconSrc:
              "https://c.animaapp.com/0KjVNUbKnt_GFjT-ALLmtQ/assets/icon-10.svg",
            label: "Betwave",
            trailingText: "›",
            trailingClassName:
              "box-border caret-transparent text-white inline text-base leading-6 min-h-0 min-w-0 outline-[3px] no-underline ml-0 md:text-neutral-400 md:block md:text-xs md:leading-[18px] md:min-h-[auto] md:min-w-[auto] md:ml-auto hover:text-neutral-400 hover:bg-transparent hover:shadow-none hover:outline-offset-0 hover:outline-[3px] hover:no-underline hover:decoration-solid hover:decoration-auto hover:border-gray-200 hover:rounded-none hover:border-0 hover:border-solid",
          },
          {
            iconSrc:
              "https://c.animaapp.com/0KjVNUbKnt_GFjT-ALLmtQ/assets/icon-11.svg",
            label: "Bonuses",
            trailingText: "1",
            trailingClassName:
              "bg-transparent box-border caret-transparent inline text-base font-normal leading-6 min-h-0 min-w-0 outline-[3px] no-underline ml-0 p-0 rounded-none md:bg-pink-600 md:block md:text-[11px] md:font-semibold md:leading-[16.5px] md:min-h-[auto] md:min-w-[auto] md:ml-auto md:px-1.5 md:py-0.5 md:rounded-full hover:text-white hover:bg-pink-600 hover:shadow-none hover:outline-offset-0 hover:outline-[3px] hover:no-underline hover:decoration-solid hover:decoration-auto hover:border-gray-200 hover:rounded-full hover:border-0 hover:border-solid",
          },
          {
            iconSrc:
              "https://c.animaapp.com/0KjVNUbKnt_GFjT-ALLmtQ/assets/icon-12.svg",
            label: "VIP Club",
          },
        ]}
      />
      <div className="bg-transparent box-border caret-transparent h-auto outline-[3px] no-underline m-0 md:bg-white/10 md:h-px md:mx-4 md:my-2"></div>
      <SidebarNav
        className="box-border caret-transparent outline-[3px] no-underline"
        items={[
          {
            iconSrc:
              "https://c.animaapp.com/0KjVNUbKnt_GFjT-ALLmtQ/assets/icon-13.svg",
            label: "Promotions",
          },
          {
            iconSrc:
              "https://c.animaapp.com/0KjVNUbKnt_GFjT-ALLmtQ/assets/icon-10.svg",
            label: "Tournaments",
            trailingText: "10",
            trailingClassName:
              "bg-transparent box-border caret-transparent inline text-base font-normal leading-6 min-h-0 min-w-0 outline-[3px] no-underline ml-0 p-0 rounded-none md:bg-pink-600 md:block md:text-[11px] md:font-semibold md:leading-[16.5px] md:min-h-[auto] md:min-w-[auto] md:ml-auto md:px-1.5 md:py-0.5 md:rounded-full hover:text-white hover:bg-pink-600 hover:shadow-none hover:outline-offset-0 hover:outline-[3px] hover:no-underline hover:decoration-solid hover:decoration-auto hover:border-gray-200 hover:rounded-full hover:border-0 hover:border-solid",
          },
          {
            iconSrc:
              "https://c.animaapp.com/0KjVNUbKnt_GFjT-ALLmtQ/assets/icon-10.svg",
            label: "Blog",
          },
          {
            iconSrc:
              "https://c.animaapp.com/0KjVNUbKnt_GFjT-ALLmtQ/assets/icon-7.svg",
            label: "Forum",
          },
          {
            iconSrc:
              "https://c.animaapp.com/0KjVNUbKnt_GFjT-ALLmtQ/assets/icon-14.svg",
            label: "Trading",
          },
        ]}
      />
      <div className="bg-transparent box-border caret-transparent h-auto outline-[3px] no-underline m-0 md:bg-white/10 md:h-px md:mx-4 md:my-2"></div>
      <SidebarAppCard />
      <SidebarSocialLinks />
      <div className="bg-transparent box-border caret-transparent h-auto outline-[3px] no-underline m-0 md:bg-white/10 md:h-px md:mx-4 md:my-2"></div>
      <SidebarLanguage />
      <SidebarSupport />
    </aside>
  );
};
