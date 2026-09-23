// import collectionData from '@/data/accesories/collection-data'
import featuredData from '@/data/accesories/featured-data'
import heroData from '@/data/accesories/hero-data'
// import shopData from '@/data/accesories/shop-data'
// import CollectionSection from '@/sections/home/CollectionSection'
import HeroSection from '@/sections/home/HeroSection'
import FeaturedSection from '@/sections/shop/FeaturedSection'
// import ShopSection from '@/sections/shop/ShopSection'

function Accessories() {
	return (
		<>
			<HeroSection data={heroData} targetId='collection' />
			{/* <CollectionSection data={collectionData} /> */}
			<FeaturedSection data={featuredData} />
			{/* <ShopSection data={shopData} /> */}
		</>
	)
}

export default Accessories
