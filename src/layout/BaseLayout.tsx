import { Outlet } from "react-router-dom"
import Header from "../components/Header"
import AppNavBar from "../components/AppNavBar"

const BaseLayout = () => {
  return (
    <div>
      <Header />
      <AppNavBar />

      <Outlet />
    </div>
  )
}

export default BaseLayout