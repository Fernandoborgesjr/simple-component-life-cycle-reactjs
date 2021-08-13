import { useState } from "react";
import Clock from "./Clock";

export default function App () {
  const [show, setShow] = useState(true);
  return (
    <div style={{ display: "grid", justifyItems: "center"}}>
      {show ? <Clock /> : <h1>Clock stoped</h1>}
      <button onClick={() => setShow(! show)}>{show ? 'Stop' : 'Click here to Start'}</button>
      {show && <span>Heey!! See your console! :D</span>}
    </div>
  );
}