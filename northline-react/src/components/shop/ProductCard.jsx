// src/components/shop/ProductCard.jsx
function ProductCard({ product, onOpen }) {
	return (
		<article className='product-card'>
			<div className='product-card__img'>
				<img src={product.img} alt={product.title} />
			</div>
			<div className='product-card__info'>
				<p className='product-card__brand'>{product.brand}</p>
				<h3 className='product-card__title'>{product.title}</h3>
				<p className='product-card__price'>{product.price}</p>
				<p className='product-card__desc'>{product.description}</p>
				<button className='product-card__link' onClick={() => onOpen(product)}>
					{product.linkText}
				</button>
			</div>
		</article>
	)
}

export default ProductCard
