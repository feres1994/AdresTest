import React from 'react'

export default function Row({cells,contentName,record}) {
  return (
    <div   className='d-flex'>
        {
            cells.map((cell,i) => {
                return (
                    <div  
                  
                    key={i}>
                        {
                            record[cell.dbName] || "---"
                        }
                    </div>
                )
            })
        }
    </div>
  )
}
