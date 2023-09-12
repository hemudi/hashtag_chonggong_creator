"use client";

import { Analytics } from "@vercel/analytics/react";
import HashTagInputSection from "@components/HashTagInputSection";
import BlahCommentSection from "@components/BlahCommentSection";
import ResultCommentSection from "@components/ResultCommentSection";
import { pageView } from "@lib/gtag";
import useNavigationEvent from "@hooks/useNavigationEvent";

export default function HomePage() {
  useNavigationEvent(pageView);
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
