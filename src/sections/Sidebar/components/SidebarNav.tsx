export type SidebarNavItem = {
  iconSrc: string;
  label: string;
  trailingText?: string;
  trailingClassName?: string;
};

export type SidebarNavProps = {
  className: string;
  items: SidebarNavItem[];
};

export const SidebarNav = (props: SidebarNavProps) => {
  return (
    <nav className={props.className}>
      <ul className="box-border caret-transparent list-none outline-[3px] no-underline pl-0">
        {props.items.map((item) => (
          <li
            className="[align-items:normal] box-border caret-transparent text-white gap-x-[normal] list-item text-base leading-6 outline-[3px] gap-y-[normal] no-underline p-0 md:items-center md:text-neutral-400 md:gap-x-3 md:flex md:text-sm md:leading-[21px] md:gap-y-3 md:px-4 md:py-2.5 hover:text-neutral-100 hover:bg-white/10 hover:shadow-none hover:outline-offset-0 hover:outline-[3px] hover:no-underline hover:decoration-solid hover:decoration-auto hover:border-gray-200 hover:rounded-none hover:border-0 hover:border-solid"
            key={`${item.iconSrc}-${item.label}`}
          >
            <img
              src={item.iconSrc}
              alt="Icon"
              className="box-border caret-transparent text-white shrink text-base h-6 leading-6 opacity-100 outline-[3px] no-underline w-6 md:text-neutral-400 md:shrink-0 md:text-sm md:leading-[21px] md:opacity-70"
            />
            <span className="box-border caret-transparent text-white inline text-base leading-6 min-h-0 min-w-0 outline-[3px] no-underline md:text-neutral-400 md:block md:text-sm md:leading-[21px] md:min-h-[auto] md:min-w-[auto] hover:text-neutral-400 hover:bg-transparent hover:shadow-none hover:outline-offset-0 hover:outline-[3px] hover:no-underline hover:decoration-solid hover:decoration-auto hover:border-gray-200 hover:rounded-none hover:border-0 hover:border-solid">
              {item.label}
            </span>
            {item.trailingText !== undefined &&
            item.trailingClassName !== undefined ? (
              <span className={item.trailingClassName}>
                {item.trailingText}
              </span>
            ) : null}
          </li>
        ))}
      </ul>
    </nav>
  );
};
