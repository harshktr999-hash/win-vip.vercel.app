export type FooterPromoCardProps = {
  cardVariant: string;
  contentClassName: string;
  title: React.ReactNode;
  titleClassName: string;
  description: React.ReactNode;
  descriptionClassName: string;
  buttonText: string;
  buttonClassName: string;
  buttonIconSrc?: string;
  buttonIconAlt?: string;
  buttonIconClassName?: string;
  imageAlt: string;
  imageSrc?: string;
  imageClassName: string;
};

export const FooterPromoCard = (props: FooterPromoCardProps) => {
  return (
    <div
      className={`box-border caret-transparent outline-[3px] relative no-underline overflow-hidden mb-4 p-5 rounded-2xl ${props.cardVariant}`}
    >
      <div
        className={`box-border caret-transparent outline-[3px] no-underline ${props.contentClassName}`}
      >
        <h3
          className={`box-border caret-transparent outline-[3px] no-underline ${props.titleClassName}`}
        >
          {props.title}
        </h3>
        <p
          className={`box-border caret-transparent text-[13px] leading-[19.5px] outline-[3px] no-underline mt-1 ${props.descriptionClassName}`}
        >
          {props.description}
        </p>
        <button
          className={`caret-transparent font-semibold outline-[3px] text-center no-underline rounded-lg ${props.buttonClassName}`}
        >
          {props.buttonIconSrc ? (
            <img
              src={props.buttonIconSrc}
              alt={props.buttonIconAlt}
              className={props.buttonIconClassName}
            />
          ) : null}
          {props.buttonText}
        </button>
      </div>
      <img
        alt={props.imageAlt}
        src={props.imageSrc}
        className={`box-border caret-transparent h-full object-contain outline-[3px] absolute no-underline right-0 ${props.imageClassName}`}
      />
    </div>
  );
};
