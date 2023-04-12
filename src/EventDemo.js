import { useEffect, useRef } from "react";

export default function EventDemo() {
  return (
    <div>
      <Descibe />
      <WrapReactEvent />
      <WrapDomEvent />
    </div>
  );
}

function WrapReactEvent() {
  const handleCLick = () => {
    console.log("WrapReactEvent");
  };
  return (
    <div onClick={handleCLick}>
      <h2>WrapReactEvent</h2>
      <ReactEvent />
      <DomEvent />
    </div>
  );
}

function WrapDomEvent() {
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

function ReactEvent() {
  const handleCLick = () => {
    console.log("ReactEvent");
  };
  return <div onClick={handleCLick}>ReactEvent</div>;
}

function DomEvent() {
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

function Descibe() {
  return (
    <div>
      <img
        width="700"
        src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/1e969caa9fc647cf8985c4c841a01f60~tplv-k3u1fbpfcp-zoom-in-crop-mark:1512:0:0:0.awebp"
      />
      <h1>描述</h1>
      <div>
        JSX 上写的事件并没有绑定在对应的真实 DOM
        上，而是通过事件代理的方式，将所有的事件都统一绑定在了 document 上。
        另外冒泡到 document 上的事件也不是原生浏览器事件，而是 React
        自己实现的合成事件（SyntheticEvent）。因此我们如果不想要事件冒泡的话，调用
        event.stopPropagation 是无效的，而应该调用 event.preventDefault
      </div>
    </div>
  );
}
