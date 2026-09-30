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

const parsePrice = price => Number(String(price).replace(/[^0-9.]/g, ''))

const formatPrice = price =>
	new Intl.NumberFormat('en-US', {
		style: 'currency',
		currency: 'USD',
	}).format(price)

function CartPage({ cart, onChangeQuantity, onRemoveFromCart, onClearCart }) {
	const [checkoutMessage, setCheckoutMessage] = useState('')
	const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0)
	const subtotal = cart.reduce(
		(sum, item) => sum + parsePrice(item.price) * item.quantity,
		0,
	)

	if (cart.length === 0) {
		return (
			<main className='cart-page'>
				<div className='container'>
					<div className='cart-page__empty'>
						<p className='cart-page__eyebrow'>Your selection</p>
						<h1>Your bag is empty</h1>
						<p>Discover pieces made for the road ahead.</p>
						<Link className='btn cart-page__continue' to='/'>
							Continue shopping
						</Link>
					</div>
				</div>
			</main>
		)
	}

	return (
		<main className='cart-page'>
			<div className='container'>
				<header className='cart-page__header'>
					<div>
						<p className='cart-page__eyebrow'>Your selection</p>
						<h1>Your bag</h1>
					</div>
					<span className='cart-page__count'>
						{totalItems} {totalItems === 1 ? 'item' : 'items'}
					</span>
				</header>

				<div className='cart-page__layout'>
					<section className='cart-page__items' aria-label='Items in your bag'>
						<div className='cart-page__items-header'>
							<span>Product</span>
							<button type='button' onClick={onClearCart}>
								Clear bag
							</button>
						</div>

						{cart.map(item => {
							const itemPrice = parsePrice(item.price)

							return (
								<article
									className='cart-item'
									key={`${item.category}-${item.id}`}
								>
									<img
										className='cart-item__image'
										src={item.img}
										alt={item.title}
									/>
									<div className='cart-item__details'>
										<p className='cart-item__brand'>{item.brand}</p>
										<h2>{item.title}</h2>
										<p className='cart-item__category'>{item.category}</p>
										<div className='cart-item__controls'>
											<div
												className='cart-item__quantity'
												aria-label={`Quantity of ${item.title}`}
											>
												<button
													type='button'
													onClick={() => onChangeQuantity(item, -1)}
													disabled={item.quantity <= 1}
													aria-label={`Decrease quantity of ${item.title}`}
												>
													−
												</button>
												<span>{item.quantity}</span>
												<button
													type='button'
													onClick={() => onChangeQuantity(item, 1)}
													aria-label={`Increase quantity of ${item.title}`}
												>
													+
												</button>
											</div>
											<button
												className='cart-item__remove'
												type='button'
												onClick={() => onRemoveFromCart(item.id, item.category)}
											>
												Remove
											</button>
										</div>
									</div>
									<strong className='cart-item__total'>
										{formatPrice(itemPrice * item.quantity)}
									</strong>
								</article>
							)
						})}
					</section>

					<aside className='cart-summary'>
						<h2>Order summary</h2>
						<div className='cart-summary__row'>
							<span>Subtotal</span>
							<span>{formatPrice(subtotal)}</span>
						</div>
						<div className='cart-summary__row'>
							<span>Shipping</span>
							<span>Free</span>
						</div>
						<p className='cart-summary__note'>
							Taxes and duties are calculated at checkout.
						</p>
						<div className='cart-summary__total'>
							<span>Total</span>
							<strong>{formatPrice(subtotal)}</strong>
						</div>
						<button
							className='btn cart-summary__checkout'
							type='button'
							onClick={() =>
								setCheckoutMessage('Checkout will be available soon.')
							}
						>
							Proceed to checkout
						</button>
						{checkoutMessage && (
							<p className='cart-summary__message' role='status'>
								{checkoutMessage}
							</p>
						)}
						<Link className='cart-summary__continue' to='/'>
							Continue shopping
						</Link>
					</aside>
				</div>
			</div>
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

	const changeCartQuantity = (product, delta) => {
		setCart(prevCart =>
			prevCart.map(item =>
				item.id === product.id && item.category === product.category
					? { ...item, quantity: Math.max(1, item.quantity + delta) }
					: item,
			),
		)
	}

	const clearCart = () => setCart([])

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
					element={
						<CartPage
							cart={cart}
							onChangeQuantity={changeCartQuantity}
							onRemoveFromCart={removeFromCart}
							onClearCart={clearCart}
						/>
					}
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
