import fleeceData from '@/data/fleece/shop-data'
import { useParams } from 'react-router-dom'

function ProductPage() {
	const { id } = useParams()

	const product = fleeceData.find(item => item.id === Number(id))

	if (!product) {
		return <p>Product not found</p>
	}

	return (
		<section className='product-page'>
			<h1>{product.title}</h1>
			<p>{product.price}</p>
			<img src={product.image[0]} alt={product.title} />
		</section>
	)
}

export default ProductPage
