import React, { useState } from "react"
import ChatBar from "./ChatBar"

import "../css/ChatsPanel.css"

const ChatsPanel = () => {
	const [chats, setChats] = useState([])

	return (
		<div className="chat-panel">
			{chats.map((chat) => (
				<ChatBar key={chat.id} chat={chat} />
			))}
		</div>
	)
}

export default ChatsPanel
