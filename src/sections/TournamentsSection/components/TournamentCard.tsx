export type TournamentCardProps = {
  imageAlt: string;
  imageUrl: string;
  status: string;
  title: string;
  prize: string;
  timeLabel: string;
  timeParts: [string, string, string, string];
  buttonText: string;
};

export const TournamentCard = (props: TournamentCardProps) => {
  return (
    <div className="bg-gray-900 box-border caret-transparent shrink-0 h-[246px] max-w-[358px] min-h-[auto] min-w-[auto] outline-[3px] relative snap-start no-underline w-[343px] overflow-hidden rounded-2xl md:h-60 md:max-w-none md:w-full after:accent-auto after:bg-[linear-gradient(rgba(13,13,36,0.2),rgba(13,13,36,0.5)_40%,rgba(13,13,36,0.95)_80%)] after:box-border after:caret-transparent after:text-white after:block after:text-base after:not-italic after:normal-nums after:font-normal after:tracking-[normal] after:leading-6 after:list-outside after:list-disc after:outline-[3px] after:pointer-events-none after:absolute after:text-start after:no-underline after:indent-[0px] after:normal-case after:visible after:z-[2] after:border-separate after:inset-0 after:font-inter">
      <img
        alt={props.imageAlt}
        src={props.imageUrl}
        className="box-border caret-transparent h-full max-w-full object-cover outline-[3px] absolute no-underline w-full z-[1] left-0 top-0"
      />
      <span className="bg-sky-500 box-border caret-transparent block text-[11px] font-bold leading-[16.5px] outline-[3px] absolute no-underline z-[3] px-3 py-1 rounded-full left-4 top-4">
        {props.status}
      </span>
      <div className="box-border caret-transparent flex flex-col h-full justify-end outline-[3px] relative no-underline z-[3] p-4">
        <div className="box-border caret-transparent text-neutral-400 text-sm font-medium leading-[21px] min-h-[auto] min-w-[auto] outline-[3px] no-underline mb-1">
          {props.title}
        </div>
        <div className="box-border caret-transparent text-2xl font-extrabold leading-9 min-h-[auto] min-w-[auto] outline-[3px] no-underline mb-4">
          {props.prize}
        </div>
        <div className="items-end box-border caret-transparent flex justify-between min-h-[auto] min-w-[auto] outline-[3px] no-underline w-full">
          <div className="box-border caret-transparent gap-x-1 flex flex-col min-h-[auto] min-w-[auto] outline-[3px] gap-y-1 no-underline">
            <span className="box-border caret-transparent text-neutral-400 block text-[11px] tracking-[0.5px] leading-[16.5px] min-h-[auto] min-w-[auto] outline-[3px] no-underline uppercase">
              {props.timeLabel}
            </span>
            <div className="items-center box-border caret-transparent gap-x-1 flex min-h-[auto] min-w-[auto] outline-[3px] gap-y-1 no-underline">
              <span className="bg-white/10 box-border caret-transparent block text-sm font-bold leading-[21px] min-h-[auto] min-w-[26px] outline-[3px] text-center no-underline px-1.5 py-1 rounded-bl rounded-br rounded-tl rounded-tr">
                {props.timeParts[0]}
              </span>
              <span className="box-border caret-transparent text-white/50 block text-sm font-semibold leading-[21px] min-h-[auto] min-w-[auto] outline-[3px] no-underline">
                :
              </span>
              <span className="bg-white/10 box-border caret-transparent block text-sm font-bold leading-[21px] min-h-[auto] min-w-[26px] outline-[3px] text-center no-underline px-1.5 py-1 rounded-bl rounded-br rounded-tl rounded-tr">
                {props.timeParts[1]}
              </span>
              <span className="box-border caret-transparent text-white/50 block text-sm font-semibold leading-[21px] min-h-[auto] min-w-[auto] outline-[3px] no-underline">
                :
              </span>
              <span className="bg-white/10 box-border caret-transparent block text-sm font-bold leading-[21px] min-h-[auto] min-w-[26px] outline-[3px] text-center no-underline px-1.5 py-1 rounded-bl rounded-br rounded-tl rounded-tr">
                {props.timeParts[2]}
              </span>
              <span className="box-border caret-transparent text-white/50 block text-sm font-semibold leading-[21px] min-h-[auto] min-w-[auto] outline-[3px] no-underline">
                :
              </span>
              <span className="bg-white/10 box-border caret-transparent block text-sm font-bold leading-[21px] min-h-[auto] min-w-[26px] outline-[3px] text-center no-underline px-1.5 py-1 rounded-bl rounded-br rounded-tl rounded-tr">
                {props.timeParts[3]}
              </span>
            </div>
          </div>
          <button className="bg-white/10 caret-transparent block text-[13px] font-semibold leading-[19.5px] min-h-[auto] min-w-[auto] outline-[3px] text-center no-underline border px-4 py-2 rounded-lg border-white/20 hover:bg-white/20 hover:border-white/40">
            {props.buttonText}
          </button>
        </div>
      </div>
    </div>
  );
};
