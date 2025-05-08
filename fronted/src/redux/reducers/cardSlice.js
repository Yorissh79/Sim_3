import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axios from "axios";

export const getCardThunk = createAsyncThunk("/card/get", async () => {
    const response = await axios.get("http://localhost:3000/products");
    return response.data;
})

export const postCardThunk = createAsyncThunk("/card/post", async (data) => {
    await axios.post("http://localhost:3000/products", data);
    return data;
})

export const deleteCardThunk = createAsyncThunk("/card/delete", async (id) => {
    await axios.delete("http://localhost:3000/products/" + id);
    return id;
})

const  cardSlice = createSlice({
    name: "card",
    initialState: {},
    reducers: {},
    extraReducers: (builder) => {
        builder

            .addCase(getCardThunk.fulfilled, (state, action) => {
                state.loading = false;
                state.card = action.payload;
            })

            .addCase(postCardThunk.fulfilled, (state, action) => {
                state.loading = false;
                state.card.push(action.payload);
            })

            .addCase(deleteCardThunk.fulfilled, (state, action) => {
                state.loading = false;
                state.card = state.card.filter(item => item.id !== action.payload);
            })
    }
})

export default cardSlice.reducer;
