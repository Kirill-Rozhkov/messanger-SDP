import React, { useState } from "react"
import ChatsPanel from "../ChatsPanel"

import "../../css/layouts/Main.css"
import AddChatModalForm from "../AddChatModalForm"

const Main = () => {
	const [isModalOpen, setIsModalOpen] = useState(false)

	const handleChangeModalState = () => {
		setIsModalOpen((prev) => !prev)
	}

	return (
		<div className="main-container">
			<ChatsPanel />
			<div className="main-buttons">
				<button
					onClick={handleChangeModalState}
					className="add-chat-button"
				>
					+ Add Chat
				</button>
				<button className="logout-button">Log Out</button>
			</div>
			{isModalOpen && (
				<AddChatModalForm onChangeModalState={handleChangeModalState} />
			)}
		</div>
	)
}

export default Main
