import React, {useState} from 'react'
import './inputs.css'

export default function DropDown({options, setOption}) {
    const [showDropDown,setShowDropDown] = useState(false)
    const [displayedOption,setDisplayedOption] = useState(options[0].name)

   function toggle(){
        setShowDropDown(!showDropDown)
    }
    function changeDisplayedName(newName){
setDisplayedOption(newName)
    }
  return (
    <div className="custom-select">
        <label>cccc</label>
    <div  className="custom-select-button text-field-partial" onClick={toggle}>
    <span className="custom-select-display-value">{displayedOption}</span>
  </div>
  <ul className="custom-select-options" 

  style={showDropDown ?  {display: 'block'} : {display: 'none'}}
   
 >
   {
       options.map((el,i) => {
           return (
               <li onClick={() => changeDisplayedName(el.name)}
               key={i}
               >{el.name}</li>
           )
       })
   }
  </ul>
</div>
  )
}
