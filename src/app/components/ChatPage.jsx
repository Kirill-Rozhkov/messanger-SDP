import React from "react"
import { useParams } from "react-router-dom/cjs/react-router-dom.min"

const ChatPage = () => {
	const { userName } = useParams()

	return <div className="chat-page">{userName}</div>
}

export default ChatPage
