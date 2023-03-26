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

        }
    }
})

export const { addToCart } = itemsSlice.actions
export default itemsSlice.reducer