import "@styles/global.css";
import { Suspense } from "react";
import WebAnalytics from "@components/Analytics";
import { gmarketSans, tenada, partialSans, blackopsone } from "@styles/fonts";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
import Meteor from "@components/common/Meteor";

export const metadata = {
  title: "해시태그 총공글 생성기 | HashTag Conggong Creator",
  description:
    "해시태그 총공글 생성기(HashTag Conggong Creator)는 X(트위터) 실시간 트렌드 총공글을 쉽게 생성해주는 사이트입니다.",
  keywords: ["해시태그 총공글 생성기", "HashTag Conggong Creator", "트위터", "해시총공", "실트총공"],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="ko"
      className={`${gmarketSans.variable} ${tenada.variable} ${partialSans.variable} ${blackopsone.variable} font-gmarketsans`}
    >
      <head />
      <body>
        <Suspense>
          <WebAnalytics />
        </Suspense>
        <ToastContainer autoClose={1000} />
        <Meteor />
        {children}
      </body>
    </html>
  );
}
