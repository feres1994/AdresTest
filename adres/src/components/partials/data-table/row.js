import React from 'react'

export default function Row({cells,contentName,record}) {
  return (
    <tr  >
        {
            cells.map((cell,i) => {
                return (
                    <td
                  
                    key={i}>
                        {
                            record[cell.dbName] || "---"
                        }
                    </td>
                )
            })
        }
    </tr>
  )
}
