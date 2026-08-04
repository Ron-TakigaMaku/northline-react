// src/sections/home/CollectionSection.jsx
import { collectionData } from '@/data/home/collection-data'

function CollectionSection() {
	const collection = collectionData[0]

	return (
		<section className='collection reveal'>
			<section className='collection__content'>
				<div className='collection__img'>
					<img src={collection.img} alt={collection.title} />
				</div>
				<h1 className='collection__title'>{collection.title}</h1>
				<p className='collection__text'>{collection.description}</p>
				<section className='collection__actions'>
					<a href='#' className='btn'>
						Details
					</a>
				</section>
			</section>
		</section>
	)
}

export default CollectionSection
