import { useState } from "react";
import DeviceCard from "./DeviceCard";
import data from "./devices.json";
import SummaryPanel from "./SummaryPanel";

function App() {
  const [components, setComponents] = useState(data);

  function addLoad(id) {
    let idArray = [...components];
    idArray = idArray.map((idArr) => {
      console.log(idArr);
      if (id === idArr.id) {
        return {
          ...idArr,
          load: idArr.load + 10 > 100 ? 100 : idArr.load + 10,
        };
      } else {
        return idArr;
      }
    });
    console.log(idArray);
    setComponents(idArray);
  }

  function decreaseLoad(id) {
    let idArray = [...components];
    idArray = idArray.map((idArr) => {
      console.log(idArr);
      if (id === idArr.id) {
        return {
          ...idArr,
          load: idArr.load - 20 < 0 ? 0 : idArr.load - 20,
        };
      } else {
        return idArr;
      }
    });
    console.log(idArray);
    setComponents(idArray);
  }

  return (
    <>
      <div>
        {components.map((component) => {
          return (
            <DeviceCard
              key={component.id}
              id={component.id}
              name={component.name}
              type={component.type}
              status={component.status}
              load={component.load}
              addLoad={addLoad}
              decreaseLoad={decreaseLoad}
            />
          );
        })}
      </div>

      <SummaryPanel />
    </>
  );
}

export default App;
