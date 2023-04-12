export default function ReactEvent() {
  const handleCLick = () => {
    console.log("ReactEvent");
  };
  return <div onClick={handleCLick}>ReactEvent</div>;
}
