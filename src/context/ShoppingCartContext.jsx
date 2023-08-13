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
    
    function getItemQuantity(id) {
        return(
            cartItems.find(item => item.id === id) ?.quantity || 0
        )
    }

    function addCartQuantity(id, number) {
        setCartItems(currItems => {
            if (currItems.find(item => item.id === id) == null){
                return(
                    [...currItems, {id, quantity:number}]
                )
            } else {
                return(
                    currItems.map(item => {
                        if (item.id ===id) {
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

    function removeFromCart(id) {
        setCartItems(currItems => {
            return(
                currItems.filter(item => item.id !== id)
            )
        })
    }

    function increaseQuantity(id) {
        setCartItems(currItems => {
            if (currItems.find(item => item.id === id) == null){
                return(
                    [...currItems, {id, quantity:1}]
                )
            } else {
                return(
                    currItems.map(item => {
                        if (item.id ===id) {
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

    function decreaseQuantity(id) {
        setCartItems(currItems => {
            if (currItems.find(item => item.id === id)?.quantity ===1){
                return(
                    currItems.filter (item =>item.id !==id)
                )
            } else {
                return(
                    currItems.map(item => {
                        if (item.id ===id) {
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
        getItemQuantity,
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