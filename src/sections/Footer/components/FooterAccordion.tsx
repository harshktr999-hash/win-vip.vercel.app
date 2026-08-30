export type FooterAccordionProps = {
  title: string;
  links: string[];
};

export const FooterAccordion = (props: FooterAccordionProps) => {
  return (
    <div className="border-l-gray-200 border-r-gray-200 border-t-gray-200 box-border caret-transparent outline-[3px] no-underline mb-4 pb-4 border-b-white/10 border-b border-solid">
      <button className="items-center bg-transparent bg-[position:0px_0px] caret-transparent flex font-semibold justify-between outline-[3px] text-center no-underline w-full px-0 py-2">
        {props.title}
        <img
          src="https://c.animaapp.com/0KjVNUbKnt_GFjT-ALLmtQ/assets/icon-29.svg"
          alt="Icon"
          className="box-border caret-transparent block h-5 outline-[3px] no-underline w-5 md:hidden"
        />
      </button>
      <div className="box-border caret-transparent max-h-0 outline-[3px] no-underline overflow-hidden md:max-h-[500px]">
        {props.links.map((link) => (
          <a
            key={link}
            href="#"
            className="box-border caret-transparent text-neutral-400 block text-sm leading-[21px] outline-[3px] no-underline py-2 hover:text-white"
          >
            {link}
          </a>
        ))}
      </div>
    </div>
  );
};
