import LazyImage from '@/components/common/LazyImage'

function CollectionSection({ data = [] }) {
	const collection = data[0]

	if (!collection) {
		return null
	}

	const collectionScroll = e => {
		e.preventDefault()
		const target = document.getElementById('values')
		if (target) {
			target.scrollIntoView({ behavior: 'smooth', block: 'start' })
		}
	}

	return (
		<section className='collection reveal' id='collection'>
			<section className='collection__content'>
				<div className='collection__img'>
					<LazyImage src={collection.img} alt={collection.title} />
				</div>
				<h1 className='collection__title'>{collection.title}</h1>
				<p className='collection__text'>{collection.description}</p>
				<section className='collection__actions'>
					<a href='#' className='btn' onClick={collectionScroll}>
						Details
					</a>
				</section>
			</section>
		</section>
	)
}

export default CollectionSection
