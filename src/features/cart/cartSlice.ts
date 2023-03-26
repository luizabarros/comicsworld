import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { IComic } from "../../components/Card/Card"
import { toast } from "react-toastify"

interface CartState {
    cartItems: IComic[],
    cartTotalQuantity: number, 
    cartTotalAmount: number 
}

const initialState: CartState = {
    cartItems: [],
    cartTotalQuantity: 0,
    cartTotalAmount: 0
}

const itemsSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCart(state, action: PayloadAction<IComic>) {
            const itemIndex = state.cartItems.findIndex(item => item.id === action.payload.id)

            if (itemIndex >= 0) {
                state.cartItems[itemIndex].cartQuantity!++

                toast.info(`Aumentou a quantidade do ${action.payload.title}!`, {
                    position: "bottom-left"
                })
            } else {
                const tempProduct = {...action.payload, cartQuantity: 1}
                state.cartItems.push(tempProduct)

                toast.success(`${action.payload.title} adicionado ao carrinho!`, {
                    position: "bottom-left"
                })
            }

        },
        removeFromCart(state, action: PayloadAction<IComic>) {
            const nextCartItems = state.cartItems.filter(item => item.id !== action.payload.id)
            state.cartItems = nextCartItems
        },
        getTotal(state) {
            let { total, quantity } = state.cartItems.reduce((cartTotal, cartItem, index) => {
                const { prices, cartQuantity } = cartItem
                const itemTotal = prices[0].price * cartQuantity!

                cartTotal.total += itemTotal
                cartTotal.quantity += cartQuantity!

                return cartTotal 
            }, {
                total: 0,
                quantity: 0
            })

            state.cartTotalQuantity = quantity
            state.cartTotalAmount = total
        },
        clearCart(state) {
            state.cartItems = []
            toast.success("Itens removidos!", {
                position: "bottom-left"
            })
        }
    }
})

export const { 
    addToCart, 
    removeFromCart,
    getTotal, 
    clearCart } = itemsSlice.actions
export default itemsSlice.reducer