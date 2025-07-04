import { useEffect, useState } from 'react'

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:8000'

export default function GovtSchemes() {
  const [schemes, setSchemes] = useState([])
  const [loading, setLoading] = useState(true)
  const [query, setQuery] = useState('')
  const [error, setError] = useState(null)

  useEffect(() => {
    fetch(`${API_URL}/api/government-schemes`)
      .then((res) => res.json())
      .then((data) => {
        setSchemes(data.schemes || [])
        setLoading(false)
      })
      .catch(() => {
        setError('Failed to fetch schemes')
        setLoading(false)
      })
  }, [])

  const filtered = schemes.filter((s) => s.name.toLowerCase().includes(query.toLowerCase()))

  return (
    <div>
      <h2>Government Schemes</h2>
      <input
        placeholder="Search schemes..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        style={{ marginBottom: '1rem', padding: '0.5rem', width: '100%', maxWidth: 400 }}
      />
      {loading && <p>Loading schemes...</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <ul>
        {filtered.map((s, idx) => (
          <li key={idx} className="scheme-item">
            <h3>{s.name}</h3>
            <p>{s.benefits}</p>
            <p>
              <strong>Eligibility:</strong> {s.eligibility}
            </p>
            <a href={s.link} target="_blank" rel="noopener">
              Official Site
            </a>
          </li>
        ))}
        {!loading && filtered.length === 0 && <p>No schemes found.</p>}
      </ul>
    </div>
  )
}