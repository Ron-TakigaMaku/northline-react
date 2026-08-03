// src/sections/home/CollectionSection.jsx
import { collectionData } from '@/data/home/collection-data'

function CollectionSection() {
	return (
		<section className='collection reveal'>
			<section className='collection__list'>
				{collectionData.map(item => (
					<section key={item.id} className='collection__content'>
						<div className='collection__img'>
							<img src={item.img} alt={item.title} />
						</div>
						<h1 className='collection__title'>{item.title}</h1>
						<p className='collection__text'>{item.description}</p>
						<section className='collection-actions'>
							<a href='#story' className='btn'>
								Details
							</a>
						</section>
					</section>
				))}
			</section>
		</section>
	)
}

export default CollectionSection
