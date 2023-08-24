import { createContext, useContext, useState } from "react";
import { toast } from 'react-toastify';

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
        toast.success('Item added to cart', {
            position: "top-center",
            autoClose: 200,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: false,
            progress: undefined,
            theme: "colored",
            });
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
            if (currItems.find(item => (item.id === id && item.size == size))!==undefined){
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