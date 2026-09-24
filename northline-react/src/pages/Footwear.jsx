// import collectionData from '@/data/bottoms/collection-data'
// import featuredData from '@/data/bottoms/featured-data'
import heroData from '@/data/footwear/hero-data'
// import shopData from '@/data/bottoms/shop-data'
// import CollectionSection from '@/sections/home/CollectionSection'
import HeroSection from '@/sections/home/HeroSection'
// import FeaturedSection from '@/sections/shop/FeaturedSection'
// import ShopSection from '@/sections/shop/ShopSection'

function Footwear() {
	return (
		<>
			<HeroSection data={heroData} targetId='featured' />
			{/* <FeaturedSection data={featuredData} />
				<CollectionSection data={collectionData} />
				<ShopSection products={shopData} /> */}
		</>
	)
}

export default Footwear
