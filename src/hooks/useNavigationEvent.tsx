import { usePathname, useSearchParams } from "next/navigation";
import { useEffect } from "react";

const useNavigationEvent = (eventHandler: (url: string) => void) => {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  useEffect(() => {
    const url = pathname + searchParams.toString();
    eventHandler(url);
  }, [pathname, searchParams]);
};

export default useNavigationEvent;
