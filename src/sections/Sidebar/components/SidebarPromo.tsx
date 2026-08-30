export const SidebarPromo = () => {
  return (
    <div className="[align-items:normal] bg-none box-border caret-transparent block h-auto outline-[3px] static no-underline overflow-visible m-0 p-0 rounded-none md:items-center md:bg-[linear-gradient(135deg,rgb(184,134,11),rgb(218,165,32))] md:flex md:h-[60px] md:relative md:overflow-hidden md:mx-3 md:my-2 md:px-4 md:py-3 md:rounded-xl">
      <span className="box-border caret-transparent inline font-normal min-h-0 min-w-0 outline-[3px] static no-underline z-auto md:block md:font-semibold md:min-h-[auto] md:min-w-[auto] md:relative md:z-[2]">
        Free
        <br className="box-border caret-transparent font-normal outline-[3px] no-underline md:font-semibold" />
        money
      </span>
      <img
        alt="Free money"
        src="https://c.animaapp.com/0KjVNUbKnt_GFjT-ALLmtQ/assets/9e0616c2950dafcae9f2facc72dc37575148df99.png"
        className="box-border caret-transparent h-auto max-w-full object-fill outline-[3px] static no-underline z-auto right-auto top-auto md:h-full md:object-cover md:absolute md:z-[1] md:right-0 md:top-0"
      />
    </div>
  );
};
