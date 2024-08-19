const TITLE_TEXT = "#HashTag_Chonggong_Creator";
const DESCRIPTION_TEXT = "실시간 트렌드 해시태그 총공글을 쉽게 생성해보세요!";

const Header = () => {
  return (
    <header className="flex flex-col items-center justify-center gap-3 select-none cursor-default py-6">
      <h1 className="font-bold sm:text-3xl text-2xl text-white animate-neon-flicker font-tenada">
        {TITLE_TEXT}
      </h1>
      <span className="text-sm sm:text-lg text-white">{DESCRIPTION_TEXT}</span>
    </header>
  );
};

export default Header;
