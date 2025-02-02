import Image from "next/image";

const DEVELOP_INFO = {
  NAME: "해삼스무디",
  LINK: "https://twitter.com/dev_smoothie",
  USAGE_LINK: "https://x.com/dev_smoothie/status/1755883489478775034",
  VERSION: "2.9",
};

const Footer = () => {
  return (
    <footer className="flex flex-col select-none cursor-default justify-center items-center w-full h-fit gap-2.5 p-2.5 sm:p-0 sm:h-20 text-white text-xs">
      <a
        className="hover:text-secondary-500"
        href={DEVELOP_INFO.USAGE_LINK}
        target="_blank"
      >{`사용 방법 안내`}</a>
      <a
        className="hover:text-secondary-500"
        href={DEVELOP_INFO.LINK}
        target="_blank"
      >{`Developed By. ${DEVELOP_INFO.NAME}`}</a>
      <span>{`Version ${DEVELOP_INFO.VERSION}`}</span>
    </footer>
  );
};

export default Footer;
