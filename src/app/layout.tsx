import "@styles/global.css";
import { Suspense } from "react";
import WebAnalytics from "@components/Analytics";
import { gmarketSans, tenada } from "@styles/fonts";

export const metadata = {
  title: "해시태그 총공글 생성기 | HashTag Conggong Creator",
  description:
    "해시태그 총공글 생성기(HashTag Conggong Creator)는 X(트위터) 실시간 트렌드 총공글을 쉽게 생성해주는 사이트입니다.",
  keywords: [
    "해시태그 총공글 생성기",
    "HashTag Conggong Creator",
    "트위터",
    "해시총공",
    "실트총공",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="ko"
      className={`${gmarketSans.variable} ${tenada.variable} font-gmarketsans`}
    >
      <head />
      <body>
        <Suspense>
          <WebAnalytics />
        </Suspense>
        {children}
      </body>
    </html>
  );
}
