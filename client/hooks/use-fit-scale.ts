import { useLayoutEffect, useRef, useState } from "react";

export function useFitScale(designWidth: number) {
  const containerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(0.3);
  const [contentHeight, setContentHeight] = useState(0);

  useLayoutEffect(() => {
    const container = containerRef.current;
    const content = contentRef.current;
    if (!container || !content) return;

    const update = () => {
      setScale(container.clientWidth / designWidth);
      setContentHeight(content.offsetHeight);
    };

    update();
    const observer = new ResizeObserver(update);
    observer.observe(container);
    observer.observe(content);
    return () => observer.disconnect();
  }, [designWidth]);

  return { containerRef, contentRef, scale, contentHeight };
}
