import { Route, Routes } from 'react-router-dom'
import Fleece from './pages/Fleece'
import Home from './pages/Home'

function App() {
	return (
		<Routes>
			<Route path='/' element={<Home />} />
			<Route path='/fleece' element={<Fleece />} />
		</Routes>
	)
}

export default App
