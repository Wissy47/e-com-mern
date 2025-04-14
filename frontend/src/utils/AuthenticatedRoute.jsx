import { Navigate, Outlet } from "react-router"
import { useAuthStore } from "../store/authStore"
const AuthenticatedRoute = () => {
   const {user} = useAuthStore()
  return (
    <div> { user ?< Outlet/>: Navigate({ to: '/login' },) }</div>
  )
}

export default AuthenticatedRoute