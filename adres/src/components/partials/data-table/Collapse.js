import React from "react";

export default function Collapse({ cells, record, bg }) {
  return (
    <td className={bg}>
      {cells.map((cell, i) => {
        return (
          <div className="d-flex justify-content-between" key={i}>
            <p className="text-bold">{cell.name}</p>
            <p>{record[cell.dbName] || "---"}</p>
          </div>
        );
      })}
    </td>
  );
}
