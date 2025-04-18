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
    },//addproduct

    getProducts: async () =>{
      set({isLoading: true, error: null, message: null})
      try {
        const response = await axios.get(ApiUrl);
        const products = response.data;
        set({products, isLoading: false, message:"Product"})
        return products;
        } catch (err) {
          const error = err.response.data.message || "Error getting products"
          set({isLoading: false, error, message: null})
          throw error;
        }
    },//getproducts
    getProduct: async (id) => {
      set({isLoading: true, error: null, message: null})
      try {
        const response = await axios.get(`${ApiUrl}${id}`);
        const {product} = response.data;
        set({product, isLoading: false, message: null})
        return product;
        } catch (err) {
          const error = err.response.data.message || "Error getting product"
          set({isLoading: false, error, message: null})
          throw error;
          }
    },//getproduct
    updateProduct: async (id, productData) => {
      set({isLoading: true, error: null, message: null})
      try {
        const response = await axios.put(`${ApiUrl}${id}`, productData, { headers: {"Content-Type": "multipart/form-data"}});
          const {product, message} = response.data;
          set({product, isLoading: false, message})
          return {product, message};
        } catch (err) {
            const error = err.response.data.message || "Error updating product"
            set({isLoading: false, error, message: null})
            throw error;
        }
    },//updateproduct
    deleteProduct: async (id) => {
      set({isLoading: true, error: null, message: null})
      try {
        const response = await axios.delete(`${ApiUrl}${id}`);
        const {message} = response.data;
        set({isLoading: false, message})
        return message;
        } catch (err) {
          const error = err.response.data.message || "Error deleting product"
          set({isLoading: false, error, message: null})
          throw error;
        }
    },//deleteproduct
}))

export{useProductStore};