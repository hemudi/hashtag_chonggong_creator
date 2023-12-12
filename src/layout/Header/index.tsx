const TITLE_TEXT = "#HashTag_Conggong_Creator";
const DESCRIPTION_TEXT = "실시간 트렌드 해시태그 총공글을 쉽게 생성해보세요!";

const Header = () => {
  return (
    <header className="flex flex-col items-center justify-center gap-3 select-none p-6">
      <h1 className="text-xl font-bold sm:text-3xl text-title-main drop-shadow-[0_0_2px_rgba(255,255,255,1)]">
        {TITLE_TEXT}
      </h1>
      <span className="text-sm sm:text-lg text-title-sub">{DESCRIPTION_TEXT}</span>
    </header>
  );
};

export default Header;
