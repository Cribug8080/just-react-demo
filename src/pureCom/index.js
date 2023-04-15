import { useState, memo } from "react";

function RenderTimes(props) {
  console.log("RenderTimes", props.data);
  return <div>RenderTimes</div>;
}
function RenderPureComponent() {
  console.log("RenderPureComponent");
  return <div>RenderPureComponent</div>;
}

const MemoRenderTimes = memo(RenderTimes, (a, b) => true);

export default function () {
  const [data, setData] = useState(0);
  console.log("data", data);
  return (
    <div>
      <div onClick={() => setData((v) => ++v)}>PureCom{data}</div>
      <RenderTimes data={"1-" + data} />
      <MemoRenderTimes data={"2-" + data} />
      <RenderPureComponent />
    </div>
  );
}
