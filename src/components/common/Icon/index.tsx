import DeleteIconUrl from "public/Icon/ic_delete.svg?url";
import Image from "next/image";

const iconUrls = {
  delete: DeleteIconUrl,
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

const Icon = ({ type, size = "medium", alt }: IconProps) => {
  return <Image src={iconUrls[type]} width={iconSize[size]} height={iconSize[size]} alt={alt} />;
};

export default Icon;
