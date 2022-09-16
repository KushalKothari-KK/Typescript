type RandomNumberType = {
    value:number
}
type PostiveNumber = RandomNumberType & {
    isPostive:boolean
    isNegative?:never
    isZero?:never

}
type NegativeNumber = RandomNumberType & {
    isNegative:boolean
    isPostive?:never
    isZero?:never
}

type Zero = RandomNumberType & {
    isZero:boolean
    isNegative?:never
    isPostive?:never
}

type RandomNumberProps = PostiveNumber | NegativeNumber | Zero


export const RandomNumber = ({
    value,
    isPostive,
    isNegative,
    isZero,
}:RandomNumberProps) => {
  return (
    <div>
        {value} {isPostive && 'postive'} {isNegative && 'negative'}
        {isZero && 'zero'}
    </div>
  )
}
