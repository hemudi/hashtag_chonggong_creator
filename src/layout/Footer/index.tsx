import Image from "next/image";

const DEVELOP_INFO = {
  NAME: "해삼스무디",
  LINK: "https://twitter.com/dev_smoothie",
  VERSION: "2.8",
};

const IMAGE_URL = "/assets/images/cd.png";
const YOUTUBE_HREF = "https://youtu.be/EYG4ROejmyI?si=wbH9N7ppO4C-ZmWf";

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
