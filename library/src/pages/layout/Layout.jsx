import { Outlet } from 'react-router-dom'
import Navbar from '../../components/Navbar'

export default function Layout() {
  return (
    <div className="max-w-screen-md mx-auto ">
      <Navbar />
      {/* dynamic router's contents */}
      <Outlet />
    </div>
  )
}
