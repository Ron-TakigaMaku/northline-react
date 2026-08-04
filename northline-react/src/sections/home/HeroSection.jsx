import heroData from '@/data/home/hero-data'

function HeroSection() {
	const hero = heroData[0]

	return (
		<section className='hero'>
			<section className='hero reveal'>
				<div className='hero__content'>
					<div className='hero__img'>
						<img src={hero.img} alt={hero.title} />
					</div>
					<h1 className='hero__title'>{hero.title}</h1>
					<p className='hero__text'>{hero.description}</p>
					<section className='hero-actions'>
						<a href='#story' className='btn'>
							Discover Our Story ↓
						</a>
					</section>
				</div>
			</section>
		</section>
	)
}

export default HeroSection
