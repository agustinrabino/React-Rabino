import { useState } from "react"

export function useSize(sizes) {
    const [size, setSize] = useState(sizes[0])
    const handleClickSize = (size) => {
        setSize(size)
    }

    return{
        size,
        handleClickSize
    }}
