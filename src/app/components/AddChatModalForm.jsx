import React, { useState } from "react"
import ModalForm from "./ModalForm"
import TextField from "./form/TextField"
import { validator } from "../utils/validator"

const AddChatModalForm = ({ onChangeModalState }) => {
	const [data, setData] = useState({ username: "" })
	const [erros, setErrors] = useState({})

	const handleChange = (target) => {
		setData((prev) => ({
			...prev,
			[target.name]: target.value,
		}))
	}

	const handleSubmit = (e) => {
		e.preventDefault()

		const isValid = validate()

		if (isValid) {
		}
	}

	const validate = () => {
		const errors = validator(data, validatorConfig)
		setErrors(errors)
		return Object.keys(errors).length !== 0
	}

	const validatorConfig = {
		username: {
			isRequired: {
				message: "Username is required",
			},
		},
	}

	return (
		<ModalForm onChangeModalState={onChangeModalState}>
			<TextField
				label={"Username"}
				value={data.username}
				name="username"
				placeholder={"Enter the username"}
				onChange={handleChange}
				error={erros.username}
			/>
			<button onClick={handleSubmit} className="submit-button">
				Add
			</button>
		</ModalForm>
	)
}

export default AddChatModalForm
