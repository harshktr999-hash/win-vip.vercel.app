export const SidebarAppCard = () => {
  return (
    <div className="[align-items:normal] bg-transparent box-border caret-transparent gap-x-[normal] block outline-[3px] gap-y-[normal] no-underline border-gray-200 m-0 p-0 rounded-none border-0 border-solid md:items-center md:bg-gray-800 md:gap-x-2.5 md:flex md:gap-y-2.5 md:border md:m-3 md:p-3 md:rounded-xl md:border-white/10">
      <div className="box-border caret-transparent min-h-0 min-w-0 outline-[3px] no-underline md:min-h-[auto] md:min-w-[auto]">
        <img
          src="https://c.animaapp.com/0KjVNUbKnt_GFjT-ALLmtQ/assets/icon-15.svg"
          alt="Icon"
          className="box-border caret-transparent h-6 outline-[3px] no-underline w-6"
        />
      </div>
      <div className="box-border caret-transparent min-h-0 min-w-0 outline-[3px] no-underline md:min-h-[auto] md:min-w-[auto]">
        <div className="box-border caret-transparent text-[13px] font-semibold leading-[19.5px] outline-[3px] no-underline">
          1win for macOS
        </div>
        <div className="box-border caret-transparent text-neutral-400 text-[11px] leading-[16.5px] outline-[3px] no-underline">
          Instant access to the platform with our app
        </div>
      </div>
      <span className="box-border caret-transparent text-white inline min-h-0 min-w-0 outline-[3px] no-underline ml-0 md:text-neutral-400 md:block md:min-h-[auto] md:min-w-[auto] md:ml-auto">
        ›
      </span>
    </div>
  );
};
