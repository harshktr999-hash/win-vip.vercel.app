export const PromoCards = () => {
  return (
    <section className="box-border caret-transparent h-auto min-h-0 min-w-0 outline-[3px] no-underline mb-6 md:h-full md:min-h-[auto] md:min-w-[auto] md:mb-0">
      <div className="box-border caret-transparent gap-x-3 grid grid-cols-[2fr_1fr] grid-rows-none h-auto outline-[3px] gap-y-3 no-underline md:gap-x-4 md:grid-cols-[1fr] md:grid-rows-[1fr_1fr] md:h-full md:gap-y-4">
        <div className="bg-[linear-gradient(135deg,rgb(27,53,79)_0%,rgb(13,27,42)_100%)] box-border caret-transparent h-24 min-h-[auto] min-w-[auto] outline-[3px] relative no-underline overflow-hidden rounded-2xl md:h-full md:min-h-[100px]">
          <div className="box-border caret-transparent flex flex-col h-full justify-start outline-[3px] relative no-underline z-[2] p-3 md:p-5">
            <h3 className="box-border caret-transparent text-[15px] font-bold leading-[16.5px] min-h-[auto] min-w-[auto] outline-[3px] no-underline md:text-[22px] md:leading-[24.2px]">
              Free
              <br className="box-border caret-transparent text-[15px] leading-[16.5px] outline-[3px] no-underline md:text-[22px] md:leading-[24.2px]" />
              money
            </h3>
            <p className="box-border caret-transparent text-slate-400 text-[10px] leading-3 min-h-[auto] min-w-[auto] outline-[3px] no-underline mt-1 md:text-[13px] md:leading-[15.6px] md:mt-1.5">
              Giving away Ferrari
              <br className="box-border caret-transparent text-[10px] leading-3 outline-[3px] no-underline md:text-[13px] md:leading-[15.6px]" />
              &amp; other prizes
            </p>
          </div>
          <img
            alt="Free money promotion"
            src="https://c.animaapp.com/0KjVNUbKnt_GFjT-ALLmtQ/assets/car.webp"
            className="box-border caret-transparent h-full max-w-[60%] object-contain outline-[3px] pointer-events-none absolute no-underline z-[1] right-0 bottom-0"
          />
        </div>
        <div className="bg-[linear-gradient(135deg,rgb(44,66,87)_0%,rgb(21,34,46)_100%)] box-border caret-transparent h-24 min-h-[auto] min-w-[auto] outline-[3px] relative no-underline overflow-hidden rounded-2xl md:h-full md:min-h-[100px]">
          <div className="items-center box-border caret-transparent flex flex-col h-full justify-start outline-[3px] relative text-center no-underline z-[2] pt-2.5 pb-3 px-3 md:p-5">
            <h3 className="box-border caret-transparent text-[15px] font-bold leading-[16.5px] min-h-[auto] min-w-[auto] outline-[3px] no-underline md:text-[22px] md:leading-[24.2px]">
              Bonuses
            </h3>
          </div>
          <img
            alt="Bonuses"
            src="https://c.animaapp.com/0KjVNUbKnt_GFjT-ALLmtQ/assets/giftcar.png"
            className="bottom-[-5px] box-border caret-transparent h-[75px] max-w-[85%] object-contain outline-[3px] pointer-events-none absolute no-underline translate-x-[-50.0%] z-[1] left-2/4 md:h-[110px] md:-bottom-2"
          />
        </div>
      </div>
    </section>
  );
};
