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




