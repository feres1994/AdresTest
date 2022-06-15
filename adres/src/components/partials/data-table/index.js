import React from 'react'
import PropTypes from 'prop-types';
import Header from "./header"
import Row from "./row"
export default function BaseDataTable({content,contentName,cells,isLoading}){
  return (
    <div>
        
       <Header />
      {
          content.map((record) => {
          return (  <Row 
            key={record.logId}
            cells={cells}
            contentName={contentName}
            />)
          })
      }
    </div>
  )
}

BaseDataTable.propTypes = {
    content: PropTypes.array,
    isLoading: PropTypes.bool,
    contentName: PropTypes.string.isRequired,
    cells: PropTypes.array.isRequired,
   
  }



