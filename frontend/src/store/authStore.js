import {create} from "zustand";
import axios from "axios";

axios.defaults.withCredentials = true

const UserApi = "http://localhost:9000/v1/api/user/";

const useAuthStore = create((set) => ({
  // The initial state of the store
  user: null,
  isLoading: false,
  error: null,
  message: null,
  signup: async (name, email, password) => {
    set({ user: null, isLoading: true, error: null, message: null });
    try {
      const response = await axios.post(`${UserApi}signup`, {
        name,
        email,
        password,
      });
      set({
        user: response.data,
        isLoading: false,
        error: null,
        message: null,
      });
    } catch (error) {
      console.log(error);
      set({ isLoading: false, error: error.message });
    }
  },
  login: async (email, password) => {
    set({ user: null, isLoading: true, error: null, message: null });
    try {
      const response = await axios.post(`${UserApi}login`, { email, password });
      const {user} = response.data;
      set({ user, isLoading: false, error: null });
      return user;
    } catch (err) {
      set({
        user: null,
        isLoading: false,
        error: err.response.data.message,
      });
      throw err.response.data.message;
    }
  },// Add the login function
}));

export { useAuthStore};