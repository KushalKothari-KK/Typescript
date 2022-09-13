import React from 'react'
type InputProps = {
    value:string
    handleChange:(event:React.ChangeEvent<HTMLInputElement>) => void
}
// Destructure Props
const Input = ({value,handleChange}:InputProps) => {
    // const handleInputChange = (event:React.ChangeEvent<HTMLInputElement>)=>{
    //     console.log(event)
    // } 
    // Or can be written like above
  return (
    <input type="text" value={value} onChange={handleChange} />
  )
}

export default Input