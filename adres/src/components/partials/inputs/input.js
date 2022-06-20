import React from 'react'

export default function Input({label,name,type,value,placeholder,getInputValue}) {
    //expect the text input will be used in all the app but in dfferent way
    //prepare it as partial then make it custom, we can enhance it later
  return (
    <div className='d-flex flex-column align-items-start '>
     <label>{label}</label>
       <div>
           <input name={name} type={type} value={value} placeholder={placeholder}
           className="text-field-partial"
            onChange={e => getInputValue(e.target.name,e.target.value)}
           />
       </div>
    </div>
  )
}
