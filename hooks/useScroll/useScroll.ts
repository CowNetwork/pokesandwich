import { useEffect } from 'react';

export default function useScroll(
  listener: (event?: Event) => void,
  options?: AddEventListenerOptions
): void {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const scrollHandler = (event: Event) => {
        listener(event);
      };

      window.addEventListener('scroll', scrollHandler, options);

      return () => {
        window.removeEventListener('scroll', scrollHandler, options);
      };
    }
  }, [listener, options]);
}