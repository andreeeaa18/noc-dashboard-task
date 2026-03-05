import { useState } from "react";
import DeviceCard from "./DeviceCard";
import data from "./devices.json";

function SummaryPanel({ status, load }) {
  const [countActive, setCountActive] = useState(0);
  const [countCritical, setCountCritical] = useState(0);
  const [loading, setLoading] = useState(data);
  const [statusing, setStatusing] = useState(data);

  if (status === "Active") {
    setCountActive((c) => c);
    return (
      <>
        <p>Active: {countActive}</p>
      </>
    );
  }

  if (status === "Critical") {
    setCountCritical((c) => c);
    return (
      <>
        <p>Critical: {countCritical}</p>
      </>
    );
  }

  function reboot() {
    data.map((item) => {
      setLoading((item.load = 0));
      setStatusing((item.status = "Active"));
    });
  }
  return (
    <>
      <button onClick={reboot}>Emergency Reboot All</button>
    </>
  );
}
export default SummaryPanel;
