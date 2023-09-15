import { createContext, useContext, useState, useEffect } from "react";
import { toast } from 'react-toastify';
import { getFirestore, getDocs, collection } from "firebase/firestore"

const ShoppingCartContext = createContext()

export function useShoppingCart() {
    return useContext(ShoppingCartContext)
}

export function ShoppingCartProvider({children}) {

    const [storeItems, setStoreItems] = useState([])
    useEffect(()=>{
        const db = getFirestore();
        const ItemsFirestore = collection(db, "Items");
        getDocs(ItemsFirestore).then(result => {
            setStoreItems(result.docs.map((doc)=>({id: doc.id, ...doc.data()})))
        })
    }, [])

    const [cartItems, setCartItems] = useState([])

    const cartQuantity = cartItems.reduce(
        (quantity, item) => item.quantity + quantity, 0
    )

    const totalOrder = cartItems.reduce((total, cartItem) => {
            const item = storeItems.find(i => i.id === cartItem.id)
            return( total + (item?.price || 0) * cartItem.quantity )
        },0
    )

    function clearCart() {
        setCartItems([])
    }

    function addCartQuantity(id, number, size, stock) {
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
            if (currItems.find(item => (item.id ===id && item.size === size)) == null){
                return(
                    [...currItems, {id, size, quantity:number, stock}]
                )
            } else {
                return(
                    currItems.map(item => {
                        if (item.id ===id && item.size === size) {
                            if (item.quantity + number <= stock) {
                                return(
                                    {...item, quantity: item.quantity + number}
                                )
                            } else {
                                return(
                                    {...item, quantity: stock}
                                )
                            }

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
                currItems.filter(item => (item.id !==id || item.size !== size))
            )
        })
    }

    function increaseQuantity(id, size) {
        setCartItems(currItems => {
            if (currItems.find(item => (item.id === id && item.size === size))){
                return(
                    currItems.map(item => {
                        if (item.id ===id && item.size === size) {
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
            if (currItems.find(item => (item.id === id && item.size === size))!==undefined){
                return(
                    currItems.map(item => {
                        if (item.id === id && item.size === size) {
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
        storeItems,
        clearCart,
        cartQuantity,
        totalOrder,
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