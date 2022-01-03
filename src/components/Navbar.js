import './Navbar.css'
import Temple from '../assets/temple.svg'
import { useLogout } from '../hooks/useLogout'
import { NavLink } from 'react-router-dom'
import { useAuthContext } from '../hooks/useAuthContext'

export default function Navbar() {
  const { logout, isPending } = useLogout()

  const { user } = useAuthContext()

  return (
    <div className="navbar">
      <ul>
        <li className="logo">
          <img src={Temple} alt="temple" />
          <span>ReactLab</span>
        </li>

        {!user && (
          <>
            <li>
              <NavLink to="/login">Login</NavLink>
            </li>
            <li>
              <NavLink to="/signup">Sign Up</NavLink>
            </li>
          </>
        )}

        {user && (
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
        )}
      </ul>
    </div>
  )
}
