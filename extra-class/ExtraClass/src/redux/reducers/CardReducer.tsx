import { createSlice } from "@reduxjs/toolkit"

interface InitialStateTy {
    loading : boolean,
    cartList : {}[]
    cartLength: Number
}

const initialState: InitialStateTy  = {
    loading : false,
    cartList : [],
    cartLength : 0
}


const myCartSlice = createSlice({
    name : "myProfileSlice",
    initialState,
    reducers : {
        addItemList : () => {},
        addToCart : (state, action) => {
            state.cartList = [...state.cartList, {...action.payload}]
            // console.log(state, "This represent state")
            // console.log(action, "This represent action")
        }
    }
})

export default myCartSlice.reducer
export const {addItemList, addToCart}:any = myCartSlice.actions


