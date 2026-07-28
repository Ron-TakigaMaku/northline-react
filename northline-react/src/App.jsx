import { Routes } from 'react-router-dom'
import Header from './components/Header'
// import Accessories from './pages/Accessories'
// import Bottoms from './pages/Bottoms'
// import Fleece from './pages/Fleece'
// import Footwear from './pages/Footwear'
// import Home from './pages/home'

function App() {
	return (
		<>
			<Header />
			<Routes>
				{/* <Route path='/' element={<Home />} />
				<Route path='/fleece' element={<Fleece />} />
				<Route path='/bottoms' element={<Bottoms />} />
				<Route path='/accessories' element={<Accessories />} />
				<Route path='/footwear' element={<Footwear />} /> */}
			</Routes>
		</>
	)
}

export default App
