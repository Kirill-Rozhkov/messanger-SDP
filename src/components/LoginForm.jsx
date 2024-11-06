import React, { useState } from "react"
import TextField from "./form/TextField"

const LoginForm = () => {
	const [data, setData] = useState({
		name: "",
		password: "",
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
			<button className="submit-button">Submit</button>
		</form>
	)
}

export default LoginForm
