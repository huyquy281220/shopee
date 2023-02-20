import { createSlice, createAsyncThunk, current } from "@reduxjs/toolkit";
import axios from "axios";

export const syncCart = createAsyncThunk("cart/sync", async ({ email, cart }) => {
    try {
        if (email) {
            const cartData = await axios.post(`${process.env.NEXT_PUBLIC_API}/cart`, { email, cart });
            return cartData.data.products;
        }
    } catch (error) {
        console.log(error);
    }
});

const initialState = {
    cart: [],
};

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCart: (state, action) => {
            const newItem = action.payload.item;
            const itemInCart = state.cart.find((item) => item._id === newItem._id);
            if (itemInCart) {
                if (action.payload.selected) {
                    itemInCart.selected = action.payload.selected;
                } else {
                    itemInCart.selected++;
                }
            } else {
                state.cart.push({ ...action.payload.item, selected: action.payload.selected });
            }
        },
        changeQuantityItem: (state, action) => {
            const product = action.payload.item;
            const item = state.cart.find((item) => item._id === product._id);
            item.selected = action.payload.selected;
        },
        incrementItem: (state, action) => {
            const item = state.cart.find((item) => item._id === action.payload._id);
            item.selected++;
        },
        decrementItem: (state, action) => {
            const item = state.cart.find((item) => item._id === action.payload._id);
            if (item.selected > 0 && item.selected !== 1) {
                item.selected--;
            } else {
                item.selected = 1;
            }
        },
        removeItem: (state, action) => {
            const restItem = state.cart.filter((item) => item._id !== action.payload);
            state.cart = restItem;
        },
        clearCart: () => initialState,
    },

    extraReducers: (builder) => {
        builder.addCase(syncCart.fulfilled, (state, action) => {
            if (action.payload?.length === 0) {
                state.cart = [];
            } else {
                state.cart = action.payload;
            }
        });
    },
});

export const cartReducer = cartSlice.reducer;
export const { addToCart, changeQuantityItem, incrementItem, decrementItem, removeItem, clearCart } = cartSlice.actions;
export const cartSelector = (state) => state.cart;
