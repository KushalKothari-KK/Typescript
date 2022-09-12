type StatusProps = {
    status: 'loading' | 'success' | 'error'
}
// if pass other status except above will show error
const Status = (props:StatusProps) => {
  let message;
  if(props.status === "loading")
  {
    message = "Loading ..."
  }
  else if(props.status === "success")
  {
    message = "successfully fetched"
  }
  else if(props.status === "error"){
    message = "Error"
  }
    return (
    <div>Status - {message}</div>
  )
}

export default Status