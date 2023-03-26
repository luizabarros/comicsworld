import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { IComic } from "../../components/Card/Card"

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

            console.log(state.cartItems)
            if (itemIndex >= 0) {
                state.cartItems[itemIndex].cartQuantity!++
            } else {
                const tempProduct = {...action.payload, cartQuantity: 1}
                state.cartItems.push(tempProduct)
            }

        }
    }
})

export const { addToCart } = itemsSlice.actions
export default itemsSlice.reducer