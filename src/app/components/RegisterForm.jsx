import React, { useState } from "react"
import TextField from "./form/TextField"
import { validator } from "../utils/validator"

const RegisterForm = () => {
	const [data, setData] = useState({
		Username: "",
		password: "",
		repeatedPassword: "",
		phone: "",
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

		console.log(data)
	}

	const validate = () => {
		const errors = validator(data, validatorConfig)
		setErrors(errors)
		return Object.keys(errors).length !== 0
	}

	const validatorConfig = {
		Username: {
			isRequired: {
				message: "Username is required",
			},
		},
		password: {
			isRequired: {
				message: "Password is required",
			},
			isCapitalSymbol: {
				message:
					"The password must contain at least one capital letter",
			},
			isContainDigit: {
				message: "The password must contain at least one number",
			},
			min: {
				message: "The password must consist of at least 8 characters",
				value: 8,
			},
		},
		repeatedPassword: {
			isRequired: {
				message: "Password is required",
			},
			isDifferent: {
				message: "Passwords don't match",
				mainPassword: data.password,
			},
		},
		phone: {
			isRequired: {
				message: "Phone is required",
			},
		},
	}

	return (
		<form className="from-data-container" onSubmit={handleSubmit}>
			<TextField
				label={"Username"}
				value={data.Username}
				name={"Username"}
				placeholder={"Enter the Username"}
				onChange={handleChange}
				error={errors.Username}
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
			<TextField
				label={"Repeat password"}
				value={data.repeatedPassword}
				name={"repeatedPassword"}
				type={"password"}
				placeholder={"Repeat the password"}
				onChange={handleChange}
				error={errors.repeatedPassword}
			/>
			<TextField
				label={"Phone"}
				value={data.phone}
				name={"phone"}
				type={"number"}
				placeholder={"Enter the phone"}
				onChange={handleChange}
				error={errors.phone}
			/>
			<button className="submit-button">Submit</button>
		</form>
	)
}

export default RegisterForm
