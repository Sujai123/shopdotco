import { Outlet } from "react-router-dom"
import Header from "../components/Header"
import AppNavBar from "../components/AppNavBar"
import Footer from "../components/Footer"
import Breadcrumbs from "../components/Breadcrumbs"

const BaseLayout = () => {
  return (
    <div>
      <Header />
      <AppNavBar />
      <Breadcrumbs />

      <Outlet />

      <Footer />
    </div>
  )
}

export default BaseLayout