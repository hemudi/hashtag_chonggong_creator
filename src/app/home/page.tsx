"use client";

import { Analytics } from "@vercel/analytics/react";
import HashTagInputSection from "@components/HashTagInputSection";
import BlahCommentSection from "@components/BlahCommentSection";
import ResultCommentSection from "@components/ResultCommentSection";
import Script from "next/script";

export default function HomePage() {
  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
      />
      <Script id="google-analytics">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
 
          gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}');
        `}
      </Script>

      <div className="flex flex-col items-center justify-center bg-white rounded-md p-2.5 h-fit">
        <HashTagInputSection />
        <BlahCommentSection />
        <ResultCommentSection />
      </div>
      <Analytics />
    </>
  );
}
