import { Outlet } from "react-router-dom"
import Header from "../components/Header"

const BaseLayout = () => {
  return (
    <div>
      <Header />

      <Outlet />
    </div>
  )
}

export default BaseLayout