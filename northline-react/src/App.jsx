import Footer from '@/components/layout/Footer'
import Header from '@/components/layout/Header'
import useReveal from '@/hooks/useReveal'
import Accessories from '@/pages/Accessories'
import Bottoms from '@/pages/Bottoms'
import Fleece from '@/pages/Fleece'
import Footwear from '@/pages/Footwear'
import Home from '@/pages/Home'
import ScrollToTopButton from '@/sections/home/ScrollToTopButton'
import ProductPage from '@/sections/shop/ProductPage'
import { useEffect, useState } from 'react'
import { Link, Route, Routes, useLocation } from 'react-router-dom'

function CartPage({ cart, onRemoveFromCart }) {
	if (cart.length === 0) {
		return (
			<main className='container cart-page'>
				<h1>Your bag is empty</h1>
				<Link to='/'>Continue shopping</Link>
			</main>
		)
	}

	return (
		<main className='container cart-page'>
			<h1>Your bag</h1>
			<ul>
				{cart.map(item => (
					<li key={`${item.category}-${item.id}`}>
						<span>{item.title}</span>
						<span> — {item.price}</span>
						<button
							type='button'
							onClick={() => onRemoveFromCart(item.id, item.category)}
						>
							Remove
						</button>
					</li>
				))}
			</ul>
		</main>
	)
}

function App() {
	useReveal()
	const location = useLocation()

	const [cart, setCart] = useState([])

	const addToCart = product => {
		setCart(prevCart => {
			const existingItem = prevCart.find(
				item => item.id === product.id && item.category === product.category,
			)

			if (existingItem) {
				return prevCart.map(item =>
					item.id === product.id && item.category === product.category
						? { ...item, quantity: (item.quantity ?? 1) + 1 }
						: item,
				)
			}

			return [...prevCart, { ...product, quantity: 1 }]
		})
	}

	const removeFromCart = (productId, category) => {
		setCart(prevCart =>
			prevCart.filter(
				item => !(item.id === productId && item.category === category),
			),
		)
	}

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
			<Header
				cartCount={cart.reduce((sum, item) => sum + (item.quantity ?? 1), 0)}
			/>
			<Routes>
				<Route path='/' element={<Home />} />
				<Route
					path='/cart'
					element={<CartPage cart={cart} onRemoveFromCart={removeFromCart} />}
				/>
				<Route path='/fleece' element={<Fleece />} />
				<Route path='/bottoms' element={<Bottoms />} />
				<Route path='/accessories' element={<Accessories />} />
				<Route path='/footwear' element={<Footwear />} />
				<Route
					path='/:category/product/:id'
					element={<ProductPage onAddToCart={addToCart} />}
				/>
			</Routes>
			<Footer />
			<ScrollToTopButton />
		</>
	)
}

export default App
