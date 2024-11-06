import React, { useEffect, useState } from "react"
import ChatBar from "./ChatBar"

import "../css/layouts/Main.css"

const ChatsPanel = () => {
	const [chats, setChats] = useState([])

	useEffect(() => {
		setChats([
			{ receiverId: 1, userName: "Kirill" },
			{ receiverId: 2, userName: "Artem" },
		])
	}, [])

	return (
		<div className="chat-panel">
			<h1>Chats</h1>
			<div className="chats-container">
				{chats.map((chat) => (
					<ChatBar key={chat.receiverId} chat={chat} />
				))}
			</div>
		</div>
	)
}

export default ChatsPanel
