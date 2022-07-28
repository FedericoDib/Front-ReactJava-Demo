import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import Games from './components/Games/Games';
import GameDetail from './components/GameDetail/GameDetail';
import InsertGame from './components/InsertGame/InsertGame';
import Statistics from './components/Statistics/Statistics';

function App() {
	return (
		<Router>
			<div className='App'>
				<Routes>
					<Route exact path='/home' element={<Home />} />
					<Route exact path='/games' element={<Games />} />
					<Route exact path='/game/:id' element={<GameDetail />} />
					<Route exact path='/insert' element={<InsertGame />} />
					<Route exact path='/statistics' element={<Statistics />} />
				</Routes>
			</div>
		</Router>
	);
}

export default App;
