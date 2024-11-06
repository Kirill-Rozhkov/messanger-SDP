import React, { useState } from "react"
import TextField from "./form/TextField"
import { validator } from "../utils/validator"

const LoginForm = () => {
	const [data, setData] = useState({
		userName: "",
		password: "",
	})
	const [errors, setErrors] = useState({})

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

		console.log(data)
	}

	const validate = () => {
		const errors = validator(data, validatorConfig)
		setErrors(errors)
		return Object.keys(errors).length !== 0
	}

	const validatorConfig = {
		userName: {
			isRequired: {
				message: "userName is required",
			},
		},
		password: {
			isRequired: {
				message: "Password is required",
			},
		},
	}

	return (
		<form className="from-data-container" onSubmit={handleSubmit}>
			<TextField
				label={"userName"}
				value={data.userName}
				name={"userName"}
				placeholder={"Enter the userName"}
				onChange={handleChange}
				error={errors.userName}
			/>
			<TextField
				label={"Password"}
				value={data.password}
				name={"password"}
				type={"password"}
				placeholder={"Enter the password"}
				onChange={handleChange}
				error={errors.password}
			/>
			<button className="submit-button">Submit</button>
		</form>
	)
}

export default LoginForm
