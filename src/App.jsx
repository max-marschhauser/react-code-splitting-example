import React, { lazy, Suspense } from "react";
import { Routes, Route, Outlet, Link } from "react-router-dom";
// import FirstPage from "./components/FirstPage.jsx";
import SecondPage from "./components/SecondPage.jsx";
import ThirdPage from "./components/ThirdPage.jsx";

const FirstPage = lazy(() => import("./components/firstPage")); // importa jsx file tek kada je on potreban, ne ranije (ali treba dodati Suspense komponentu oko Outleta). U Suspense komponentu mogu staviti fallback koji će prikazivati Loading sadržaj (npr. Loading Spinner).

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
			<Suspense fallback={<h1>Loading...</h1>}>
				<Outlet />
			</Suspense>
		</>
	);
}
