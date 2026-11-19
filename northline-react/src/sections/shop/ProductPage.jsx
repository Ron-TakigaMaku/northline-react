import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

import accessoriesData from '@/data/accesories/shop-data'
import bottomsData from '@/data/bottoms/shop-data'
import fleeceData from '@/data/fleece/shop-data'
import footwearData from '@/data/footwear/shop-data'
import aboutData from '@/data/home/about-data'

function ProductPage({ onAddToCart = () => {} }) {
	const { category, id } = useParams()

	const productData = {
		fleece: fleeceData,
		bottoms: bottomsData,
		accessories: accessoriesData,
		footwear: footwearData,
		home: aboutData,
	}

	const product = productData[category]?.find(item => item.id === Number(id))

	const [activeImage, setActiveImage] = useState(null)

	const [selection, setSelection] = useState(null)
	const defaultColor = Array.isArray(product?.color)
		? (product.color[0] ?? '')
		: (product?.color ?? '')
	const selectedColor =
		selection?.product === product ? selection.color : defaultColor
	const selectedSize = selection?.product === product ? selection.size : ''

	useEffect(() => {
		const handleKeyDown = e => {
			if (e.key === 'Escape') {
				setActiveImage(null)
			}
		}

		window.addEventListener('keydown', handleKeyDown)

		return () => {
			window.removeEventListener('keydown', handleKeyDown)
		}
	}, [])

	useEffect(() => {
		if (!activeImage) return

		document.body.style.overflow = 'hidden'

		return () => {
			document.body.style.overflow = ''
		}
	}, [activeImage])

	if (!product) {
		return <p>Product not found</p>
	}

	const images = product.image ?? [product.img]
	const colors = Array.isArray(product.color)
		? product.color
		: product.color
			? [product.color]
			: []

	return (
		<main className='product-page'>
			<div className='container'>
				<Link
					className='product-page__back'
					to={category === 'home' ? '/' : `/${category}#story`}
				>
					← Back to shop
				</Link>

				<div className='product-page__content'>
					<div className='product-page__gallery'>
						{images.map((image, index) => (
							<button
								key={image}
								className='product-page__image-button'
								onClick={() => setActiveImage(image)}
								type='button'
							>
								<img
									src={image}
									alt={`${product.title} ${index + 1}`}
									className='product-page__image'
								/>
							</button>
						))}
					</div>

					<div className='product-page__info'>
						<p className='product-page__brand'>{product.brand}</p>

						<h1 className='product-page__title'>{product.title}</h1>

						<p className='product-page__price'>{product.price}</p>

						<p className='product-page__description'>{product.description}</p>

						{colors.length > 0 && (
							<div className='product-page__options'>
								<p id='product-page-color-label'>
									Color: {selectedColor}
								</p>
								<div
									className='product-page__choices'
									role='group'
									aria-labelledby='product-page-color-label'
								>
									{colors.map(color => (
										<button
											key={color}
											type='button'
											className={`product-page__choice${selectedColor === color ? ' is-selected' : ''}`}
											aria-pressed={selectedColor === color}
											onClick={() =>
												setSelection({ product, color, size: selectedSize })
											}
										>
											{color}
										</button>
									))}
								</div>
							</div>
						)}

						{product.sizes?.length > 0 && (
							<div className='product-page__options'>
								<p id='product-page-size-label'>
									Size: {selectedSize || 'Choose a size'}
								</p>
								<div
									className='product-page__choices'
									role='group'
									aria-labelledby='product-page-size-label'
								>
									{product.sizes.map(size => (
										<button
											key={size}
											type='button'
											className={`product-page__choice${selectedSize === size ? ' is-selected' : ''}`}
											aria-pressed={selectedSize === size}
											onClick={() =>
												setSelection({ product, color: selectedColor, size })
											}
										>
											{size}
										</button>
									))}
								</div>
							</div>
						)}

						<button
							className='btn product-page__button'
							type='button'
							disabled={Boolean(product.sizes?.length) && !selectedSize}
							onClick={() =>
								onAddToCart({
									...product,
									category,
									selectedColor,
									selectedSize,
								})
							}
						>
							Add to bag
						</button>
					</div>

					{product.details?.length > 0 && (
						<div className='product__details'>
							<h2>Product Details</h2>

							<ul>
								{product.details.map((detail, index) => (
									<li key={index}>
										<strong>{detail.label}:</strong> {detail.value}
									</li>
								))}
							</ul>
						</div>
					)}
				</div>
			</div>

			{activeImage && (
				<div className='product-lightbox' onClick={() => setActiveImage(null)}>
					<button
						className='product-lightbox__close'
						onClick={() => setActiveImage(null)}
						type='button'
						aria-label='Close image'
					>
						✕
					</button>

					<img
						src={activeImage}
						alt={product.title}
						className='product-lightbox__image'
						onClick={e => e.stopPropagation()}
					/>
				</div>
			)}
		</main>
	)
}

export default ProductPage
