import { Route, Routes } from 'react-router-dom'
import Bottoms from './pages/Bottoms'
import Fleece from './pages/Fleece'
import Footwear from './pages/Footwear'
import { default as Accessories, default as Home } from './pages/Home'

function App() {
	return (
		<Routes>
			<Route path='/' element={<Home />} />
			<Route path='/fleece' element={<Fleece />} />
			<Route path='/bottoms' element={<Bottoms />} />
			<Route path='/accessories' element={<Accessories />} />
			<Route path='/footwear' element={<Footwear />} />
		</Routes>
	)
}

export default App
