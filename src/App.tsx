import { Route, Routes } from 'react-router-dom';
import Wrapper from './Wrapper';
import Contact from './pages/Contact';
import Home from './pages/Home';
import Presentation from './pages/Presentation';
import Project from './pages/Project';
import Puzzle from './pages/Puzzle';
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
					<Route path="/project" element={Project()} />
					<Route path="/puzzle" element={Puzzle()} />
					<Route path="/presentation" element={<Presentation />} />
				</Routes>
			</Wrapper>
		</>
	);
}

export default App;
