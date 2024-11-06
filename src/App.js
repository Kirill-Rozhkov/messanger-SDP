import { Route } from "react-router-dom/cjs/react-router-dom.min"
import Main from "./components/layouts/Main"
import Login from "./components/layouts/Login"

function App() {
	return (
		<>
			<Route component={Main} path="/" exact />
			<Route component={Login} path="/login/:type?" />
		</>
	)
}

export default App
