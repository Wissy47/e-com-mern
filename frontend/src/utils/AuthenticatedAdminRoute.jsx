import { Navigate, Outlet } from "react-router"
import { useAuthStore } from "../store/authStore"
const AuthenticatedAdimRoute = () => {
   const {user} = useAuthStore()
  return (
    <div> { user.is_admin ?< Outlet/>: Navigate({ to: '/login' },) }</div>
  )
}

export default AuthenticatedAdimRoute