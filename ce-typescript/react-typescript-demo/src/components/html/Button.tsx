type ButtonProps ={
    variant:'primary' | 'secondary'
    children:string
} & Omit<React.ComponentProps<'button'>,'children'> 

// above will omit children as component and will allow only string 

export const CustomButton = ({variant,children,...rest}:ButtonProps) => {
  return (
    <button className={`class-with-${variant}`} {...rest}>{children}</button>
  )
}


// Omit takes and Object type and remove specified properties