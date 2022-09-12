type PersonProps = {
    name:{
        first:string
        second:string
    }
}
const Person = (props:PersonProps) => {
  return (
    <div>Person is {props.name.first} {props.name.second}</div>
  )
}

export default Person