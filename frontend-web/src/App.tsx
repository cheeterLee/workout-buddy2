import { lazy, Suspense } from "react"
import { Routes, Route, Navigate } from "react-router-dom"
import { Navbar, PrivateRoutes } from "./components"
import { Login, Home } from "./pages"
import { useSelector } from "react-redux"

const Signup = lazy(() => import("./pages/Signup"))
const Personal = lazy(() => import("./pages/Personal"))
const Subscribe = lazy(() => import("./pages/Subscribe"))

function App() {
	const isAuth = Boolean(useSelector((state: any) => state.token)) // if not authenticated, navigate to login
	console.log("isAuth", isAuth)

	return (
		<div className="w-[100%] h-[100%] bg-primary-200 dark:bg-primary-900">
			<Navbar />
			<Routes>
				<Route path="/login" element={<Login />} />
				<Route
					path="/signup"
					element={
						<Suspense fallback={<>loading...</>}>
							<Signup />
						</Suspense>
					}
				/>
				<Route element={<PrivateRoutes />}>
					<Route path="/home" element={<Home />} />
					<Route
						path="/personal"
						element={
							<Suspense fallback={<>loading...</>}>
								<Personal />
							</Suspense>
						}
					/>
					<Route
						path="/subscribe"
						element={
							<Suspense fallback={<>loading...</>}>
								<Subscribe />
							</Suspense>
						}
					/>
				</Route>
				<Route path="*" element={<Navigate to="/login" />} />
			</Routes>
		</div>
	)
}

export default App
