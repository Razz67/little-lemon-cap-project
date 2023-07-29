import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import About from "./pages/About";
import Menu from "./pages/Menu";
import Book from "./pages/Book";
import OrderOnline from "./pages/OrderOnline";
import Login from "./pages/Login";

function App() {
	return (
		<>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<HomePage />} />
					<Route path="/About" element={<About />} />
					<Route path="/Menu" element={<Menu />} />
					<Route path="/Book" element={<Book />} />
					<Route path="/OrderOnline" element={<OrderOnline />} />
					<Route path="/Login" element={<Login />} />
				</Routes>
			</BrowserRouter>
		</>
	);
}

export default App;
