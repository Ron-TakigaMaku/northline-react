import LazyImage from '@/components/common/LazyImage'

function CollectionSection({ data = [], targetId = 'story' }) {
	const hero = data[0]

	if (!hero) {
		return null
	}

	const handleScroll = e => {
		e.preventDefault()
		const target = document.getElementById(targetId)
		if (target) {
			target.scrollIntoView({ behavior: 'smooth', block: 'start' })
		}
	}

	return (
		<section className='collection reveal' id='collection'>
			<section className='collection__content'>
				<div className='collection__img'>
					<LazyImage src={hero.img} alt={hero.title} />
				</div>
				<h1 className='collection__title'>{hero.title}</h1>
				<p className='collection__text'>{hero.description}</p>
				<section className='collection__actions'>
					<a href='#' className='btn' onClick={handleScroll}>
						Details
					</a>
				</section>
			</section>
		</section>
	)
}

export default CollectionSection
