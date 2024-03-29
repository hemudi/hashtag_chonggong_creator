const DEVELOP_INFO = {
  NAME: "해삼스무디",
  LINK: "https://twitter.com/dev_smoothie",
  VERSION: "2.7",
};

const Footer = () => {
  return (
    <footer className="flex flex-col justify-center items-center w-full h-20 gap-2.5 text-title-footer text-xs">
      <a
        className="hover:text-secondary-100"
        href={DEVELOP_INFO.LINK}
        target="_blank"
      >{`Developed By. ${DEVELOP_INFO.NAME}`}</a>
      <span>{`Version ${DEVELOP_INFO.VERSION}`}</span>
    </footer>
  );
};

export default Footer;
