import { Outlet, useLocation } from 'react-router-dom'
import Navbar from '../../components/Navbar'
import { SwitchTransition,CSSTransition } from 'react-transition-group'
import "./style.css"
export default function Layout() {
  const location = useLocation();
  console.log(location)
  return (
    <div className="max-w-screen-md mx-auto ">
      <Navbar />
      {/* dynamic router's contents */}
      <SwitchTransition>
        <CSSTransition
          timeout={200}
          classNames='fade'
          key={location.pathname}
        >
        <Outlet />
        </CSSTransition>
      </SwitchTransition>
      
    </div>
  )
}
