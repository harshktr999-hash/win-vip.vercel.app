export const FooterTop = () => {
  return (
    <div className="items-center box-border caret-transparent flex justify-between outline-[3px] no-underline mb-6">
      <div className="box-border caret-transparent min-h-[auto] min-w-[auto] outline-[3px] no-underline">
        <img
          alt="1win"
          src="https://c.animaapp.com/0KjVNUbKnt_GFjT-ALLmtQ/assets/a_Logo-top-bg-removebg-preview.png"
          className="aspect-[auto_120_/_36] box-border caret-transparent h-8 max-w-full outline-[3px] no-underline w-[120px]"
        />
      </div>
      <div className="items-center box-border caret-transparent gap-x-3 flex min-h-[auto] min-w-[auto] outline-[3px] gap-y-3 no-underline">
        <button className="items-center bg-white/10 caret-transparent gap-x-1.5 flex text-[13px] leading-[19.5px] min-h-[auto] min-w-[auto] outline-[3px] gap-y-1.5 text-center no-underline px-3 py-2 rounded-lg hover:bg-white/20">
          <img
            alt="EN"
            src="https://c.animaapp.com/0KjVNUbKnt_GFjT-ALLmtQ/assets/en-GB.svg"
            className="aspect-[auto_20_/_14] box-border caret-transparent h-3.5 max-w-full min-h-[auto] min-w-[auto] outline-[3px] no-underline w-5 rounded-sm"
          />
          EN
          <img
            src="https://c.animaapp.com/0KjVNUbKnt_GFjT-ALLmtQ/assets/icon-20.svg"
            alt="Icon"
            className="box-border caret-transparent h-3 outline-[3px] no-underline w-3"
          />
        </button>
        <button
          aria-label="Scroll to top"
          className="items-center bg-white/10 caret-transparent flex h-9 justify-center min-h-[auto] min-w-[auto] outline-[3px] text-center no-underline w-9 p-0 rounded-lg hover:bg-white/20"
        >
          <img
            src="https://c.animaapp.com/0KjVNUbKnt_GFjT-ALLmtQ/assets/icon-28.svg"
            alt="Icon"
            className="box-border caret-transparent h-[18px] outline-[3px] no-underline w-[18px]"
          />
        </button>
      </div>
    </div>
  );
};
