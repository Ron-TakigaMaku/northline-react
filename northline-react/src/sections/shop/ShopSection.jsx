// src/sections/shop/ShopSection.jsx
import ProductCard from '@/components/shop/ProductCard'
import ProductModal from '@/components/shop/ProductModal'
import { useEffect, useRef, useState } from 'react'

function ShopSection({ products }) {
	const [idx, setIdx] = useState(0)
	const [activeProduct, setActiveProduct] = useState(null)
	const timerRef = useRef(null)
	const n = products.length

	const go = i => setIdx((i + n) % n)

	const startAutoScroll = () => {
		clearInterval(timerRef.current)
		timerRef.current = setInterval(() => {
			setIdx(prev => (prev + 1) % n)
		}, 3000)
	}

	useEffect(() => {
		startAutoScroll()
		return () => clearInterval(timerRef.current)
	}, [n])

	const handleNav = direction => {
		clearInterval(timerRef.current)
		go(idx + direction)
		startAutoScroll()
	}

	return (
		<section className='shop'>
			<section className='shop__wrapper'>
				<div
					className='shop__track'
					style={{ transform: `translateX(-${idx * 100}%)` }}
				>
					{products.map(product => (
						<ProductCard
							key={product.id}
							product={product}
							onOpen={setActiveProduct}
						/>
					))}
				</div>
			</section>

			<section className='shop__nav'>
				<section className='shop__dots'>
					{products.map((_, i) => (
						<button
							key={i}
							className={`shop__dot${i === idx ? ' active' : ''}`}
							aria-label={`Слайд ${i + 1}`}
							onClick={() => {
								clearInterval(timerRef.current)
								go(i)
								startAutoScroll()
							}}
						/>
					))}
				</section>
				<div className='shop__counter'>
					{idx + 1} / {n}
				</div>
				<section className='shop__btns'>
					<button
						className='shop__prev'
						aria-label='Назад'
						onClick={() => handleNav(-1)}
					>
						←
					</button>
					<button
						className='shop__next'
						aria-label='Вперёд'
						onClick={() => handleNav(1)}
					>
						→
					</button>
				</section>
			</section>

			<ProductModal
				product={activeProduct}
				onClose={() => setActiveProduct(null)}
			/>
		</section>
	)
}

export default ShopSection
