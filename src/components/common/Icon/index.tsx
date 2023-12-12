import DeleteIconUrl from "public/assets/Icon/ic_delete.svg?url";
import Image from "next/image";

const iconUrls = {
  delete: "/assets/Icon/delete.png",
};

interface IconProps {
  type: "delete";
  size?: "small" | "medium" | "large";
  alt: string;
}

const iconSize: { [key: string]: `${number}` } = {
  small: "20",
  medium: "25",
  large: "35",
};

const Icon = ({ type, size = "small", alt }: IconProps) => {
  return (
    <Image
      className="flex justify-center items-center"
      src={iconUrls[type]}
      width={iconSize[size]}
      height={iconSize[size]}
      alt={alt}
    />
  );
};

export default Icon;
