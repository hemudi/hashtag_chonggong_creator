import Image from "next/image";

const DEVELOP_INFO = {
  NAME: "해삼스무디",
  LINK: "https://twitter.com/dev_smoothie",
  VERSION: "2.8",
};

const IMAGE_URL = "/assets/images/cd.png";
const YOUTUBE_HREF =
  "https://x.com/search?q=%23%EC%95%84%EC%95%84_%EB%93%A4%EB%A6%AC%EC%8B%9C%EB%82%98%EC%9A%94_%EC%98%A4%EB%8A%986PM%F0%9F%93%BB&src=promoted_trend_click&vertical=trends";

const Footer = () => {
  return (
    <footer className="flex flex-col select-none cursor-default justify-center items-center w-full h-fit gap-2.5 p-2.5 sm:p-0 sm:h-20 text-white text-xs">
      <a
        className="hover:text-primary-300"
        href={DEVELOP_INFO.LINK}
        target="_blank"
      >{`Developed By. ${DEVELOP_INFO.NAME}`}</a>
      <span>{`Version ${DEVELOP_INFO.VERSION}`}</span>
      <a className="sm:hidden block animate-spin-bottom" href={YOUTUBE_HREF} target="_blank">
        <Image width="300" height="300" alt="plave pum" src={IMAGE_URL} priority />
      </a>
    </footer>
  );
};

export default Footer;
