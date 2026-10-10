import { createSlice } from "@reduxjs/toolkit"

interface InitialStateTy {
    loading : boolean,
    cartList : {}[],
    cartLength: Number
}




const initialState: InitialStateTy  = {
    loading : false,
    cartList : [],
    cartLength : 0
}


const myCartSlice = createSlice({
    name : "myCartSlice",
    initialState,
    reducers : {
        addItemList : () => {},
        addToCart : (state, action) => {
            // state.cartList = [...state.cartList, {...action.payload}] // this will create a dublicate


            // update the list
            const item = action.payload;
            const alreadyExists = state.cartList.some((cartItem:any) => cartItem.id === item.id)

            if(!alreadyExists){
                state.cartList = [...state.cartList, {...item}]
            }

            state.cartLength = state.cartList.length;

            // console.log(state, "This represent state")
            // console.log(action, "This represent action")
        }
    }
})

export default myCartSlice.reducer
export const {addItemList, addToCart}:any = myCartSlice.actions


