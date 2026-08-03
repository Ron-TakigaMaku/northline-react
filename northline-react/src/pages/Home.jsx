// src/pages/Home.jsx
import products from '@/data/shop/products'
import CollectionSection from '@/sections/home/CollectionSection'
import HeroSection from '@/sections/home/HeroSection'
import ShopSection from '@/sections/shop/ShopSection'

function Home() {
	return (
		<>
			<HeroSection />
			<ShopSection products={products} />
			<CollectionSection />
		</>
	)
}

export default Home
