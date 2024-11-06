import React, { useState } from "react"
import { useParams } from "react-router-dom/cjs/react-router-dom.min"

const ChatPage = () => {
	const data = useParams()
	const [messages, setMessages] = useState([])

	return <div className="chat-page"></div>
}

export default ChatPage
