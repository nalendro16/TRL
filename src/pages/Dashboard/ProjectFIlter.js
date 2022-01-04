const filterList = [
  'all',
  'mine',
  'development',
  'design',
  'marketing',
  'sales',
]

export default function ProjectFIlter({ currentFilter, changeFilter }) {
  const handleClick = (newFilter) => {
    changeFilter(newFilter)
  }

  return (
    <div className="project-filter">
      <p>Filter by:</p>
      <nav>
        {filterList.map((filter) => (
          <button
            key={filter}
            onClick={() => handleClick(filter)}
            className={currentFilter === filter ? 'active' : ''}
          >
            {filter}
          </button>
        ))}
      </nav>
    </div>
  )
}
