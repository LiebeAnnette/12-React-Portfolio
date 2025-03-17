import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css";
import Header from "./components/Header";
import Projects from "./components/Project";
import Footer from "./components/Footer";

export default function App() {
	return (
		<Router>
			<Header />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/projects" element={<Projects />} />
			</Routes>
			<Footer />
		</Router>
	);
}

function Home() {
	return <h1>Home Page</h1>;
}
