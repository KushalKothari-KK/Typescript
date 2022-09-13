import {Name} from './Person.types'

type PersonListProps = {
    names:Name[]
}

// instead of first and last we can use Name from Types

// }[] for array
const PersonList = (props:PersonListProps) => {
  return (
    <div>
        {props.names.map((name)=>{
            return(
                <h2 key={name.first}>{name.first} {name.last}</h2>
            )
        })}
    </div>
  )
}

export default PersonList