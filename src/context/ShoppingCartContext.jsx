import { createContext, useContext, useState } from "react";



const ShoppingCartContext = createContext()

export function useShoppingCart() {
    return useContext(ShoppingCartContext)
}

export function ShoppingCartProvider({children}) {
    const [cartItems, setCartItems] = useState([])

    const cartQuantity = cartItems.reduce(
        (quantity, item) => item.quantity + quantity, 0
        )

    function addCartQuantity(id, number, size) {
        setCartItems(currItems => {
            if (currItems.find(item => (item.id ===id && item.size == size)) == null){
                return(
                    [...currItems, {id, size, quantity:number}]
                )
            } else {
                return(
                    currItems.map(item => {
                        if (item.id ===id && item.size == size) {
                            return(
                                {...item, quantity: item.quantity + number}
                            )
                        } else {
                            return item
                        }
                    })
                )
            }
        })
    }

    function removeFromCart(id, size) {
        setCartItems(currItems => {
            return(
                currItems.filter(item => (item.id !==id || item.size != size))
            )
        })
    }

    function increaseQuantity(id, size) {
        setCartItems(currItems => {
            if (currItems.find(item => (item.id === id && item.size == size))){
                return(
                    currItems.map(item => {
                        if (item.id ===id && item.size == size) {
                            return(
                                {...item, quantity: item.quantity + 1}
                            )
                        } else {
                            return item
                        }
                    })
                )
            }
        })
    }

    function decreaseQuantity(id, size) {
        setCartItems(currItems => {
            if (currItems.find(item => (item.id === id && item.size == size))?.quantity ===1){
                return(
                    currItems.filter (item =>(item.id !==id || item.size != size))
                )
            } else {
                return(
                    currItems.map(item => {
                        if (item.id === id && item.size == size) {
                            return(
                                {...item, quantity: item.quantity -1}
                            )
                        } else {
                            return item
                        }
                    })
                )
            }
        })
    }
    
    
    const AllObjects = {
        cartItems,
        setCartItems,
        cartQuantity,
        addCartQuantity,
        removeFromCart,
        increaseQuantity,
        decreaseQuantity
    }


    return(
        <ShoppingCartContext.Provider value={AllObjects}>
            {children}
        </ShoppingCartContext.Provider>
    )
}