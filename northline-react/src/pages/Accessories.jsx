import heroData from '@/data/accesories/hero-data'
import HeroSection from '@/sections/home/HeroSection'

function Accessories() {
	return <HeroSection data={heroData} targetId='collection' />
}

export default Accessories
