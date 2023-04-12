import { useRef, useEffect } from "react";

export default function DomEvent() {
  const ref = useRef(null);

  useEffect(() => {
    const clickFn = () => {
      console.log("DomEvent");
    };
    if (ref.current) {
      ref.current?.removeEventListener("click", clickFn);
      ref.current.addEventListener("click", clickFn, {
        // capture: true
      });
    }
    return () => {
      ref.current?.removeEventListener("click", clickFn);
    };
  }, []);
  return <div ref={ref}>DomEvent</div>;
}
