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
    } catch (err) {
      set({ isLoading: false, error: err.response.data.message || "Error signing up"});
      throw err.response.data.message;
    }
  },
  login: async (email, password) => {
    set({ user: null, isLoading: true, error: null, message: null });
    try {
      const response = await axios.post(`${UserApi}login`, { email, password });
      const {user} = response.data.user;
      set({ user, isLoading: false, error: null });
      return user;
    } catch (err) {
      set({
        user: null,
        isLoading: false,
        error: err.response.data.message || "Error logging in",
      });
      throw err.response.data.message;
    }
  },//login function

  logout: async()=>{
    set({isLoading: false, error: null });
    try {
      const response = await axios.post(`${UserApi}logout`);
      set({ user: null, isLoading: false, error: null });
    } catch (err) {
      set({ isLoading: false, error: err.response.data.message || "Error logging out"});
      throw err.response.data.message;
    }
  }, // logout function 

  is_authUser: async()=>{
    set({isLoading: true, error: null });
    try {
      const response = await axios.get(`${UserApi}auth-user`);
      set({ user: response.data.user, isLoading: false, error: null });
      return response.data.user;
    } catch (err) {
        set({ isLoading: false, error: err.response.data.message || "Error checking auth user"});
        throw err.response.data.message;
    }
  }
}));

export { useAuthStore};