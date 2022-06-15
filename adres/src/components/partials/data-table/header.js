import React from 'react'

export default function Header({cells}) {
  return (
    <tr>
   
        {
            cells.map((cell,i) => {
                return (
                    <th
                  
                    key={i}>
                        {
                            cell.name || "---"
                        }
                    </th>
                )
            })
        }
  
        </tr>
  )
}
