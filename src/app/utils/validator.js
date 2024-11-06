export function validator(data, config) {
	const errors = {}
	function validate(validateMethod, data, config) {
		let statusValidate
		switch (validateMethod) {
			case "isRequired":
				if (typeof data === "boolean") {
					statusValidate = !data
				} else {
					statusValidate = data.trim() === ""
				}
				break

			case "isCapitalSymbol": {
				const capitalRegExp = /[A-Z]+/g
				statusValidate = !capitalRegExp.test(data)
				break
			}
			case "isContainDigit": {
				const digitRegExp = /\d+/g
				statusValidate = !digitRegExp.test(data)
				break
			}
			case "min": {
				statusValidate = data.length < config.value
				break
			}
			case "isDifferent":
				console.log(data, config.mainPassword)
				statusValidate = !(data === config.mainPassword)
				break

			default:
				break
		}
		if (statusValidate) return config.message
	}
	for (const filedName in data) {
		for (const validateMethod in config[filedName]) {
			const error = validate(
				validateMethod,
				data[filedName],
				config[filedName][validateMethod]
			)
			if (error && !errors[filedName]) {
				errors[filedName] = error
			}
		}
	}
	return errors
}
