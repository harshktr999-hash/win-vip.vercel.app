import { SectionHeader } from "@/components/SectionHeader";
import { TournamentCard } from "@/sections/TournamentsSection/components/TournamentCard";

export const TournamentsSection = () => {
  return (
    <section className="box-border caret-transparent outline-[3px] no-underline mb-6">
      <SectionHeader
        title="Tournaments"
        actionText="All"
        iconType="emoji"
        emoji="🏆"
      />
      <div className="box-border caret-transparent gap-x-3 flex grid-cols-none outline-[3px] gap-y-3 no-underline overflow-auto -mx-4 pb-2 px-4 md:gap-x-4 md:grid md:grid-cols-[repeat(3,1fr)] md:gap-y-4 md:overflow-visible md:mx-0 md:pb-0 md:px-0">
        <TournamentCard
          imageAlt="Crypto Week: Mix"
          imageUrl="https://c.animaapp.com/0KjVNUbKnt_GFjT-ALLmtQ/assets/c9d35da5-1fb3-4e93-bd94-8490ba01693c_vertical.webp"
          status="Active"
          title="Crypto Week: Mix"
          prize="10K USDT"
          timeLabel="Time remaining"
          timeParts={["05", "15", "12", "31"]}
          buttonText="Details"
        />
        <TournamentCard
          imageAlt="Taste & Win"
          imageUrl="https://c.animaapp.com/0KjVNUbKnt_GFjT-ALLmtQ/assets/f68f0fe5-76de-4e4b-984b-49ab1ea15f93_vertical.webp"
          status="Active"
          title="Taste & Win"
          prize="500K USDT"
          timeLabel="Time remaining"
          timeParts={["15", "13", "59", "42"]}
          buttonText="Details"
        />
        <TournamentCard
          imageAlt="Crypto Month: Mix"
          imageUrl="https://c.animaapp.com/0KjVNUbKnt_GFjT-ALLmtQ/assets/86489246-a24c-4f71-88ec-9f2a4cfcd6d6_vertical.webp"
          status="Active"
          title="Crypto Month: Mix"
          prize="50K USDT"
          timeLabel="Time remaining"
          timeParts={["23", "14", "59", "42"]}
          buttonText="Details"
        />
      </div>
    </section>
  );
};
