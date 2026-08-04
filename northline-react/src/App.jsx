import Footer from '@/components/layout/Footer'
import Header from '@/components/layout/Header'
import useReveal from '@/hooks/useReveal'
import Accessories from '@/pages/Accessories'
import Bottoms from '@/pages/Bottoms'
import Fleece from '@/pages/Fleece'
import Footwear from '@/pages/Footwear'
import Home from '@/pages/Home'
import Shop from '@/pages/Shop'
import { Route, Routes } from 'react-router-dom'

function App() {
	useReveal()
	return (
		<>
			<Header />
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/shop' element={<Shop />} />
				<Route path='/fleece' element={<Fleece />} />
				<Route path='/bottoms' element={<Bottoms />} />
				<Route path='/accessories' element={<Accessories />} />
				<Route path='/footwear' element={<Footwear />} />
			</Routes>
			<Footer />
		</>
	)
}

export default App
