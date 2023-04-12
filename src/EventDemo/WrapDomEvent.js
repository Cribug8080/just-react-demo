import { useRef, useEffect } from "react";
import DomEvent from "./DomEvent";
import ReactEvent from "./ReactEvent";

export default function WrapDomEvent() {
  const ref = useRef(null);

  useEffect(() => {
    const clickFn = () => {
      console.log("WrapDomEvent");
    };
    if (ref.current) {
      ref.current.removeEventListener("click", clickFn);
      ref.current.addEventListener("click", clickFn, {
        // capture: true
      });
    }
    return () => {
      ref.current?.removeEventListener("click", clickFn);
    };
  }, []);
  return (
    <div ref={ref}>
      <h2>WrapDomEvent</h2>
      <ReactEvent />
      <DomEvent />
    </div>
  );
}
