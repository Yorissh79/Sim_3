import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axios from "axios";

export const getBasketThunk = createAsyncThunk("/basket/get", async () => {
    const response = await axios.get("http://localhost:3000/basket");
    return response.data;
})

export const postBasketThunk = createAsyncThunk("/basket/post", async (data) => {
    await axios.post("http://localhost:3000/basket", data);
    return data;
})

export const deleteBasketThunk = createAsyncThunk("/basket/delete", async (id) => {
    await axios.delete("http://localhost:3000/basket/" + id);
    return id;
})

const  basketSlice = createSlice({
    name: "basket",
    initialState: {},
    reducers: {},
    extraReducers: (builder) => {
        builder

            .addCase(getBasketThunk.fulfilled, (state, action) => {
                state.loading = false;
                state.data = action.payload;
            })

            .addCase(postBasketThunk.fulfilled, (state, action) => {
                state.loading = false;
                state.data.push(action.payload);
            })

            .addCase(deleteBasketThunk.fulfilled, (state, action) => {
                state.loading = false;
                state.data = state.data.filter(item => item.id != action.payload);
                console.log(state.data)
            })
    }
})

export default basketSlice.reducer;
