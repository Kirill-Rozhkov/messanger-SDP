import React, { useState } from "react"
import TextField from "./form/TextField"

const RegisterForm = () => {
	const [data, setData] = useState({
		name: "",
		password: "",
		repeatedPassword: "",
		phone: "",
	})

	const handleChange = (target) => {
		setData((prev) => ({
			...prev,
			[target.name]: target.value,
		}))
	}

	return (
		<form className="from-data-container">
			<TextField
				label={"Name"}
				value={data.name}
				name={"name"}
				placeholder={"Enter the name"}
				onChange={handleChange}
			/>
			<TextField
				label={"Password"}
				value={data.password}
				name={"password"}
				type={"password"}
				placeholder={"Enter the password"}
				onChange={handleChange}
			/>
			<TextField
				label={"Repeat password"}
				value={data.repeatedPassword}
				name={"repeatedPassword"}
				type={"password"}
				placeholder={"Repeat the password"}
				onChange={handleChange}
			/>
			<TextField
				label={"Phone"}
				value={data.phone}
				name={"phone"}
				type={"text"}
				placeholder={"Enter the phone"}
				onChange={handleChange}
			/>
			<button className="submit-button">Submit</button>
		</form>
	)
}

export default RegisterForm
