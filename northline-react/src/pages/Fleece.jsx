import collectionData from '@/data/fleece/collection-data'
import FeaturedData from '@/data/fleece/featured-data'
import heroData from '@/data/fleece/hero-data'
import CollectionSection from '@/sections/home/CollectionSection'
import HeroSection from '@/sections/home/HeroSection'
import FeaturedSection from '@/sections/shop/FeaturedSection'

function Fleece() {
	return (
		<>
			<HeroSection data={heroData} targetId='featured' />
			<FeaturedSection data={FeaturedData} />
			<CollectionSection data={collectionData} />
		</>
	)
}

export default Fleece
