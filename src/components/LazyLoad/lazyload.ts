import { RefObject, useEffect, useState } from 'react';

export function useOnScreen(ref: RefObject<HTMLDivElement>, isStop?: boolean) {
  const [isIntersecting, setIntersecting] = useState(false);

  const observer = new IntersectionObserver(([entry]) => setIntersecting(entry.isIntersecting), {
    rootMargin: '0px',
    threshold: 0.1,
  });

  useEffect(() => {
    if (isStop) {
      return () => {
        observer.disconnect();
      };
    } else {
      observer.observe(ref.current);
      return () => {
        observer.disconnect();
      };
    }
  }, [isStop]);

  return isIntersecting;
}
