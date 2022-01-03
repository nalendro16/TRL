import { useCollection } from '../hooks/useCollection'
import Avatar from './Avatar'
import './OnlineUsers.css'

export default function OnlineUsers() {
  const { documents, error } = useCollection('users')

  return (
    <div className="user-list">
      <h2>Online Users</h2>
      {error && <div className="error">{error}</div>}
      {documents &&
        documents.map((user) => (
          <div key={user.id} className="user-list-item">
            {user.online && (
              <>
                <div className="dot"></div> <Avatar src={user.photoURL} />
                <span>{user.displayName.split(' ')[0]}</span>
              </>
            )}
          </div>
        ))}
    </div>
  )
}
