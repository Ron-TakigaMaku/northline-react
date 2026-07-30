import ProductCard from '@/components/shop/ProductCard'
import ProductModal from '@/components/shop/ProductModal'
import { useCallback, useEffect, useRef, useState } from 'react'

function ShopSection({ products }) {
	const [idx, setIdx] = useState(0)
	const [activeProduct, setActiveProduct] = useState(null)

	const timerRef = useRef(null)

	const n = products.length

	const startAutoScroll = useCallback(() => {
		clearInterval(timerRef.current)

		timerRef.current = setInterval(() => {
			setIdx(prev => (prev + 1) % n)
		}, 3000)
	}, [n])

	useEffect(() => {
		startAutoScroll()

		return () => {
			clearInterval(timerRef.current)
		}
	}, [startAutoScroll])

	const handleNav = direction => {
		clearInterval(timerRef.current)

		setIdx(prev => (prev + direction + n) % n)

		startAutoScroll()
	}

	const handleDotClick = index => {
		clearInterval(timerRef.current)

		setIdx(index)

		startAutoScroll()
	}

	return (
		<section className='shop'>
			<section className='shop__wrapper'>
				<div
					className='shop__track'
					style={{
						transform: `translateX(-${idx * 100}%)`,
					}}
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
							onClick={() => handleDotClick(i)}
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
				key={activeProduct?.id}
				product={activeProduct}
				onClose={() => setActiveProduct(null)}
			/>
		</section>
	)
}

export default ShopSection
