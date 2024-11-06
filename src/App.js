import {
	Redirect,
	Route,
	Switch,
} from "react-router-dom/cjs/react-router-dom.min"
import Main from "./app/components/layouts/Main"
import Login from "./app/components/layouts/Login"
import { ToastContainer } from "react-toastify"
import AppLoader from "./app/hoc/AppLoader"

function App() {
	return (
		<>
			{/* <AppLoader> */}
			<Switch>
				<Route component={Main} path="/" exact />
				<Route component={Login} path="/login/:type?" />
				<Redirect to="/" />
			</Switch>
			{/* </AppLoader> */}

			<ToastContainer
				position="bottom-center"
				autoClose={1500}
				hideProgressBar={false}
				newestOnTop={true}
				closeOnClick
				rtl={false}
				draggable
				pauseOnHover
				theme="light"
			/>
		</>
	)
}

export default App
