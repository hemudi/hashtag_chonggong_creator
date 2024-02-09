import Button from "@components/common/Button";
import Icon from "@components/common/Icon";
import { useHashTagAction } from "@store/hashtag";

interface HashTagItemProps {
  num: number;
  hashTag: string;
}

const HashTagItem = ({ num, hashTag, ...props }: HashTagItemProps) => {
  const { removeHashTag } = useHashTagAction();

  const handleClickRemoveButton = () => {
    removeHashTag(num - 1);
  };

  return (
    <li className="flex w-full h-10 bg-white rounded-md text-xs sm:text-sm gap-1.5 overflow-hidden drop-shadow-md text-neutral-900">
      <div className="flex items-center justify-center w-12 h-full bg-secondary-200 font-bold text-sm text-white sm:text-lg">
        {num}
      </div>
      <div className="flex flex-col justify-center w-full h-full overflow-hidden whitespace-normal break-all text-ellipsis">
        {hashTag}
      </div>
      <Button size="small" onClick={handleClickRemoveButton}>
        <Icon type="delete" alt="해시태그 삭제" />
      </Button>
    </li>
  );
};

export default HashTagItem;
