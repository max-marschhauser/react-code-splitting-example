import React from "react";
import { Routes, Route, Outlet, Link } from "react-router-dom";
import FirstPage from "./components/FirstPage.jsx";
import SecondPage from "./components/SecondPage.jsx";
import ThirdPage from "./components/ThirdPage.jsx";

export default function App() {
	return (
		<Routes>
			<Route path="/" element={<NewWrapper />}>
				<Route path="/firstPage" element={<FirstPage />} />
				<Route path="/secondPage" element={<SecondPage />} />
				<Route path="/thirdPage" element={<ThirdPage />} />
			</Route>
		</Routes>
	);
}

function NewWrapper() {
	return (
		<>
			<nav>
				<Link to="/firstPage">1.</Link>
				<Link to="/secondPage">2.</Link>
				<Link to="/thirdPage">3.</Link>
			</nav>
			<Outlet />
		</>
	);
}
