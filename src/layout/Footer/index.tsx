import Image from "next/image";

const DEVELOP_INFO = {
  NAME: "해삼스무디",
  LINK: "https://twitter.com/dev_smoothie",
  USAGE_LINK: "https://x.com/dev_smoothie/status/1755883489478775034",
  VERSION: "2.9",
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
    </footer>
  );
};

export default Footer;
