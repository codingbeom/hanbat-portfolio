import { Route, Routes } from 'react-router-dom';
import Wrapper from './Wrapper';
import Contact from './pages/Contact';
import Home from './pages/Home';
import Skill from './pages/Skill';
import Story from './pages/Story';

function App() {
	return (
		<>
			<Wrapper>
				<Routes>
					<Route index path="/" element={Home()} />
					<Route path="/story" element={Story()} />
					<Route path="/skill" element={Skill()} />
					<Route path="/contact" element={Contact()} />
				</Routes>
			</Wrapper>
		</>
	);
}

export default App;
