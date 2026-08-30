export type EventCardProps = {
  flag: string;
  league: string;
  sport: string;
  status: string;
  showStatusIndicator: boolean;
  homeTeam: string;
  homeScore: string;
  awayTeam: string;
  awayScore: string;
  marketTitle: string;
  odds: {
    label: string;
    value: string;
  }[];
};

export const EventCard = (props: EventCardProps) => {
  return (
    <div className="bg-white shadow-[rgba(0,0,0,0.3)_0px_4px_16px_0px] box-border caret-transparent shrink-0 min-h-[auto] min-w-[300px] outline-[3px] snap-start no-underline p-4 rounded-2xl md:min-w-80">
      <div className="items-center box-border caret-transparent gap-x-2 flex outline-[3px] gap-y-2 no-underline mb-3">
        <span className="box-border caret-transparent block h-6 min-h-[auto] min-w-[auto] outline-[3px] no-underline w-6 rounded-bl rounded-br rounded-tl rounded-tr">
          {props.flag}
        </span>
        <div className="box-border caret-transparent min-h-[auto] min-w-[auto] outline-[3px] no-underline">
          <div className="box-border caret-transparent text-gray-900 text-sm font-semibold leading-[21px] outline-[3px] no-underline">
            {props.league}
          </div>
          <div className="box-border caret-transparent text-stone-500 text-xs leading-[18px] outline-[3px] no-underline">
            {props.sport}
          </div>
        </div>
      </div>
      <div className="items-center bg-neutral-100 box-border caret-transparent text-zinc-800 gap-x-1 inline-flex text-xs leading-[18px] outline-[3px] gap-y-1 no-underline mb-3 px-2.5 py-1 rounded-full">
        {props.showStatusIndicator ? (
          <span className="bg-pink-600 box-border caret-transparent block h-2 min-h-[auto] min-w-[auto] outline-[3px] no-underline w-2 rounded-[50%]"></span>
        ) : null}
        {props.status}
      </div>
      <div className="box-border caret-transparent outline-[3px] no-underline mb-3">
        <div className="box-border caret-transparent text-gray-900 flex text-[15px] justify-between leading-[22.5px] outline-[3px] no-underline py-1">
          <span className="box-border caret-transparent block min-h-[auto] min-w-[auto] outline-[3px] no-underline">
            {props.homeTeam}
          </span>
          <span className="box-border caret-transparent block font-bold min-h-[auto] min-w-[auto] outline-[3px] no-underline">
            {props.homeScore}
          </span>
        </div>
        <div className="box-border caret-transparent text-gray-900 flex text-[15px] justify-between leading-[22.5px] outline-[3px] no-underline py-1">
          <span className="box-border caret-transparent block min-h-[auto] min-w-[auto] outline-[3px] no-underline">
            {props.awayTeam}
          </span>
          <span className="box-border caret-transparent block font-bold min-h-[auto] min-w-[auto] outline-[3px] no-underline">
            {props.awayScore}
          </span>
        </div>
      </div>
      <div className="box-border caret-transparent text-stone-500 text-xs leading-[18px] outline-[3px] no-underline mb-2">
        {props.marketTitle}
      </div>
      <div className="box-border caret-transparent gap-x-2 grid grid-cols-[repeat(3,1fr)] outline-[3px] gap-y-2 no-underline">
        {props.odds.map((odd) => (
          <div
            className="bg-neutral-100 box-border caret-transparent min-h-[auto] min-w-[auto] outline-[3px] text-center no-underline border p-2 rounded-lg border-solid border-transparent hover:bg-blue-50 hover:border-sky-500"
            key={`${odd.label}-${odd.value}`}
          >
            <span className="box-border caret-transparent text-stone-500 block text-[11px] leading-[16.5px] outline-[3px] no-underline">
              {odd.label}
            </span>
            <span className="box-border caret-transparent text-gray-900 text-[15px] font-bold leading-[22.5px] outline-[3px] no-underline">
              {odd.value}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};
