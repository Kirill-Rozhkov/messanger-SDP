import axios from "axios"
import localStorageService from "./localStorage.service"

const http = axios.create({
	baseURL: "",
	headers: {
		accept: "application/json",
		"Content-Type": "application/json",
	},
})

http.interceptors.request.use((req) => {
	const { url } = req
	if (url !== "/token") {
		const accessToken = localStorageService.getAccessToken()
		if (accessToken) {
			req.headers = {
				...req.headers,
				Authorization: `Bearer ${accessToken}`,
			}
		}

		return req
	} else if (url === "/token") {
		req.headers = {
			...req.headers,
			"Content-Type": "application/x-www-form-urlencoded",
		}
		return req
	}
})
