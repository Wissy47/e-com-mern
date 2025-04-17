import { create } from "zustand";
import axios from "axios";

axios.defaults.withCredentials = true;

const ApiUrl = "http://localhost:9000/v1/api/products/";

const useProductStore = create((set)=>({
    products: [],
    product:null,
    isLoading: false,
    error: null,
    message: null,
    addProduct: async (productData) => {
        set({isLoading: true, error: null, message: null})
        try {
            const response = await axios.post( ApiUrl, productData, { headers: {"Content-Type": "multipart/form-data"}});
            console.log(response);
            const{product, message} = response.data;
            set({ product, isLoading: false, message})
            return { product, message };
        } catch (err) {
            const error = err.response.data.message || "Error adding product"
            set({isLoading: false, error, message: null})
            throw error;
        }
    }
}))

export{useProductStore};