export const SidebarLogin = () => {
  return (
    <div className="[align-items:normal] box-border caret-transparent gap-x-[normal] block outline-[3px] gap-y-[normal] no-underline p-0 md:items-center md:gap-x-3 md:flex md:gap-y-3 md:p-4 hover:text-white hover:bg-white/10 hover:shadow-none hover:outline-offset-0 hover:outline-[3px] hover:no-underline hover:decoration-solid hover:decoration-auto hover:border-gray-200 hover:rounded-none hover:border-0 hover:border-solid">
      <div className="[align-items:normal] bg-transparent box-border caret-transparent block shrink h-auto justify-normal min-h-0 min-w-0 outline-[3px] no-underline w-auto rounded-none md:items-center md:bg-zinc-800 md:flex md:shrink-0 md:h-9 md:justify-center md:min-h-[auto] md:min-w-[auto] md:w-9 md:rounded-[50%] hover:text-white hover:bg-zinc-800 hover:shadow-none hover:outline-offset-0 hover:outline-[3px] hover:no-underline hover:decoration-solid hover:decoration-auto hover:border-gray-200 hover:rounded-[50%] hover:border-0 hover:border-solid">
        <img
          src="https://c.animaapp.com/0KjVNUbKnt_GFjT-ALLmtQ/assets/icon-5.svg"
          alt="Icon"
          className="box-border caret-transparent h-5 outline-[3px] no-underline w-5"
        />
      </div>
      <span className="box-border caret-transparent inline font-normal min-h-0 min-w-0 outline-[3px] no-underline text-clip text-wrap overflow-visible md:block md:font-medium md:min-h-[auto] md:min-w-[auto] md:text-ellipsis md:text-nowrap md:overflow-hidden hover:text-white hover:bg-transparent hover:shadow-none hover:outline-offset-0 hover:outline-[3px] hover:no-underline hover:decoration-solid hover:decoration-auto hover:border-gray-200 hover:rounded-none hover:border-0 hover:border-solid">
        Log in
      </span>
      <span className="box-border caret-transparent text-white inline min-h-0 min-w-0 outline-[3px] no-underline ml-0 md:text-neutral-400 md:block md:min-h-[auto] md:min-w-[auto] md:ml-auto hover:text-neutral-400 hover:bg-transparent hover:shadow-none hover:outline-offset-0 hover:outline-[3px] hover:no-underline hover:decoration-solid hover:decoration-auto hover:border-gray-200 hover:rounded-none hover:border-0 hover:border-solid">
        ›
      </span>
    </div>
  );
};
