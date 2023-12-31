// App.js
import React from "react";
import {
	BrowserRouter as Router,
	Route,
	Routes,
	Navigate,
	useNavigate,
} from "react-router-dom";
import "./App.css";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import Footer from "./components/Footer";
import AboutUs from "./components/AboutUs";
import Services from "./components/Services";
import Contact from "./components/Contact";

function App() {
	return (
		<Router>
			<div className="App">
				<NavBar />

				{/* Define your routes */}
				<Routes>
					<Route
						exact
						path="/"
						element={<Home />}
					/>
					<Route
						path="/about"
						element={<AboutUs />}
					/>
					<Route
						path="/services"
						element={<Services />}
					/>
					<Route
						path="/contact"
						element={<Contact />}
					/>
				</Routes>

				<Footer />
			</div>
		</Router>
	);
}

export default App;
