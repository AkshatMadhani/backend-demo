import { useEffect, useState } from 'react'

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:8000'

export default function Quiz() {
  const [questions, setQuestions] = useState([])
  const [answers, setAnswers] = useState({})
  const [result, setResult] = useState(null)
  const [loading, setLoading] = useState(true)
  const [submitting, setSubmitting] = useState(false)
  const [error, setError] = useState(null)

  useEffect(() => {
    fetch(`${API_URL}/api/quiz`)
      .then((res) => res.json())
      .then((data) => {
        setQuestions(data.questions || [])
        setLoading(false)
      })
      .catch(() => {
        setError('Failed to load quiz')
        setLoading(false)
      })
  }, [])

  const handleChange = (qid, value) => {
    setAnswers((prev) => ({ ...prev, [qid]: value }))
  }

  const allAnswered = questions.length > 0 && questions.every((q) => answers[q.id])

  const submitQuiz = async () => {
    if (!allAnswered) return
    setSubmitting(true)
    const payload = {
      answers: Object.entries(answers).map(([id, answer]) => ({ question_id: Number(id), answer })),
    }
    try {
      const res = await fetch(`${API_URL}/api/quiz`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      })
      const data = await res.json()
      setResult(data)
    } catch (err) {
      setError('Failed to submit quiz')
    } finally {
      setSubmitting(false)
    }
  }

  if (loading) return <p>Loading quiz...</p>
  if (error) return <p style={{ color: 'red' }}>{error}</p>

  return (
    <div>
      <h2>Find Your Ideal Field</h2>
      {questions.map((q) => (
        <div key={q.id} className="quiz-question">
          <p>{q.question}</p>
          {q.options.map((opt) => (
            <label key={opt} style={{ display: 'block' }}>
              <input
                type="radio"
                name={`q-${q.id}`}
                value={opt}
                checked={answers[q.id] === opt}
                onChange={() => handleChange(q.id, opt)}
              />
              {opt}
            </label>
          ))}
        </div>
      ))}
      <button onClick={submitQuiz} disabled={!allAnswered || submitting}>
        {submitting ? 'Submitting...' : 'Submit'}
      </button>
      {result && (
        <div className="result">
          <h3>Recommended Field: {result.field}</h3>
          <p>{result.description}</p>
        </div>
      )}
    </div>
  )
}