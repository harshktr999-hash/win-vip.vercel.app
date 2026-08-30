import { SectionHeader } from "@/components/SectionHeader";
import { EventCard } from "@/sections/TopEventsSection/components/EventCard";

export const TopEventsSection = () => {
  return (
    <section className="box-border caret-transparent outline-[3px] no-underline mb-6">
      <SectionHeader
        title="TOP Events"
        actionText="All"
        iconType="image"
        iconSrc="https://c.animaapp.com/0KjVNUbKnt_GFjT-ALLmtQ/assets/icon-24.svg"
        iconAlt="Icon"
        iconClassName="text-neutral-400 h-7 w-7"
      />
      <div className="box-border caret-transparent gap-x-3 flex outline-[3px] gap-y-3 no-underline overflow-auto pb-2">
        <EventCard
          flag="🇮🇹"
          league="Italy. Coppa Italia"
          sport="Football"
          status="1st Half"
          showStatusIndicator={true}
          homeTeam="Venezia"
          homeScore="0"
          awayTeam="Modena"
          awayScore="0"
          marketTitle="Full time result"
          odds={[
            { label: "1", value: "1.62" },
            { label: "x", value: "3.75" },
            { label: "2", value: "5.5" },
          ]}
        />
        <EventCard
          flag="🇸🇦"
          league="Saudi Arabia. Professional League"
          sport="Football"
          status="Break Time"
          showStatusIndicator={true}
          homeTeam="Al-Nassr"
          homeScore="2"
          awayTeam="Al Fateh"
          awayScore="0"
          marketTitle="Full time result"
          odds={[
            { label: "x", value: "20.6" },
            { label: "2", value: "50" },
            { label: "1", value: "1.01" },
          ]}
        />
        <EventCard
          flag="🇸🇦"
          league="Saudi Arabia. Professional League"
          sport="Football"
          status="Break Time"
          showStatusIndicator={true}
          homeTeam="Al Ittihad Jeddah"
          homeScore="1"
          awayTeam="Al Kholood Club"
          awayScore="0"
          marketTitle="Full time result"
          odds={[
            { label: "1", value: "1.22" },
            { label: "x", value: "5.48" },
            { label: "2", value: "15" },
          ]}
        />
        <EventCard
          flag="🇵🇹"
          league="Portugal. Liga Portugal"
          sport="Football"
          status="2nd Half"
          showStatusIndicator={true}
          homeTeam="Academico Viseu"
          homeScore="0"
          awayTeam="Santa Clara"
          awayScore="2"
          marketTitle="Full time result"
          odds={[
            { label: "1", value: "8.5" },
            { label: "x", value: "4.2" },
            { label: "2", value: "1.28" },
          ]}
        />
        <EventCard
          flag="🏴"
          league="England. Premier League"
          sport="Football"
          status="Upcoming"
          showStatusIndicator={false}
          homeTeam="Arsenal"
          homeScore="-"
          awayTeam="Chelsea"
          awayScore="-"
          marketTitle="Full time result"
          odds={[
            { label: "1", value: "2.10" },
            { label: "x", value: "3.40" },
            { label: "2", value: "3.20" },
          ]}
        />
      </div>
    </section>
  );
};
