import { Outlet } from "react-router-dom"
import Header from "../components/layout/Header"
import AppNavBar from "../components/layout/AppNavBar"
import Footer from "../components/layout/Footer"

const BaseLayout = () => {
  return (
    <div>
      <Header />
      <AppNavBar />

      <Outlet />

      <Footer />
    </div>
  )
}

export default BaseLayout