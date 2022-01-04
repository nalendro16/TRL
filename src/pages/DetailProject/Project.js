import { useParams } from 'react-router-dom'
import { useDocuments } from '../../hooks/useDocuments'
import './Project.css'
import ProjectComment from './ProjectComment'
import ProjectSummary from './ProjectSummary'

export default function Project() {
  const { id } = useParams()
  const { documents, error } = useDocuments('projects', id)

  if (error) {
    return <div className="error">{error}</div>
  }
  if (!documents) {
    return <div className="loading"> Loading ... </div>
  }
  return (
    <div className="project-details">
      <ProjectSummary project={documents} />
      <ProjectComment project={documents} />
    </div>
  )
}
