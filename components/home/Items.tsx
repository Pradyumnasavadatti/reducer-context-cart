import React from "react";
import Item from "./Item";
import { dataType } from "./data";
function Items({ data }: { data: dataType[] }) {
  return (
    <div className="w-full h-[85vh] overflow-scroll">
      <div className="w-full grid grid-cols-4 gap-5 p-5">
        {data.map((val, ind) => {
          return (
            <div
              key={val.name + " " + ind}
              className="w-full h-[45vh]  bg-[rgba(0,0,0,0.3)] rounded-xl cursor-pointer"
            >
              <Item data={val} />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Items;
