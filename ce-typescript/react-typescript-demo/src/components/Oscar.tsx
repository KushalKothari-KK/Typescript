type OscarProps = {
    children : React.ReactNode
}
// React.ReactNode as we are passing h2 as child from Heading component
const Oscar = (props:OscarProps) => {
  return (
    <div>{props.children}</div>
  )
}

export default Oscar