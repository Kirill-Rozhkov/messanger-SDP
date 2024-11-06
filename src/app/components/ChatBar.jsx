import PropTypes from "prop-types"
import React from "react"

import "../css/layouts/Main.css"
import { useHistory } from "react-router-dom/cjs/react-router-dom.min"

const ChatBar = ({ chat }) => {
	const history = useHistory()
	const redirectToMessanger = (path) => {
		history.push(path)
	}

	return (
		<div
			onClick={() => redirectToMessanger(chat.userName)}
			className="chat-bar"
		>
			{chat.userName}
		</div>
	)
}

ChatBar.propTypes = {
	chat: PropTypes.object.isRequired,
}

export default ChatBar
