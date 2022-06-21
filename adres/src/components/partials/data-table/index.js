import React from "react";
import PropTypes from "prop-types";
import Header from "./header";
import Row from "./row";
export default function BaseDataTable({ content, cells }) {
  return (
    <table>
      <thead>
        <Header cells={cells}  sortDirection="desc"/>
      </thead>
      <tbody>
        {content.map((record,i) => {
          return <Row key={record.logId} cells={cells} record={record}  index={i}/>;
        })}
      </tbody>
    </table>
  );
}

BaseDataTable.propTypes = {
  content: PropTypes.array,
  isLoading: PropTypes.bool,
  cells: PropTypes.array.isRequired,
};
