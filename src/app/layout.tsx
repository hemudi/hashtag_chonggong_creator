import "@styles/global.css";
import Script from "next/script";
import * as gtag from "@lib/gtag";

export const metadata = {
  title: "해시태그 총공글 생성기 | HashTag Conggong Creator",
  description:
    "해시태그 총공글 생성기(HashTag Conggong Creator)는 트위터 실시간 트렌드 총공글을 쉽게 생성해주는 사이트입니다.",
  keywords: ["해시태그 총공글 생성기", "HashTag Conggong Creator", "트위터", "해시총공", "실트총공"],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <head />
      <body>{children}</body>
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${gtag.GOOGLE_ANALYTICS}`}
      ></Script>
      <Script
        id="gtag-init"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${gtag.GOOGLE_ANALYTICS}', {
              page_path: window.location.pathname,
            });
          `,
        }}
      />
    </html>
  );
}
