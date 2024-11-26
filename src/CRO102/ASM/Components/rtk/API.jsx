import { createAsyncThunk } from '@reduxjs/toolkit'
import AxiosHelper from '../helpers/AxiosHelper'

export const login = createAsyncThunk(
    "users/login",
    async (data, { rejectWithValue }) => {
        try {
            const response = await AxiosHelper()
                .post("/users/login", data);
            console.log(response);
            if (response.status == true) {
                return response.user;
            }
        } catch (error) {
            console.log(error);
            return rejectWithValue(error);
        }
    }
);

export const register = createAsyncThunk(
    "users/register",
    async (data, { rejectWithValue }) => {
        try {
            const response = await AxiosHelper()
                .post("/users/register", data);
            console.log(response);
            if (response.status == true) {
                return response.data;
            }
        } catch (error) {
            console.log(error);
            return rejectWithValue(error);
        }
    }
);

// lấy tất cả product nè 
export const fetchProducts = createAsyncThunk(
    'products/fetchProducts',
    async (_, { rejectWithValue }) => {
        try {
            const response = await AxiosHelper()
                .get("/product/get_all_products");
            return response;
        } catch (error) {
            return rejectWithValue(error);
        }
    }
);


// Thunk để lấy thông tin người dùng
export const fetchUserProfile = createAsyncThunk(
    'user/fetchUserProfile',
    async (_, { rejectWithValue }) => {
        try {
            const response = await AxiosHelper().get('/users/profile');
            return response.data; // Cập nhật thông tin người dùng từ API
        } catch (error) {
            return rejectWithValue(error.response.data);
        }
    }
);

export const editUserProfile = createAsyncThunk(
    'user/editUserProfile',
    async (userProfile, { rejectWithValue }) => {
        try {
            const response = await AxiosHelper().put('/users/edit_profile', userProfile);
            return response.data; // Cập nhật thông tin người dùng từ API
        } catch (error) {
            return rejectWithValue(error.response.data);
        }
    }
);



