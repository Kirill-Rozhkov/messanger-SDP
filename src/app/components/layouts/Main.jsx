import React from "react"
import ChatsPanel from "../ChatsPanel"

import "../../css/layouts/Main.css"

const Main = () => {
	return (
		<div className="main-container">
			<ChatsPanel />
			<div className="main-buttons">
				<button className="add-chat-button">+ Add Chat</button>
				<button className="logout-button">Log Out</button>
			</div>
		</div>
	)
}

export default Main
