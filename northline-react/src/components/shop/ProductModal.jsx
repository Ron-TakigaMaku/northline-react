import { useEffect, useState } from 'react'

function ProductModal({ product, onClose }) {
	const [slideIdx, setSlideIdx] = useState(0)

	useEffect(() => {
		setSlideIdx(0)
	}, [product])

	useEffect(() => {
		if (!product) return
		document.body.style.overflow = 'hidden'
		return () => {
			document.body.style.overflow = ''
		}
	}, [product])

	useEffect(() => {
		const handleKey = e => {
			if (e.key === 'Escape') onClose()
		}
		window.addEventListener('keydown', handleKey)
		return () => window.removeEventListener('keydown', handleKey)
	}, [onClose])

	if (!product) return null

	const images = product.image ?? [product.img]
	const n = images.length
	const goTo = i => setSlideIdx((i + n) % n)

	return (
		<div className='modal modal--open'>
			<div className='modal__overlay' onClick={onClose} />
			<div className='modal__window'>
				<button className='modal__close' onClick={onClose}>
					✕
				</button>

				<div className='modal__body'>
					<div className='modal__gallery'>
						<button
							className='modal__arrow modal__arrow--prev'
							onClick={() => goTo(slideIdx - 1)}
						>
							←
						</button>
						<div className='modal__slides'>
							{images.map((src, i) => (
								<img
									key={src}
									src={src}
									alt={product.title}
									className={`modal__slide${i === slideIdx ? ' modal__slide--active' : ''}`}
								/>
							))}
						</div>
						<button
							className='modal__arrow modal__arrow--next'
							onClick={() => goTo(slideIdx + 1)}
						>
							→
						</button>
						<div className='modal__dots'>
							{images.map((_, i) => (
								<button
									key={i}
									className={`modal__dot${i === slideIdx ? ' modal__dot--active' : ''}`}
									onClick={() => goTo(i)}
								/>
							))}
						</div>
					</div>

					<div className='modal__info'>
						<p className='modal__brand'>{product.brand}</p>
						<h2 className='modal__title'>{product.title}</h2>
						<p className='modal__price'>{product.price}</p>
						<p className='modal__desc'>{product.description}</p>
					</div>
				</div>
			</div>
		</div>
	)
}

export default ProductModal
