import { useState } from "react"

export function useQuantity() {
    const [quantity, setQuantity] = useState(0)
    const handleClickDecrement = () => setQuantity(quantity - 1)
    const handleClickIncrement = () => setQuantity(quantity + 1)

    return{
        quantity,
        handleClickDecrement,
        handleClickIncrement
    }}
