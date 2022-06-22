import React from "react";
import PropTypes from "prop-types";

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

Collapse.propTypes = {
    record: PropTypes.object,
    cells: PropTypes.array.isRequired,
    bg: PropTypes.string,
  };