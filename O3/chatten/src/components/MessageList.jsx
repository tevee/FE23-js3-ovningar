export default function MessageList({messages}) {
  return(
    <div>
      <h2>Chat-history</h2>
      <ul>
        {messages.map((message, idx) => <li key={idx}>{message.user}: {message.text}</li>)}
      </ul>
    </div>
  )
}