import { Outlet } from "react-router-dom"
import Header from "../components/Header"
import AppNavBar from "../components/AppNavBar"
import Footer from "../components/Footer"

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