import './Navbar.css'
import Temple from '../assets/temple.svg'
import { useLogout } from '../hooks/useLogout'
import { Link } from 'react-router-dom'

export default function Navbar() {
  const { logout, isPending } = useLogout()

  return (
    <div className="navbar">
      <ul>
        <li className="logo">
          <img src={Temple} alt="temple" />
          <span>ReactLab</span>
        </li>
        <li>
          <Link to="/login">Login</Link>
        </li>
        <li>
          <Link to="/signup">Sign Up</Link>
        </li>
        <li>
          {!isPending && (
            <button className="btn" onClick={logout}>
              Logout
            </button>
          )}
          {isPending && (
            <button className="btn" disabled>
              Loading...
            </button>
          )}
        </li>
      </ul>
    </div>
  )
}
