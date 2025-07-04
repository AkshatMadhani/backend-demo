import { useEffect, useState } from 'react'

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:8000'

export default function GovtSchemes() {
  const [schemes, setSchemes] = useState([])

  useEffect(() => {
    fetch(`${API_URL}/api/government-schemes`)
      .then((res) => res.json())
      .then((data) => setSchemes(data.schemes || []))
      .catch(() => alert('Failed to fetch schemes'))
  }, [])

  return (
    <div>
      <h2>Government Schemes</h2>
      <ul>
        {schemes.map((s, idx) => (
          <li key={idx}>
            <h3>{s.name}</h3>
            <p>{s.benefits}</p>
            <p>Eligibility: {s.eligibility}</p>
            <a href={s.link} target="_blank" rel="noopener">Official Site</a>
          </li>
        ))}
      </ul>
    </div>
  )
}