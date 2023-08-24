const TITLE_TEXT = "#HashTag_Conggong_Creator";
const DESCRIPTION_TEXT = "실시간 트렌드 해시태그 총공글을 쉽게 생성해보세요!";

const Header = () => {
  return (
    <header className="flex flex-col items-center justify-center gap-3 select-none p-6 ">
      <h1 className="text-3xl font-bold">{TITLE_TEXT}</h1>
      <span className="text-lg text-gray">{DESCRIPTION_TEXT}</span>
    </header>
  );
};

export default Header;
