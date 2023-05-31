import React from 'react'
import { useState, useEffect } from 'react'

const useScreenSize = () => {
    const [width, setWidth] = useState(-1)
    const [height, setHeight] = useState(-1)

    const listener = () =>{
        setWidth(window.innerWidth)
        setHeight(window.innerHeight)
    }

    useEffect(()=>{
        setWidth(window.innerWidth)
        setHeight(window.innerHeight)
        window.addEventListener("resize", listener)
        return ()=>{
            window.removeEventListener("resize", listener)
        }

    }, [])
  return {
    width,
    height
  }
}

export default useScreenSize