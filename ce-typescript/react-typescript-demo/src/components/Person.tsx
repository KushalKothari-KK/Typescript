import { PersonProps } from "./Person.types"
// using seperate file to save props and import from them
const Person = (props:PersonProps) => {
  return (
    <div>Person is {props.name.first} {props.name.last}</div>
  )
}

export default Person