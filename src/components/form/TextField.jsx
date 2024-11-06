import React from "react"
import PropTypes from "prop-types"

import "../../css/TextField.css"

const TextField = ({ label, value, name, placeholder, onChange, type }) => {
	const handleChange = ({ target }) => {
		onChange({ name: target.name, value: target.value })
	}

	return (
		<div className="text-filed">
			<label htmlFor={name}>{label}</label>
			<input
				name={name}
				value={value}
				type={type}
				placeholder={placeholder}
				onChange={handleChange}
			/>
		</div>
	)
}

TextField.propTypes = {
	label: PropTypes.string,
	value: PropTypes.string.isRequired,
	name: PropTypes.string.isRequired,
	type: PropTypes.string,
	placeholder: PropTypes.string,
}

TextField.defaultProps = {
	type: "text",
}

export default TextField
