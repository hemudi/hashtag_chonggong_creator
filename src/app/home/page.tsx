"use client";

import { Analytics } from "@vercel/analytics/react";
import HashTagInputSection from "@components/HashTagInputSection";
import BlahCommentSection from "@components/BlahCommentSection";
import ResultCommentSection from "@components/ResultCommentSection";
import { useEffect } from "react";
import * as gtag from "@lib/gtag";
import { useRouter } from "next/navigation";
import { useNavigationEvent } from "@hooks/useNavigationEvent";

export default function HomePage() {
  const router = useRouter();

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
