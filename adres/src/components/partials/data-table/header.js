import React, { useState } from "react";

export default function Header({ cells, sortDirection, setSort }) {
  const [sortMetric, setSortMetric] = useState("");

  function setDirection(value, sortDirection) {
    let direction= ""
    if(sortMetric !== value ){
        console.log(value)
        console.log(sortMetric)
    }
    if (sortMetric !== value || sortDirection.direction === "" || sortDirection.direction === "asc" ){
       direction = "desc"
    }
    else {
        direction = "asc"
    }
    setSortMetric(value);
    setSort(value,direction)
  }

  return (
    <tr>
      {cells.map((cell, i) => {
        return (
          <th
            className={cell.hiddenInMobile ? "d-md-table-cell d-none " : ""}
            key={i}
          >
            <div className="d-flex align-items-center justify-content-center">
              <span>{cell.name || "---"}</span>
              {cell.sortable ? (
                <img
                  src="https://img.icons8.com/ios-glyphs/30/undefined/circled-up-2.png"
                  alt="sort"
                  className={
                    sortDirection.direction === "desc" && sortMetric === cell.dbName
                      ? "transform-180"
                      : ""
                  }
                  onClick={() => setDirection(cell.dbName, sortDirection)}
                />
              ) : (
                ""
              )}
            </div>
          </th>
        );
      })}
    </tr>
  );
}
