import { useState } from 'react'

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:8000'

export default function CareerGuidance() {
  const [form, setForm] = useState({
    age: '',
    education_level: '',
    subjects: '',
    career_goal: '',
  })
  const [result, setResult] = useState('')

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const payload = {
      ...form,
      age: parseInt(form.age || 0),
      subjects: form.subjects.split(',').map((s) => s.trim()),
      rural_background: true,
    }
    try {
      const res = await fetch(`${API_URL}/api/career-guidance`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      })
      const data = await res.json()
      setResult(data.guidance)
    } catch (err) {
      alert('Error fetching guidance')
    }
  }

  return (
    <div>
      <h2>Career Guidance</h2>
      <form onSubmit={handleSubmit} className="form">
        <label>
          Age:
          <input name="age" value={form.age} onChange={handleChange} required />
        </label>
        <label>
          Education Level:
          <input name="education_level" value={form.education_level} onChange={handleChange} required />
        </label>
        <label>
          Favourite Subjects (comma separated):
          <input name="subjects" value={form.subjects} onChange={handleChange} />
        </label>
        <label>
          Career Goal:
          <input name="career_goal" value={form.career_goal} onChange={handleChange} />
        </label>
        <button type="submit">Get Guidance</button>
      </form>
      {result && (
        <div className="result">
          <h3>Your Guidance</h3>
          <p dangerouslySetInnerHTML={{ __html: result }} />
        </div>
      )}
    </div>
  )
}