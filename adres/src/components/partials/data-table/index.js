import React from 'react'
import PropTypes from 'prop-types';
import Header from "./header"
import Row from "./row"
export default function BaseDataTable({content,contentName,cells,isLoading}){
  return (
    <table>
        
       <thead>
       <Header  cells={cells}/>
       </thead>
       <tbody>
      {
          content.map((record) => {
          return (  <Row 
            key={record.logId}
            cells={cells}
            contentName={contentName}
            record={record}
            />)
          })
      }
      </tbody>
    </table>
  )
}

BaseDataTable.propTypes = {
    content: PropTypes.array,
    isLoading: PropTypes.bool,
    contentName: PropTypes.string.isRequired,
    cells: PropTypes.array.isRequired,
   
  }



