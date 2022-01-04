import ProjectList from '../../components/ProjectList.js'
import { useCollection } from '../../hooks/useCollection.js'
import { useState } from 'react'
import './Dashboard.css'
import ProjectFIlter from './ProjectFIlter.js'

export default function Dashboard() {
  const { documents, error } = useCollection('projects')
  const [currentFilter, setCurrentFilter] = useState('all')

  const changeFilter = (newFilter) => {
    setCurrentFilter(newFilter)
  }

  return (
    <div>
      <h2 className="page-title">Dashboard</h2>
      {error && <p>{error}</p>}
      {documents && (
        <ProjectFIlter
          currentFilter={currentFilter}
          changeFilter={changeFilter}
        />
      )}
      {documents && <ProjectList projects={documents} />}
    </div>
  )
}
