import { useCallback, useEffect } from "react";

export default function useClickOutside<T extends HTMLElement>(ref: React.RefObject<T>, handler: () => void) {
  const clicksHandler = useCallback((e: Event) => {
    const element = e.target as HTMLElement; // clicked element

    if (ref.current && !ref.current.contains(element)) {
      handler();
    }
  }, [ref]);


  useEffect(() => {
    // setTimeout here for fix closing after mount
    setTimeout(() => window.addEventListener("click", clicksHandler), 0);

    return () => window.removeEventListener("click", clicksHandler);
  });
}
