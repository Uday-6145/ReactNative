import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"

const initialState = {
    itemList: [],
    loding: false,
    myName : ""
}

const fetchProductList = createAsyncThunk("fetchProductList", async (_, { getState, rejectWithValue, fulfillWithValue }) => {

    try {
        const data = await fetch(`https://jsonplaceholder.typicode.com/todos`)
        const res = await data.json()
        fulfillWithValue(res)
    }
    catch (error : any) {
        rejectWithValue(error.message)
    }

})


const HomeSlice = createSlice({
    name: "homeSlice",
    initialState: initialState,
    reducers: {
        addItemList: (state, action) => {
            // console.log(state, "------------>>>>>>>>>>>>> this is state by clicking button")
            // console.log(action.payload, "--------------->>>>>>>>>>>. this is payload by clicking button")
            state.myName = action.payload
        }
    },
    extraReducers: (builder) => {
        builder
          .addCase(fetchProductList.pending, (state : any, action : any) => {
            state.loading = true
            console.log(state)

          })
          .addCase(fetchProductList.fulfilled, (state:any, action:any)=> {
            state.loading = false
            console.log(state)
          })
          .addCase(fetchProductList.rejected, (state:any, action:any)=> {
            state.loading = true
            console.log(state)
          })
    }

})

export const { addItemList }:any = HomeSlice.actions

export default HomeSlice.reducer