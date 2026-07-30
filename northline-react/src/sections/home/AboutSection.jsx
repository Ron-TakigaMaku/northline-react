import aboutData from '@/data/home/about-data'

function AboutSection() {
	return (
		<section className='about-section'>
			{aboutData.map(about => (
				<article key={about.id} className='product-card'>
					<div className='product-card__img'>
						<img src={about.img} alt={about.title} />
					</div>
					<div className='product-card__info'>
						<p className='product-card__brand'>{about.brand}</p>
						<h3 className='product-card__title'>{about.title}</h3>
						<p className='product-card__price'>{about.price}</p>
						<p className='product-card__desc'>{about.description}</p>
						<button className='product-card__link' data-id={about.id}>
							{about.linkText}
						</button>
					</div>
				</article>
			))}
		</section>
	)
}

export default AboutSection
