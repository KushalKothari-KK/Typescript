import React, { useEffect,useRef } from 'react'

export const DomRef = () => {
    // if never null
    const inputRef = useRef<HTMLInputElement>(null!)

//    if null =>
    // const inputRef = useRef<HTMLInputElement>(null)


    useEffect(()=>{
        inputRef.current.focus()
    },[])
  return (
    <div>
        <input type="text" ref={inputRef} />
    </div>
  )
}
