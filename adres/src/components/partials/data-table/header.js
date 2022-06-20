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
                        } {cell.sortable ?  <img src="https://img.icons8.com/ios-glyphs/30/undefined/circled-up-2.png"/> : ""}
                    </th>
                )
            })
        }
  
        </tr>
  )
}
