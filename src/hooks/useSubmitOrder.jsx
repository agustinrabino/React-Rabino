import { useState } from "react"
import { addDoc, collection, getFirestore} from "firebase/firestore"
import { toast } from "react-toastify"
import { useShoppingCart } from "../context/ShoppingCartContext.jsx"


export function useSubmitOrder() {
        const {cartItems, clearCart} = useShoppingCart()
        const [formValues, setFormValues] = useState({
            name: "",
            lastname: "",
            phone: "",
            email: ""
        })      
        const handleChange = (e) => {
            setFormValues(prev => ({
                ...prev,
                [e.target.name]:e.target.value
            }))
        }
        const onSubmitOrder = (totalOrder) => {
            const db = getFirestore()
            const orderCollection = collection(db, "Orders");
            const order = {
                buyer: formValues, 
                items: cartItems,
                total: totalOrder
            }
            addDoc(orderCollection, order).then(({id}) => {
                    if (id) {
                        toast.success(`Your order ${id} has been submitted`, {
                            position: "top-center",
                            autoClose: 200,
                            hideProgressBar: true,
                            closeOnClick: true,
                            pauseOnHover: false,
                            draggable: false,
                            progress: undefined,
                            theme: "colored",
                        })
                    }
                }
            )

            setFormValues({
                name: "",
                lastname: "",
                phone: "",
                email: ""
            })
            clearCart()
        }

    return{
        formValues,
        handleChange,
        onSubmitOrder,
    }
}
