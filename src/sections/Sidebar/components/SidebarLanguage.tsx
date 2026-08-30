export const SidebarLanguage = () => {
  return (
    <div className="box-border caret-transparent outline-[3px] no-underline p-0 md:px-4 md:py-2">
      <button className="items-center bg-white/10 caret-transparent gap-x-1.5 flex text-[13px] leading-[19.5px] outline-[3px] gap-y-1.5 text-center no-underline px-3 py-2 rounded-lg hover:bg-white/20">
        <img
          alt="EN"
          src="https://c.animaapp.com/0KjVNUbKnt_GFjT-ALLmtQ/assets/en-GB.svg"
          className="aspect-[auto_20_/_14] box-border caret-transparent h-3.5 max-w-full min-h-0 min-w-0 outline-[3px] no-underline w-5 rounded-sm md:min-h-[auto] md:min-w-[auto]"
        />
        EN
        <img
          src="https://c.animaapp.com/0KjVNUbKnt_GFjT-ALLmtQ/assets/icon-20.svg"
          alt="Icon"
          className="box-border caret-transparent h-3 outline-[3px] no-underline w-3"
        />
      </button>
    </div>
  );
};
