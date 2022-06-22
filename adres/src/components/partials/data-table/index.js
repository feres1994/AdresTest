import React from "react";
import PropTypes from "prop-types";
import Header from "./header";
import Row from "./row";

export default function BaseDataTable({
  content,
  cells,
  setSort,
  sortByDirection,
}) {
  return (
    <table>
      <thead>
        <Header
          cells={cells}
          sortDirection={sortByDirection}
          setSort={(value, name) => setSort(value, name)}
        />
      </thead>
      <tbody>
        {content.map((record, i) => {
          return (
            <Row
              key={i}
              cells={cells}
              record={record}
              index={i}
            />
          );
        })}
      </tbody>
    </table>
  );
}

BaseDataTable.propTypes = {
  content: PropTypes.array,
  cells: PropTypes.array.isRequired,
  sortByDirection: PropTypes.object
};
