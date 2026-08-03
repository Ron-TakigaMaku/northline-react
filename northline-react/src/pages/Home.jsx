// src/pages/Home.jsx
import products from '@/data/shop/products'
import AboutSection from '@/sections/home/AboutSection'
import HeroSection from '@/sections/home/HeroSection'
import ShopSection from '@/sections/shop/ShopSection'

function Home() {
	return (
		<>
			<HeroSection />
			<AboutSection />
			<ShopSection products={products} />
		</>
	)
}

export default Home
