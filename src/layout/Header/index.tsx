const TITLE_TEXT = "#HashTag_Chonggong_Creator";
const DESCRIPTION_TEXT = "실시간 트렌드 해시태그 총공글을 쉽게 생성해보세요!";

const Header = () => {
  return (
    <header className="flex flex-col items-center justify-center gap-3 select-none p-6">
      <h1 className="text-xl font-bold sm:text-3xl animate-gradient-xy bg-gradient-to-bl from-primary-200 via-violet-200 to-[#A2BDF2] drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)] bg-clip-text text-transparent">
        {TITLE_TEXT}
      </h1>
      <span className="text-sm sm:text-lg text-title-sub">{DESCRIPTION_TEXT}</span>
    </header>
  );
};

export default Header;
