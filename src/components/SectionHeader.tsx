export type SectionHeaderProps = {
  title: string;
  actionText: string;
  iconType: "image" | "wrappedImage" | "emoji";
  iconSrc?: string;
  iconAlt?: string;
  iconClassName?: string;
  emoji?: string;
};

export const SectionHeader = (props: SectionHeaderProps) => {
  return (
    <div className="items-center box-border caret-transparent flex justify-between outline-[3px] no-underline mb-3 px-1">
      <div className="items-center box-border caret-transparent gap-x-2 flex min-h-[auto] min-w-[auto] outline-[3px] gap-y-2 no-underline">
        {props.iconType === "image" && (
          <img
            src={props.iconSrc}
            alt={props.iconAlt}
            className={`box-border caret-transparent outline-[3px] no-underline ${props.iconClassName}`}
          />
        )}
        {props.iconType === "wrappedImage" && (
          <span className="box-border caret-transparent block h-7 min-h-[auto] min-w-[auto] outline-[3px] no-underline w-7">
            <img
              alt={props.iconAlt}
              src={props.iconSrc}
              className="box-border caret-transparent h-6 max-w-full outline-[3px] no-underline"
            />
          </span>
        )}
        {props.iconType === "emoji" && (
          <span className="box-border caret-transparent block h-7 min-h-[auto] min-w-[auto] outline-[3px] no-underline w-7">
            {props.emoji}
          </span>
        )}
        <h2 className="box-border caret-transparent text-lg font-bold leading-[27px] min-h-[auto] min-w-[auto] outline-[3px] no-underline md:text-[22px] md:leading-[33px]">
          {props.title}
        </h2>
      </div>
      <div className="items-center box-border caret-transparent gap-x-2 flex min-h-[auto] min-w-[auto] outline-[3px] gap-y-2 no-underline">
        <button className="items-center bg-white/10 caret-transparent text-neutral-400 gap-x-1 flex text-[13px] font-medium leading-[19.5px] min-h-[auto] min-w-[auto] outline-[3px] gap-y-1 text-center no-underline px-4 py-2 rounded-full hover:text-white hover:bg-white/20 hover:border-white">
          {props.actionText}{" "}
          <img
            src="https://c.animaapp.com/0KjVNUbKnt_GFjT-ALLmtQ/assets/icon-25.svg"
            alt="Icon"
            className="box-border caret-transparent h-3.5 outline-[3px] no-underline w-3.5"
          />
        </button>
        <div className="box-border caret-transparent gap-x-[normal] hidden min-h-0 min-w-0 outline-[3px] gap-y-[normal] no-underline md:gap-x-1 md:flex md:min-h-[auto] md:min-w-[auto] md:gap-y-1">
          <button
            aria-label="Scroll left"
            className="[align-items:normal] bg-transparent caret-transparent inline-block h-auto justify-normal min-h-0 min-w-0 outline-[3px] text-center no-underline w-auto p-0 rounded-none md:items-center md:bg-white/10 md:flex md:h-8 md:justify-center md:min-h-[auto] md:min-w-[auto] md:w-8 md:rounded-[50%] hover:bg-white/20"
          >
            <img
              src="https://c.animaapp.com/0KjVNUbKnt_GFjT-ALLmtQ/assets/icon-26.svg"
              alt="Icon"
              className="box-border caret-transparent h-4 outline-[3px] no-underline w-4"
            />
          </button>
          <button
            aria-label="Scroll right"
            className="[align-items:normal] bg-transparent caret-transparent inline-block h-auto justify-normal min-h-0 min-w-0 outline-[3px] text-center no-underline w-auto p-0 rounded-none md:items-center md:bg-white/10 md:flex md:h-8 md:justify-center md:min-h-[auto] md:min-w-[auto] md:w-8 md:rounded-[50%] hover:bg-white/20"
          >
            <img
              src="https://c.animaapp.com/0KjVNUbKnt_GFjT-ALLmtQ/assets/icon-27.svg"
              alt="Icon"
              className="box-border caret-transparent h-4 outline-[3px] no-underline w-4"
            />
          </button>
        </div>
      </div>
    </div>
  );
};
