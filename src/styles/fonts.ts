import localFont from "next/font/local";

export const gmarketSans = localFont({
  src: [
    {
      path: "../../public/assets/fonts/GmarketSans/woff2/GmarketSansLight.woff2",
      weight: "300",
    },
    {
      path: "../../public/assets/fonts/GmarketSans/woff2/GmarketSansMedium.woff2",
      weight: "400",
    },
    {
      path: "../../public/assets/fonts/GmarketSans/woff2/GmarketSansBold.woff2",
      weight: "700",
    },
  ],
  variable: "--font-gmarketsans",
});

export const tenada = localFont({
  src: [
    {
      path: "../../public/assets/fonts/Tenada/Tenada.woff2",
      weight: "400",
    },
  ],
  variable: "--font-tenada",
});

export const partialSans = localFont({
  src: [
    {
      path: "../../public/assets/fonts/PartialSans/PartialSansKR.woff2",
      weight: "400",
    },
  ],
  variable: "--font-partialsans",
});

export const blackopsone = localFont({
  src: [
    {
      path: "../../public/assets/fonts/BlackOpsOne/BlackOpsOne.woff2",
      weight: "400",
    },
  ],
  variable: "--font-blackopsone",
});
