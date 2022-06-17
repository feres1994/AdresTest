import React, { useState } from 'react'
import Page from './page'
import './index.css'


export default function Index({pages,emitCurrentPage}) {
    const [currentPage,setCurrentPage] = useState(1)
    const paginationArray= []
    for (let pageNumber = 0; pageNumber < pages; pageNumber++) {
        paginationArray.push(pageNumber);
    }

    function goToPage(pageNumber){
        setCurrentPage(pageNumber)
        emitCurrentPage(pageNumber)
    }

  return (
    <div className='d-flex'>
     {


       paginationArray.map((el,i) => {
           
       //display numbers when abs of elment - currentNumber page < 3 or if the number === totalPages - 1 or  if number === 1
if (Math.abs(el - currentPage) < 3 ||
        el === pages - 1 ||
        el === 1 ) {
            return  <Page 
            key={i}
            page={el}
            disabled={el+1 === i}
            changePage={goToPage}
            />
        }
        //if not : display ... when number === 1 and abs of this number - currentPage > 3 or if the number === totalPages - 2 and abs of this number - currentPage > 3
if (  (el === 1 && Math.abs(el - currentPage) > 3) ||
(el === pages - 2 &&
  Math.abs(el -  currentPage) > 3)) {
      return <span

      key={i + '_limit'}
      className="page-number"
      >...</span>
  }

    
    })
     }
    </div>
  )
}
