// src/pages/Home.jsx
import collectionData from '@/data/home/collection-data'
import heroData from '@/data/home/hero-data'
import products from '@/data/shop/products'
import CollectionSection from '@/sections/home/CollectionSection'
import HeroSection from '@/sections/home/HeroSection'
import ValuesSection from '@/sections/home/ValuesSection'
import ShopSection from '@/sections/shop/ShopSection'

function Home() {
	return (
		<>
			<HeroSection data={heroData} targetId='story' />
			<ShopSection products={products} />
			<CollectionSection data={collectionData} targetId='values' />
			<ValuesSection />
		</>
	)
}

export default Home
