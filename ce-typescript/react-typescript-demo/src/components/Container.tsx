type ContainerProps = {
    styles:React.CSSProperties
}
// Cannot define if type will be string or number so use React.CSSProperties for valid css
const Container = (props:ContainerProps) => {
  return (
    <div style={props.styles}>Text Content goes here</div>
  )
}

export default Container