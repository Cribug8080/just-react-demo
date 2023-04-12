import { useState } from "react";

export default function () {
  const [data, setData] = useState(0);
  const handleClick = () => {
    setData((v) => ++v);
  };
  return (
    <div>
      {data}
      <button onClick={handleClick}>button</button>
    </div>
  );
}
