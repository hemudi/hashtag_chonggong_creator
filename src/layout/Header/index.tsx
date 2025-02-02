import Image from "next/image";

const TITLE_TEXT = "#HashTag_Chonggong_Creator";
const DESCRIPTION_TEXT = "실시간 트렌드 해시태그 총공글을 쉽게 생성해보세요!";

const IMAGE_URL = "/assets/images/yedeong.png";
const YOUTUBE_HREF = "https://youtu.be/b3GoZMfHJT4?si=YLiZUTYFJR-_K0bT";

const Header = () => {
  return (
    <header className="flex flex-col items-center justify-center gap-3 select-none cursor-default pt-6  ">
      <h1 className="font-bold sm:text-4xl text-2xl bg-text-gradient bg-clip-text text-transparent font-blackopsone italic ">
        {TITLE_TEXT}
      </h1>
      <span className="text-sm sm:text-lg text-white animate-neon-flicker">{DESCRIPTION_TEXT}</span>
      <a className="w-fit h-fit animate-move-side" href={YOUTUBE_HREF} target="_blank">
        <Image width="30" height="30" alt="yedong" src={IMAGE_URL} priority />
      </a>
    </header>
  );
};

export default Header;
