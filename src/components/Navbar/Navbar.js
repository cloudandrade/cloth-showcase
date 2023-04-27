import { NavLink } from 'react-router-dom'
import { ReactComponent as Brand } from '../../assets/icons/logo.svg'
import './navbar.css'

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="container">
        <div className="logo">
          <Brand />
        </div>

      </div >
      <div className="nav-elements">
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/produtos">Produtos</NavLink>
          </li>
          <li>
            <NavLink to="/pedidos">Pedidos</NavLink>
          </li>
          <li>
            <NavLink to="/sobre">Sobre</NavLink>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar