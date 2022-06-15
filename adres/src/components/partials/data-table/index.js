import React from 'react'
import PropTypes from 'prop-types';
import Header from "./header"
import Row from "./row"
export default function BaseDataTable({contentcontentName,cells,isLoading}){
  return (
    <div>
       <Header />
      <Row />
    </div>
  )
}

BaseDataTable.propTypes = {
    content: PropTypes.array,
    isLoading: PropTypes.bool,
    contentName: PropTypes.string.isRequired,
    cells: PropTypes.array.isRequired,
   
  }



