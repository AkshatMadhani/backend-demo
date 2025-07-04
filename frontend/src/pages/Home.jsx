import { Link } from 'react-router-dom'

export default function Home() {
  const features = [
    { path: '/chatbot', title: 'Chatbot', desc: 'Ask any career-related question and get instant answers.' },
    { path: '/career-guidance', title: 'Career Guidance', desc: 'Receive personalised career advice based on your education & interests.' },
    { path: '/schemes', title: 'Govt Schemes', desc: 'Explore government scholarships and skill-development programs.' },
    { path: '/quiz', title: 'Career Quiz', desc: 'Take a quick quiz to find a field that suits you.' },
  ]

  return (
    <div>
      <h1>Rural Education & Career Guidance Portal</h1>
      <p>
        Empowering students from rural areas to discover learning paths, access opportunities, and
        build successful careers.
      </p>
      <div className="feature-grid">
        {features.map((f) => (
          <Link key={f.path} to={f.path} className="feature-card">
            <h3>{f.title}</h3>
            <p>{f.desc}</p>
          </Link>
        ))}
      </div>
    </div>
  )
}