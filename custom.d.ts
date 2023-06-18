/* svgr */
declare module "*.svg" {
  import React from "react";
  const svg: React.FC<React.SVGProps<SVGSVGElement>>;
  export default svg;
}

declare module "*.svg?url" {
  import React from "react";
  const svgUrl: string;
  export default svgUrl;
}
