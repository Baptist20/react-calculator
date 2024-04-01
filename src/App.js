import { useState } from "react";
import Bill from "./components/Bill";
import Rate1 from "./components/Rate1";
import Rate2 from "./components/Rate2";
import Footer from "./components/Footer";
import Reset from "./components/Reset";

export default function App() {
  const [bill, setBill] = useState("");
  const [service1, setService1] = useState(0);
  const [service2, setService2] = useState(0);

  function enterBill(e) {
    setBill(Number(e.target.value));
  }

  function onSetService1(e) {
    setService1(Number(e.target.value));
  }

  function onSetService2(e) {
    setService2(e.target.value);
  }

  function reset() {
    setBill("");
    setService1("");
    setService2("");
  }
  return (
    <div>
      <Bill bill={bill} onEnterBill={enterBill} />
      <Rate1 service1={service1} onSetService1={onSetService1} />
      <Rate2 service2={service2} onSetService2={onSetService2} />
      <Footer bill={bill} service1={service1} service2={service2} />
      <Reset onReset={reset} />
    </div>
  );
}
