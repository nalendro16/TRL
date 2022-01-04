import { useState } from 'react'
import { timestamp } from '../../firebase/config'
import { useAuthContext } from '../../hooks/useAuthContext'
import { useFirestore } from '../../hooks/useFirestore'

export default function ProjectComment({ project }) {
  const [newComment, setNewComment] = useState('')
  const { user } = useAuthContext()
  const { updateDocument, response } = useFirestore('projects')
  const handleSubmit = async (e) => {
    e.preventDefault()

    const commentToAdd = {
      displayName: user.displayName,
      photoURL: user.photoURL,
      newComment,
      createdAt: timestamp.fromDate(new Date()),
      id: Math.random(),
    }

    await updateDocument(project.id, {
      comments: [...project.comments, commentToAdd],
    })

    if (!response.success) {
      setNewComment('')
    }
  }

  return (
    <div className="project-comments">
      <h4>Project Comments</h4>
      <form className="add-comment" onSubmit={handleSubmit}>
        <label>
          <span>Add New Comment:</span>
          <textarea
            required
            onChange={(e) => {
              setNewComment(e.target.value)
            }}
            value={newComment}
          ></textarea>
        </label>
        <button className="btn">Add Comment</button>
      </form>
    </div>
  )
}
