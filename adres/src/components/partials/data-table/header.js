import React, { useState } from "react";

export default function Header({ cells, sortDirection, setSort }) {
  const [sortMetric, setSortMetric] = useState("");

  function setDirection(value, sortDirection) {
    let direction = "";
    setSortMetric(value);
    if (
      sortMetric !== value ||
      sortDirection.direction === "" ||
      sortDirection.direction === "asc"
    ) {
      direction = "desc";
    } else {
      direction = "asc";
    }
  
    setSort(value, direction);
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
                <i
                  class={`fa-solid  cursor-pointer m-r-6 ${
                  
                    sortDirection.direction === "desc" &&
                    sortMetric === cell.dbName ? 'fa-angle-down' : 'fa-angle-up'
                  }`}
                  onClick={() => setDirection(cell.dbName, sortDirection)}
                ></i>
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
