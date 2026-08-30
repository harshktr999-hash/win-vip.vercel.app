export type GameCardProps = {
  imageAlt: string;
  imageUrl: string;
};

export const GameCard = (props: GameCardProps) => {
  return (
    <div className="bg-slate-800 box-border caret-transparent shrink-0 h-[176.62px] max-w-[131.97px] min-h-[auto] min-w-[131.97px] outline-[3px] relative snap-start no-underline w-[131.97px] overflow-hidden rounded-[14px] md:h-[200.7px] md:max-w-[150px] md:min-w-[150px] md:w-[150px] hover:shadow-[rgba(0,0,0,0.4)_0px_8px_24px_0px]">
      <img
        alt={props.imageAlt}
        src={props.imageUrl}
        className="aspect-[auto_132_/_177] box-border caret-transparent h-full max-w-full object-cover outline-[3px] no-underline w-full rounded-[14px]"
      />
      <div className="items-center bg-[position:0px_0px] box-border caret-transparent flex justify-center outline-[3px] absolute no-underline z-[1] inset-0"></div>
    </div>
  );
};
