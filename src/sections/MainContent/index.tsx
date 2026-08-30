import { HeroArea } from "@/sections/MainContent/components/HeroArea";
import { TopEventsSection } from "@/sections/TopEventsSection";
import { GameSection } from "@/sections/GameSection";
import { TournamentsSection } from "@/sections/TournamentsSection";
import { Footer } from "@/sections/Footer";

export const MainContent = () => {
  return (
    <main className="box-border caret-transparent outline-[3px] no-underline ml-0 pt-0 pb-[72px] md:ml-[260px] md:pt-[60px] md:pb-0">
      <div className="box-border caret-transparent max-w-none outline-[3px] no-underline mx-0 px-0.5 md:max-w-[1200px] md:mx-auto md:px-8">
        <div className="box-border caret-transparent h-16 outline-[3px] no-underline"></div>
        <HeroArea />
        <TopEventsSection />
        <GameSection
          title="1win games"
          actionText="All games"
          iconType="image"
          iconSrc="https://c.animaapp.com/0KjVNUbKnt_GFjT-ALLmtQ/assets/e6243bf9-e55d-4481-ac84-96ad7134eb7f.svg"
          iconAlt="1win"
          iconClassName="h-6 max-w-full min-h-[auto] min-w-[auto]"
          games={[
            {
              imageAlt: "Lucky Jet",
              imageUrl:
                "https://c.animaapp.com/0KjVNUbKnt_GFjT-ALLmtQ/assets/66ca2762-8c57-41f8-b68e-64320748f1bc_vertical.webp",
            },
            {
              imageAlt: "Rocket Queen",
              imageUrl:
                "https://c.animaapp.com/0KjVNUbKnt_GFjT-ALLmtQ/assets/86489246-a24c-4f71-88ec-9f2a4cfcd6d6_vertical.webp",
            },
            {
              imageAlt: "Coinflip",
              imageUrl:
                "https://c.animaapp.com/0KjVNUbKnt_GFjT-ALLmtQ/assets/3f60a4a8-dfa0-4d4a-a625-601822417ce4_vertical.webp",
            },
            {
              imageAlt: "Crash",
              imageUrl:
                "https://c.animaapp.com/0KjVNUbKnt_GFjT-ALLmtQ/assets/15104946-3407-452c-be6a-9c7f5110994d_vertical.webp",
            },
            {
              imageAlt: "Blackjack",
              imageUrl:
                "https://c.animaapp.com/0KjVNUbKnt_GFjT-ALLmtQ/assets/658aafec-1b44-4e29-846e-01cde1b6a112_vertical.webp",
            },
            {
              imageAlt: "Dice",
              imageUrl:
                "https://c.animaapp.com/0KjVNUbKnt_GFjT-ALLmtQ/assets/b05a73ba-2b6e-424f-8573-c93494fd0531_vertical.webp",
            },
            {
              imageAlt: "Mines Classic",
              imageUrl:
                "https://c.animaapp.com/0KjVNUbKnt_GFjT-ALLmtQ/assets/385fdac5-b7b2-4cdf-be54-c8fa5d878fff_vertical.webp",
            },
            {
              imageAlt: "Mines",
              imageUrl:
                "https://c.animaapp.com/0KjVNUbKnt_GFjT-ALLmtQ/assets/be881cab-9c66-4a02-b170-7d528d5163ba_vertical.webp",
            },
            {
              imageAlt: "Speed Cash",
              imageUrl:
                "https://c.animaapp.com/0KjVNUbKnt_GFjT-ALLmtQ/assets/38f289e8-3780-4fbd-b893-bbbc076c166a_vertical.webp",
            },
            {
              imageAlt: "Plinko",
              imageUrl:
                "https://c.animaapp.com/0KjVNUbKnt_GFjT-ALLmtQ/assets/c9d35da5-1fb3-4e93-bd94-8490ba01693c_vertical.webp",
            },
            {
              imageAlt: "Hi-Lo",
              imageUrl:
                "https://c.animaapp.com/0KjVNUbKnt_GFjT-ALLmtQ/assets/f68f0fe5-76de-4e4b-984b-49ab1ea15f93_vertical.webp",
            },
            {
              imageAlt: "Tower Legend",
              imageUrl:
                "https://c.animaapp.com/0KjVNUbKnt_GFjT-ALLmtQ/assets/26d8d9e1-ddea-4432-a938-fff056126509_vertical.webp",
            },
            {
              imageAlt: "Double Spin",
              imageUrl:
                "https://c.animaapp.com/0KjVNUbKnt_GFjT-ALLmtQ/assets/a6816c7c-cb6f-4a0a-9e64-53730427d071_vertical.webp",
            },
            {
              imageAlt: "Wheel of Fortune",
              imageUrl:
                "https://c.animaapp.com/0KjVNUbKnt_GFjT-ALLmtQ/assets/134e7f2c-9e17-4040-a14c-6e87f9186f2d_vertical.webp",
            },
            {
              imageAlt: "Keno Express",
              imageUrl:
                "https://c.animaapp.com/0KjVNUbKnt_GFjT-ALLmtQ/assets/f640dd82-890e-4f6c-954b-0c28eccfa0ec_vertical.webp",
            },
          ]}
        />
        <GameSection
          title="All games"
          actionText="All games"
          iconType="wrappedImage"
          iconSrc="https://c.animaapp.com/0KjVNUbKnt_GFjT-ALLmtQ/assets/all-games.svg"
          iconAlt="All games"
          games={[
            {
              imageAlt: "Aviator",
              imageUrl:
                "https://c.animaapp.com/0KjVNUbKnt_GFjT-ALLmtQ/assets/c9d35da5-1fb3-4e93-bd94-8490ba01693c_vertical.webp",
            },
            {
              imageAlt: "Fortune Gems 2",
              imageUrl:
                "https://c.animaapp.com/0KjVNUbKnt_GFjT-ALLmtQ/assets/f68f0fe5-76de-4e4b-984b-49ab1ea15f93_vertical.webp",
            },
            {
              imageAlt: "Wild Tiger",
              imageUrl:
                "https://c.animaapp.com/0KjVNUbKnt_GFjT-ALLmtQ/assets/26d8d9e1-ddea-4432-a938-fff056126509_vertical.webp",
            },
            {
              imageAlt: "Coin Volcano",
              imageUrl:
                "https://c.animaapp.com/0KjVNUbKnt_GFjT-ALLmtQ/assets/a6816c7c-cb6f-4a0a-9e64-53730427d071_vertical.webp",
            },
            {
              imageAlt: "777 Coins",
              imageUrl:
                "https://c.animaapp.com/0KjVNUbKnt_GFjT-ALLmtQ/assets/134e7f2c-9e17-4040-a14c-6e87f9186f2d_vertical.webp",
            },
            {
              imageAlt: "Treasures of Aztec",
              imageUrl:
                "https://c.animaapp.com/0KjVNUbKnt_GFjT-ALLmtQ/assets/f640dd82-890e-4f6c-954b-0c28eccfa0ec_vertical.webp",
            },
            {
              imageAlt: "Coin Strike",
              imageUrl:
                "https://c.animaapp.com/0KjVNUbKnt_GFjT-ALLmtQ/assets/5e28c0f8-afe1-469e-9246-9e90d1dd311a_vertical.webp",
            },
            {
              imageAlt: "Money Coming",
              imageUrl:
                "https://c.animaapp.com/0KjVNUbKnt_GFjT-ALLmtQ/assets/fd805754-e735-40ab-a209-840e74dbe1af_vertical.webp",
            },
            {
              imageAlt: "Ganesha Fortune",
              imageUrl:
                "https://c.animaapp.com/0KjVNUbKnt_GFjT-ALLmtQ/assets/0ea788db-9473-4f8b-bc7d-20f956377099_vertical.webp",
            },
            {
              imageAlt: "Golden Dragon",
              imageUrl:
                "https://c.animaapp.com/0KjVNUbKnt_GFjT-ALLmtQ/assets/86489246-a24c-4f71-88ec-9f2a4cfcd6d6_vertical.webp",
            },
            {
              imageAlt: "Rocket Stars",
              imageUrl:
                "https://c.animaapp.com/0KjVNUbKnt_GFjT-ALLmtQ/assets/3f60a4a8-dfa0-4d4a-a625-601822417ce4_vertical.webp",
            },
            {
              imageAlt: "Thunder Crash",
              imageUrl:
                "https://c.animaapp.com/0KjVNUbKnt_GFjT-ALLmtQ/assets/15104946-3407-452c-be6a-9c7f5110994d_vertical.webp",
            },
            {
              imageAlt: "Diamond Strike",
              imageUrl:
                "https://c.animaapp.com/0KjVNUbKnt_GFjT-ALLmtQ/assets/86ce8707-286c-403d-be68-9eadc7d1fecb_vertical.webp",
            },
            {
              imageAlt: "Wolf Gold",
              imageUrl:
                "https://c.animaapp.com/0KjVNUbKnt_GFjT-ALLmtQ/assets/4b1f3888-13a5-4aa8-b1d8-89cf92d6be0d_vertical.webp",
            },
            {
              imageAlt: "Book of Dead",
              imageUrl:
                "https://c.animaapp.com/0KjVNUbKnt_GFjT-ALLmtQ/assets/40ff2ce0-5e2b-424c-bda7-c2cb64e13963_vertical.webp",
            },
          ]}
        />
        <GameSection
          title="Live casino"
          actionText="All games"
          iconType="wrappedImage"
          iconSrc="https://c.animaapp.com/0KjVNUbKnt_GFjT-ALLmtQ/assets/LiveCas.svg"
          iconAlt="Live Casino"
          games={[
            {
              imageAlt: "Crazy Time",
              imageUrl:
                "https://c.animaapp.com/0KjVNUbKnt_GFjT-ALLmtQ/assets/9ea794e4-af4d-439a-9c8a-849d0ed77818_vertical.webp",
            },
            {
              imageAlt: "Hindi Lightning Roulette",
              imageUrl:
                "https://c.animaapp.com/0KjVNUbKnt_GFjT-ALLmtQ/assets/e434e502-3fb2-457c-ab45-0b4b4d078fd0_vertical.webp",
            },
            {
              imageAlt: "Super Andar Bahar",
              imageUrl:
                "https://c.animaapp.com/0KjVNUbKnt_GFjT-ALLmtQ/assets/5af47cb1-7ae0-4e86-bc32-e8397539b6b0_vertical.webp",
            },
            {
              imageAlt: "Roulette Live",
              imageUrl:
                "https://c.animaapp.com/0KjVNUbKnt_GFjT-ALLmtQ/assets/7edbfafe-b474-4669-9679-a5424d88549d_vertical.webp",
            },
            {
              imageAlt: "Blackjack",
              imageUrl:
                "https://c.animaapp.com/0KjVNUbKnt_GFjT-ALLmtQ/assets/4b0ead59-700c-4355-81f5-db2737544044_vertical.webp",
            },
            {
              imageAlt: "Dragon Tiger",
              imageUrl:
                "https://c.animaapp.com/0KjVNUbKnt_GFjT-ALLmtQ/assets/aaeb22d8-615c-45e6-8fc3-0be93804522c_vertical.webp",
            },
            {
              imageAlt: "Red Door Roulette",
              imageUrl:
                "https://c.animaapp.com/0KjVNUbKnt_GFjT-ALLmtQ/assets/6f1358ea-a6a6-494a-99ae-b59a3c7de968_vertical.webp",
            },
            {
              imageAlt: "Mega Ball",
              imageUrl:
                "https://c.animaapp.com/0KjVNUbKnt_GFjT-ALLmtQ/assets/9ea794e4-af4d-439a-9c8a-849d0ed77818_vertical.webp",
            },
            {
              imageAlt: "Deal or No Deal",
              imageUrl:
                "https://c.animaapp.com/0KjVNUbKnt_GFjT-ALLmtQ/assets/e434e502-3fb2-457c-ab45-0b4b4d078fd0_vertical.webp",
            },
            {
              imageAlt: "Speed Baccarat",
              imageUrl:
                "https://c.animaapp.com/0KjVNUbKnt_GFjT-ALLmtQ/assets/5af47cb1-7ae0-4e86-bc32-e8397539b6b0_vertical.webp",
            },
            {
              imageAlt: "Monopoly Live",
              imageUrl:
                "https://c.animaapp.com/0KjVNUbKnt_GFjT-ALLmtQ/assets/7edbfafe-b474-4669-9679-a5424d88549d_vertical.webp",
            },
            {
              imageAlt: "Lightning Dice",
              imageUrl:
                "https://c.animaapp.com/0KjVNUbKnt_GFjT-ALLmtQ/assets/4b0ead59-700c-4355-81f5-db2737544044_vertical.webp",
            },
            {
              imageAlt: "Teen Patti Live",
              imageUrl:
                "https://c.animaapp.com/0KjVNUbKnt_GFjT-ALLmtQ/assets/aaeb22d8-615c-45e6-8fc3-0be93804522c_vertical.webp",
            },
          ]}
        />
        <GameSection
          title="Popular"
          actionText="All games"
          iconType="wrappedImage"
          iconSrc="https://c.animaapp.com/0KjVNUbKnt_GFjT-ALLmtQ/assets/popular.svg"
          iconAlt="Popular"
          games={[
            {
              imageAlt: "Mummyland Treasures",
              imageUrl:
                "https://c.animaapp.com/0KjVNUbKnt_GFjT-ALLmtQ/assets/86ce8707-286c-403d-be68-9eadc7d1fecb_vertical.webp",
            },
            {
              imageAlt: "Sweet Bonanza",
              imageUrl:
                "https://c.animaapp.com/0KjVNUbKnt_GFjT-ALLmtQ/assets/4b1f3888-13a5-4aa8-b1d8-89cf92d6be0d_vertical.webp",
            },
            {
              imageAlt: "Gates of Olympus",
              imageUrl:
                "https://c.animaapp.com/0KjVNUbKnt_GFjT-ALLmtQ/assets/40ff2ce0-5e2b-424c-bda7-c2cb64e13963_vertical.webp",
            },
            {
              imageAlt: "Big Bass",
              imageUrl:
                "https://c.animaapp.com/0KjVNUbKnt_GFjT-ALLmtQ/assets/19b68d28-da74-4a41-b3b2-904c6fa28d99_vertical.webp",
            },
            {
              imageAlt: "Fruit Party",
              imageUrl:
                "https://c.animaapp.com/0KjVNUbKnt_GFjT-ALLmtQ/assets/7ad43288-c26f-49a9-8f19-0894cdd6163c_vertical.webp",
            },
            {
              imageAlt: "Royal Coins",
              imageUrl:
                "https://c.animaapp.com/0KjVNUbKnt_GFjT-ALLmtQ/assets/13ff1402-9836-43e4-b370-d1417f9a5362_vertical.webp",
            },
            {
              imageAlt: "Coin Volcano 2",
              imageUrl:
                "https://c.animaapp.com/0KjVNUbKnt_GFjT-ALLmtQ/assets/3e6689d8-1e2d-4b27-8117-f7fe471dea4f_vertical.webp",
            },
            {
              imageAlt: "Sugar Rush",
              imageUrl:
                "https://c.animaapp.com/0KjVNUbKnt_GFjT-ALLmtQ/assets/86ce8707-286c-403d-be68-9eadc7d1fecb_vertical.webp",
            },
            {
              imageAlt: "Starlight Princess",
              imageUrl:
                "https://c.animaapp.com/0KjVNUbKnt_GFjT-ALLmtQ/assets/4b1f3888-13a5-4aa8-b1d8-89cf92d6be0d_vertical.webp",
            },
            {
              imageAlt: "Wild West Gold Megaways",
              imageUrl:
                "https://c.animaapp.com/0KjVNUbKnt_GFjT-ALLmtQ/assets/40ff2ce0-5e2b-424c-bda7-c2cb64e13963_vertical.webp",
            },
            {
              imageAlt: "The Dog House",
              imageUrl:
                "https://c.animaapp.com/0KjVNUbKnt_GFjT-ALLmtQ/assets/19b68d28-da74-4a41-b3b2-904c6fa28d99_vertical.webp",
            },
            {
              imageAlt: "Fire Joker",
              imageUrl:
                "https://c.animaapp.com/0KjVNUbKnt_GFjT-ALLmtQ/assets/7ad43288-c26f-49a9-8f19-0894cdd6163c_vertical.webp",
            },
            {
              imageAlt: "Aztec Magic Bonanza",
              imageUrl:
                "https://c.animaapp.com/0KjVNUbKnt_GFjT-ALLmtQ/assets/13ff1402-9836-43e4-b370-d1417f9a5362_vertical.webp",
            },
          ]}
        />
        <TournamentsSection />
      </div>
      <Footer />
    </main>
  );
};
