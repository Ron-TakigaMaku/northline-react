import collectionData from '@/data/fleece/collection-data'
import FeaturedData from '@/data/fleece/featured-data'
import heroData from '@/data/fleece/hero-data'
import shopData from '@/data/fleece/shop-data'
// import products from '@/data/shop/products'
import CollectionSection from '@/sections/home/CollectionSection'
import HeroSection from '@/sections/home/HeroSection'
import FeaturedSection from '@/sections/shop/FeaturedSection'
import ShopSection from '@/sections/shop/ShopSection'

function Fleece() {
	return (
		<>
			<HeroSection data={heroData} targetId='featured' />
			<FeaturedSection data={FeaturedData} />
			<CollectionSection data={collectionData} />
			<ShopSection products={shopData} />
		</>
	)
}

export default Fleece
