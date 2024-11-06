import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom/cjs/react-router-dom.min"
import LoginForm from "../LoginForm"
import RegisterForm from "../RegisterForm"

import "../../css/layouts/Login.css"

const Login = () => {
	const { type } = useParams()
	const [formType, setFormType] = useState(
		type === "login" ? "login" : "register"
	)

	const toggleFormType = () => {
		setFormType((prev) => (prev === "login" ? "register" : "login"))
	}

	return (
		<div className="login-container">
			{formType === "login" ? (
				<div className="login-form">
					<h1>Log In</h1>
					<LoginForm />
					<p>
						Don't have an account?{" "}
						<a
							role="button"
							onClick={toggleFormType}
							className="swap-link"
						>
							Register
						</a>
					</p>
				</div>
			) : (
				<div className="login-form">
					<h1>Registration</h1>
					<RegisterForm />
					<p>
						Already have an account?{" "}
						<a
							role="button"
							onClick={toggleFormType}
							className="swap-link"
						>
							Log In
						</a>
					</p>
				</div>
			)}
		</div>
	)
}

export default Login
