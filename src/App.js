import { useRef } from "react";
import { Router, Route, Routes } from "react-router";
// import { Redirect, Route, Switch, Routes } from "react-router-dom";
// import Number from "./Number";
import Status from "./Status";
// import EventDemo from "./EventDemo";
import "./styles.css";

function Main() {
  return <div>Main</div>;
}
function About() {
  return <div>About</div>;
}
function A404() {
  return <div>404</div>;
}

export default function App() {
  const ref = useRef();
  const chenckValue = () => {
    console.log(ref.current);
  };
  // return (
  //   <>
  //     <Number ref={ref} value={23} />
  //     <button onClick={chenckValue}>拿</button>
  //   </>
  // );
  return (
    <div>
      <Status />
      {/* <Routers history={hashHistory}>
        <Route path="/1" component={() => <div>1</div>} />
        <Route path="/2" component={() => <div>2</div>} />
      </Routers> */}
      {/* <Router location={window.location}>
        <Routes>
          <Route path="/" Component={Main} />
          <Route path="/2" Component={About} />
          <Route path="*" Component={A404} />
        </Routes>
      </Router> */}
    </div>
  );
}
