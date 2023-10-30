import HashTagItem from "@components/HashTagInputSection/HashTagList/HashTagItem";
import { useHashTagList } from "@store/hashtag";

const HashTagList = () => {
  const hashTagList = useHashTagList();
  return (
    <ul className="flex flex-col items-center justify-center w-full h-full min-h-10 gap-1.5 rounded-md p-2 bg-black text-slate-200 text-sm sm:text-base">
      {hashTagList.length > 0
        ? hashTagList.map((value, index) => <HashTagItem key={index} hashTag={value} num={index + 1} />)
        : "추가 된 해시태그가 없습니다!"}
    </ul>
  );
};

export default HashTagList;
