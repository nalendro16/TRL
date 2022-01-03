import ProjectList from '../../components/ProjectList.js'
import { useCollection } from '../../hooks/useCollection.js'
import './Dashboard.js'

export default function Dashboard() {
  const { documents, error } = useCollection('projects')

  return (
    <div>
      <h2 className="page-title">Dashboard</h2>
      {error && <p>{error}</p>}
      {documents && <ProjectList projects={documents} />}
    </div>
  )
}
