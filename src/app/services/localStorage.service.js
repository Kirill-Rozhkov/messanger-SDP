const TOKEN_KEY = "jwt-token"

export function setToken(accessToken) {
	localStorage.setItem(TOKEN_KEY, accessToken)
}

export function getAccessToken() {
	return localStorage.getItem(TOKEN_KEY)
}

export function removeAuthData() {
	localStorage.removeItem(TOKEN_KEY)
}

const localStorageService = {
	setToken,
	getAccessToken,
	removeAuthData,
}

export default localStorageService
