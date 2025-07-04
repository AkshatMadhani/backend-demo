import { useState } from 'react'

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:8000'

export default function Chatbot() {
  const [messages, setMessages] = useState([])
  const [input, setInput] = useState('')
  const sendMessage = async () => {
    if (!input.trim()) return
    const userMsg = { role: 'user', content: input }
    setMessages((prev) => [...prev, userMsg])
    setInput('')
    try {
      const res = await fetch(`${API_URL}/api/chat`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: input }),
      })
      const data = await res.json()
      const botMsg = { role: 'bot', content: data.reply }
      setMessages((prev) => [...prev, botMsg])
    } catch (err) {
      alert('Error connecting to chatbot API')
    }
  }

  return (
    <div>
      <h2>Chat with our Career Bot</h2>
      <div className="chat-box">
        {messages.map((m, idx) => (
          <div key={idx} className={m.role === 'user' ? 'msg-user' : 'msg-bot'}>
            {m.content}
          </div>
        ))}
      </div>
      <div className="chat-input">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type your question..."
          onKeyDown={(e) => e.key === 'Enter' && sendMessage()}
        />
        <button onClick={sendMessage}>Send</button>
      </div>
    </div>
  )
}