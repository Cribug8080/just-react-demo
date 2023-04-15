import { createContext, useContext, useState, memo } from "react";

const MyContext = createContext(null);

export default function ContextDemo() {
  const [value, setValue] = useState({ arr: [2] });
  return (
    <MyContext.Provider value={value}>
      <a
        href="https://developer.aliyun.com/article/1048728#slide-2"
        target="_blank"
      >
        https://developer.aliyun.com/article/1048728#slide-2
      </a>
      <button
        onClick={() => setValue((v) => ({ arr: [...v.arr, Math.random()] }))}
      >
        change
      </button>
      <ChildCom />
      <ChildCom2 />
    </MyContext.Provider>
  );
}

function ChildCom() {
  const ctx = useContext(MyContext);
  console.log("With Context");
  return <div>{ctx.arr}</div>;
}

function ChildComCom2(props) {
  const ctx = useContext(MyContext);
  console.log("No Context ChildComCom2", props.data);
  return <div>No Context ChildComCom2{ctx.arr}</div>;
}

const MemoChilCom = memo(ChildComCom2, () => true);

function ChildCom2() {
  console.log("No Context ChildCom2");
  return (
    <div>
      No Context
      <ChildComCom2 data="noMemo" />
      <MemoChilCom data="fromMemo" />
    </div>
  );
}
