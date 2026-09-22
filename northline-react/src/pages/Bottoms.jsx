import heroData from '@/data/bottoms/hero-data'
import HeroSection from '@/sections/home/HeroSection'

function Bottoms() {
	return <HeroSection data={heroData} targetId='collection' />
}

export default Bottoms
