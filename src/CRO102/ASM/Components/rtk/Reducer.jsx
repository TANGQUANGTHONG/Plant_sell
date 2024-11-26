import { createSlice } from "@reduxjs/toolkit";
import { login, register, fetchProducts, fetchUserProfile, editUserProfile } from "./API";

const initialState = {
    user: null,
    cart: [],
    products: [],
    loading: false,
    status: 'idle',
    error: null,
};

const appSlice = createSlice({
    name: "app",
    initialState,
    reducers: {
        addItemToCart: (state, action) => {
            const { product, quantity, selectedSize, price } = action.payload;

            if (!product || !product._id || !product.name || price === undefined || quantity <= 0 || !selectedSize) {
                console.error('Thông tin sản phẩm không hợp lệ', action.payload);
                return;
            }

            const existingItemIndex = state.cart.findIndex(item => item.product._id === product._id && item.selectedSize === selectedSize);

            if (existingItemIndex >= 0) {
                state.cart[existingItemIndex].quantity += quantity;
            } else {
                state.cart.push({
                    product,
                    quantity,
                    selectedSize,
                    price
                });
            }
        },
        changeQuantity: (state, action) => {
            const { productId, quantity, selectedSize } = action.payload;

            const item = state.cart.find(item => item.product._id === productId && item.selectedSize === selectedSize);

            if (item) {
                item.quantity = quantity;
            }
        },
        logout: (state) => {
            state.user = null;
        },
        clearCart: (state) => {
            state.cart = [];
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchUserProfile.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchUserProfile.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.user = action.payload;
            })
            .addCase(fetchUserProfile.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.payload;
            })
            .addCase(editUserProfile.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(editUserProfile.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.user = action.payload; // Cập nhật thông tin người dùng
            })
            .addCase(editUserProfile.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.payload;
            });
    },
});

export const { addItemToCart, logout, clearCart, changeQuantity } = appSlice.actions;
export default appSlice.reducer;
