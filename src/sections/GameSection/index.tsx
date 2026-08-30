import { SectionHeader } from "@/components/SectionHeader";
import { GameCard } from "@/sections/GameSection/components/GameCard";

export type GameSectionProps = {
  title: string;
  actionText: string;
  iconType: string;
  iconSrc: string;
  iconAlt: string;
  iconClassName?: string;
  games: {
    imageAlt: string;
    imageUrl: string;
  }[];
};

export const GameSection = (props: GameSectionProps) => {
  return (
    <section className="box-border caret-transparent outline-[3px] no-underline mb-6">
      <SectionHeader
        title={props.title}
        actionText={props.actionText}
        iconType={props.iconType}
        iconSrc={props.iconSrc}
        iconAlt={props.iconAlt}
        iconClassName={props.iconClassName}
      />
      <div className="box-border caret-transparent gap-x-2.5 flex outline-[3px] gap-y-2.5 no-underline overflow-auto pb-2">
        {props.games.map((game) => (
          <GameCard
            key={`${game.imageAlt}-${game.imageUrl}`}
            imageAlt={game.imageAlt}
            imageUrl={game.imageUrl}
          />
        ))}
      </div>
    </section>
  );
};
