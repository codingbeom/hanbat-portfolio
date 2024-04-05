import { Route, Routes } from "react-router-dom";
import Wrapper from "./Wrapper";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Story from "./pages/Story";

function App() {
	return (
		<>
			<Wrapper>
				<Routes>
					<Route index path="/" element={Home()} />
					<Route path="/story" element={Story()} />
					<Route path="/about" element={About()} />
					<Route path="/contact" element={Contact()} />
				</Routes>
			</Wrapper>
		</>
	);
}

export default App;
