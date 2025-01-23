import { Outlet, Navigate } from "react-router-dom"

const Loginservice = () => {
    const auth = localStorage.getItem("adminlogin")
    return auth ? <Outlet /> : <Navigate to={"/home"} />
}

export default Loginservice
