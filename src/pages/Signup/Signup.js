import { useState } from 'react'
import './Signup.css'
import { useSignup } from '../../hooks/useSignup'

export default function Signup() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [name, setName] = useState('')
  const [thumbnail, setThumbnail] = useState(null)

  const [thumbnailError, setThumbnailError] = useState(null)

  const { signup, error, isPending } = useSignup()

  const handleSubmit = (e) => {
    e.preventDefault()
    signup(email, password, name, thumbnail)
  }

  const handleFileChange = (e) => {
    setThumbnail(null)
    let selected = e.target.files[0]

    if (!selected) {
      setThumbnailError('Please select a file')
      return
    }
    if (!selected.type.includes('image')) {
      setThumbnailError('Selected file must be Image')
      return
    }
    if (selected.size > 100000) {
      setThumbnailError('Image must be less than 100kb')
      return
    }

    setThumbnailError(null)
    setThumbnail(selected)
  }

  return (
    <div>
      <form className="auth-form" onSubmit={handleSubmit}>
        <h2>Sign Up</h2>
        <label>
          <span>Email:</span>
          <input
            type="email"
            required
            onChange={(e) => {
              setEmail(e.target.value)
            }}
            value={email}
          />
        </label>
        <label>
          <span>Password:</span>
          <input
            type="password"
            required
            onChange={(e) => {
              setPassword(e.target.value)
            }}
            value={password}
          />
        </label>
        <label>
          <span>Name:</span>
          <input
            type="text"
            required
            onChange={(e) => {
              setName(e.target.value)
            }}
            value={name}
          />
        </label>
        <label>
          <span>Thumbnail:</span>
          <input type="file" required onChange={handleFileChange} />
        </label>
        {thumbnailError && <div className="error">{thumbnailError}</div>}
        {isPending && (
          <button className="btn" disabled>
            Loading...
          </button>
        )}
        {!isPending && <button className="btn">Sign Up</button>}
        {error && <div className="error">{error}</div>}
      </form>
    </div>
  )
}
