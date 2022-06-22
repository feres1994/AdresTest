import React from "react";
import Collapse from "./collapse";
import PropTypes from "prop-types";


export default function Row({ cells, record, index }) {
  return (
    <>
      <tr>
        {cells.map((cell, i) => {
          return (
            <td
              className={cell.hiddenInMobile ? "d-md-table-cell d-none " : ""}
              key={i}
            >
              {record[cell.dbName] || "---"}
            </td>
          );
        })}
      </tr>

      <tr className="d-md-none">
        <Collapse
          cells={cells}
          record={record}
          bg={index % 2 === 0 ? "bg-white" : "bg-gray"}
        />
      </tr>
    </>
  );
}

Row.propTypes = {
    record: PropTypes.object,
    cells: PropTypes.array.isRequired,
    sortByDirection: PropTypes.object,
    index: PropTypes.number
  };
