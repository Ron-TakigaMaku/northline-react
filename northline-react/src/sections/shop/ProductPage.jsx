import { Link, useParams } from 'react-router-dom'

import accessoriesData from '@/data/accesories/shop-data'
import bottomsData from '@/data/bottoms/shop-data'
import fleeceData from '@/data/fleece/shop-data'
import footwearData from '@/data/footwear/shop-data'
import aboutData from '@/data/home/about-data'

function ProductPage() {
	const { category, id } = useParams()

	const productData = {
		fleece: fleeceData,
		bottoms: bottomsData,
		accessories: accessoriesData,
		footwear: footwearData,
		home: aboutData,
	}

	const product = productData[category]?.find(item => item.id === Number(id))

	if (!product) {
		return <p>Product not found</p>
	}

	const images = product.image ?? [product.img]

	return (
		<main className='product-page'>
			<div className='container'>
				<Link
					className='product-page__back'
					to={category === 'home' ? '/' : `/${category}`}
				>
					← Back to shop
				</Link>

				<div className='product-page__content'>
					<div className='product-page__gallery'>
						{images.map((image, index) => (
							<img
								key={image}
								src={image}
								alt={`${product.title} ${index + 1}`}
								className='product-page__image'
							/>
						))}
					</div>

					<div className='product-page__info'>
						<p className='product-page__brand'>{product.brand}</p>
						<h1 className='product-page__title'>{product.title}</h1>
						<p className='product-page__price'>{product.price}</p>
						<p className='product-page__description'>{product.description}</p>
						{product.color && (
							<p className='product-page__color'>Color: {product.color}</p>
						)}
						{product.sizes?.length > 0 && (
							<p className='product-page__sizes'>
								Sizes: {product.sizes.join(', ')}
							</p>
						)}
						<button className='btn product-page__button' type='button'>
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
		</main>
	)
}

export default ProductPage
