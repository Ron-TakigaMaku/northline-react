import LazyImage from '@/components/common/LazyImage'
import FeaturedModal from '@/components/shop/FeaturedModal'
import { useState } from 'react'

function FeaturedSection({ data = [] }) {
	const [activeItem, setActiveItem] = useState(null)

	if (!data.length) {
		return null
	}

	return (
		<section id='featured' className='featured'>
			<div className='container'>
				<div className='featured__list'>
					{data.map(featured => (
						<article key={featured.id} className='featured-card reveal'>
							<div className='featured-card__content'>
								<span className='featured-card__number'>{featured.number}</span>

								<h3 className='featured-card__title'>{featured.title}</h3>

								<p className='featured-card__text'>{featured.text}</p>

								<section className='featured__action'>
									<button
										className='featured-card__link'
										onClick={() => setActiveItem(featured)}
									>
										Explore →
									</button>
								</section>
							</div>

							<div className='featured-card__image'>
								<LazyImage src={featured.img} alt={featured.title} />
							</div>
						</article>
					))}
				</div>
			</div>

			<FeaturedModal item={activeItem} onClose={() => setActiveItem(null)} />
		</section>
	)
}

export default FeaturedSection
