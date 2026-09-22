import logoBlue from '../assets/logo-blue.png';
import logoWhite from '../assets/logo-white.png';

const BrandLogo = ({
  variant = 'blue',
  showTagline = true,
  imgClassName = 'h-16 w-auto',
  className = '',
  asLink = true,
}) => {
  const content = (
    <>
      <img
        src={variant === 'white' ? logoWhite : logoBlue}
        alt="1 Blue Pluto"
        width={1384}
        height={719}
        draggable="false"
        className={`object-contain select-none ${imgClassName}`}
      />
      {showTagline && (
        <span className="mt-1.5 text-center text-[10px] font-bold uppercase tracking-[0.25em] text-[#D4AF37] sm:text-xs">
          Powerful Evolution
        </span>
      )}
    </>
  );

  const classes = `inline-flex flex-col items-center ${className}`;

  if (!asLink) {
    return <div className={classes}>{content}</div>;
  }

  return (
    <a href="#hero" className={classes}>
      {content}
    </a>
  );
};

export default BrandLogo;
