import ReactEvent from "./ReactEvent";
import DomEvent from "./DomEvent";

export default function WrapReactEvent() {
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
