function FeaturedSection({ data = [] }) {
	if (!data.length) {
		return null
	}

	return (
		<section className='featured'>
			<div className='featured__list'>
				{data.map(featured => (
					<article key={featured.id} className='featured-card reveal'>
						<div className='featured-card__content'>
							<span className='featured-card__number'>{featured.number}</span>
							<h3 className='featured-card__title'>{featured.title}</h3>
							<p className='featured-card__text'>{featured.text}</p>
							<section className='featured__action'>
								<button className='featured-card__link' data-id={featured.id}>
									Explore →
								</button>
							</section>
						</div>

						<div className='featured-card__image'>
							<img src={featured.img} alt={featured.title} />
						</div>
					</article>
				))}
			</div>
		</section>
	)
}

export default FeaturedSection
