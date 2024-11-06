import React from "react"
import PropTypes from "prop-types"

import "../css/ModalForm.css"

const ModalForm = ({ children, onChangeModalState }) => {
	return (
		<div className="modal-overlay">
			<div className="modal-form">
				<span className="close-btn" onClick={onChangeModalState}>
					&times;
				</span>
				{children}
			</div>
		</div>
	)
}

ModalForm.propTypes = {
	children: PropTypes.node.isRequired,
}

export default ModalForm
