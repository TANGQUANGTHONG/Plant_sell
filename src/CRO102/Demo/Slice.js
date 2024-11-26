import { createSlice } from '@reduxjs/toolkit';
import { View } from 'react-native-reanimated/lib/typescript/Animated';

const initialState = {
    cart: [],
};

export const cartSlice = createSlice({
    name: 'cart',
    initialState: initialState,
    reducers: {
        changeItem: (state, action) => {
            const index = state.cart.findIndex(item => item.id === action.payload.id);
            if (index === -1) {
                state.cart.push(action.payload);
            } else {
                state.cart[index].quantity = action.payload.quantity;
            }
        },
        removeItem: (state, action) => {
            state.cart = state.cart.filter(item => item.id !== action.payload);
        },
    },
    
});

export const { changeItem, removeItem } = cartSlice.actions;
export default cartSlice.reducer;
