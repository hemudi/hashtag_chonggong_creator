"use client";

import { Analytics } from "@vercel/analytics/react";
import HashTagInputSection from "@components/HashTagInputSection";
import BlahCommentSection from "@components/BlahCommentSection";
import ResultCommentSection from "@components/ResultCommentSection";
import { useEffect } from "react";
import * as gtag from "@lib/gtag";
import { useRouter } from "next/router";

export default function HomePage() {
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = (url: URL) => {
      gtag.pageview(url);
    };
    router.events.on("routeChangeComplete", handleRouteChange);
    router.events.on("hashChangeComplete", handleRouteChange);
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
      router.events.off("hashChangeComplete", handleRouteChange);
    };
  }, [router.events]);

  return (
    <>
      <div className="flex flex-col items-center justify-center bg-white rounded-md p-2.5 h-fit">
        <HashTagInputSection />
        <BlahCommentSection />
        <ResultCommentSection />
      </div>
      <Analytics />
    </>
  );
}
