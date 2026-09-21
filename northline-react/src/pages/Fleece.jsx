import FeaturedData from '@/data/fleece/featured-data'
import heroData from '@/data/fleece/hero-data'
import HeroSection from '@/sections/home/HeroSection'
import FeaturedSection from '@/sections/shop/FeaturedSection'

function Fleece() {
	return (
		<>
			<HeroSection data={heroData} />
			<FeaturedSection data={FeaturedData} />
		</>
	)
}

export default Fleece
