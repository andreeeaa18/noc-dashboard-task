import { useState } from "react";
function DeviceCard({ id, name, type, status, load, addLoad, decreaseLoad }) {
  const [loading, setLoading] = useState(0);

  function simulateTraffic() {
    setLoading(load + 10 < 100);
  }

  function flushCache() {
    setLoading(load - 20 > 0);
  }
  return (
    <>
      <p>{name}</p>
      <p>{type}</p>

      <p
        style={
          status === "Active"
            ? { backgroundColor: "green" }
            : status === "Warning"
              ? { backgroundColor: "yellow" }
              : { backgroundColor: "red" }
        }
      >
        {load > 90
          ? (status = "Critical")
          : load > 79 && load <= 89
            ? (status = "Warning")
            : (status = "Active")}{" "}
        {status}
      </p>

      <p>{load}</p>
      <button onClick={() => addLoad(id)}>Simulate Traffic</button>
      <button onClick={() => decreaseLoad(id)}>Flush Cache</button>
    </>
  );
}
export default DeviceCard;
