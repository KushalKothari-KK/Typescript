type GreetProps = {
    name:string
    messageCount?:number
    isLoggedIn:boolean
}

// ? optional type props
const Greet = (props:GreetProps) => {
    const {messageCount = 0} = props
    return (
    <div>{props.isLoggedIn ? `Welcom ${props.name} to typescript project you have ${messageCount} message`: `Welcome Guest`}</div>
  )
}

export default Greet