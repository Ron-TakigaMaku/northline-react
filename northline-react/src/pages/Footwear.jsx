import heroData from '@/data/footwear/hero-data'
import HeroSection from '@/sections/home/HeroSection'

function Footwear() {
	return <HeroSection data={heroData} targetId='collection' />
}

export default Footwear
