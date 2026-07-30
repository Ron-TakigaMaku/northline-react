import heroData from '@/data/home/hero-data'

function HeroSection() {
	return (
		<section className='hero__content'>
			<div className='hero__img'>
				<img src='{heroData.img}' alt='{heroData.title}' />
			</div>
			<h1 className='hero__title'>{heroData.title}</h1>
			<p className='hero__text'>{heroData.description}</p>
			<section className='hero-actions'>
				<a href='#story' className='btn'>
					Discover Our Story ↓
				</a>
			</section>
		</section>
	)
}

export default HeroSection
