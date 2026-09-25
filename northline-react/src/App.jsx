import Footer from '@/components/layout/Footer'
import Header from '@/components/layout/Header'
import useReveal from '@/hooks/useReveal'
import Accessories from '@/pages/Accessories'
import Bottoms from '@/pages/Bottoms'
import Fleece from '@/pages/Fleece'
import Footwear from '@/pages/Footwear'
import Home from '@/pages/Home'
import ProductPage from '@/sections/shop/ProductPage'
import { useEffect } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'

function App() {
	useReveal()
	const location = useLocation()

	useEffect(() => {
		const frame = requestAnimationFrame(() => {
			const targetId = location.hash.slice(1)

			if (targetId) {
				document.getElementById(targetId)?.scrollIntoView({
					behavior: 'smooth',
					block: 'start',
				})
			} else {
				window.scrollTo({ top: 0, behavior: 'auto' })
			}
		})

		return () => cancelAnimationFrame(frame)
	}, [location.pathname, location.hash])

	return (
		<>
			<Header />
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/fleece' element={<Fleece />} />
				<Route path='/bottoms' element={<Bottoms />} />
				<Route path='/accessories' element={<Accessories />} />
				<Route path='/footwear' element={<Footwear />} />
				<Route path='/:category/product/:id' element={<ProductPage />} />
			</Routes>
			<Footer />
		</>
	)
}

export default App
