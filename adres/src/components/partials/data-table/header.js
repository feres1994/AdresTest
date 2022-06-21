import React, {useState} from 'react'

export default function Header({cells,sortDirection}) {

    const [sortMetric,setSortMetric] = useState("")
   
  function setDirection(value,sortDirection){
    setSortMetric(value)
  }
    
  return (
    <tr >
   
        {
            cells.map((cell,i) => {
                return (
                    <th
                    className={cell.hiddenInMobile ? 'd-md-table-cell d-none ' : ''}
                    key={i}>
                        <div className='d-flex align-items-center justify-content-center'>
                            <span>{
                            cell.name || "---"
                        }</span>
                         {cell.sortable ?  <img src="https://img.icons8.com/ios-glyphs/30/undefined/circled-up-2.png" 
                          className={
                            sortDirection === 'desc'  && sortMetric === cell.dbName
                            ? 'transform-180'
                            : ''
                          }
                         onClick={() => setDirection(cell.dbName,sortDirection)}/> : ""}
                        </div>
                    </th>
                )
            })
        }
  
        </tr>
  )
}
