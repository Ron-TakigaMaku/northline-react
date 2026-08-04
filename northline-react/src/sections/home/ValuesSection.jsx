import { valuesData } from '@/data/home/values-data.js'

function ValuesSection() {
	return (
		<section className='values reveal'>
			<div className='values-grid'>
				<ul className='values-list'>
					{valuesData.map(value => (
						<li key={value.num} className='value-item'>
							<div className='value-num'>{value.num}</div>
							<div className='value-text'>
								<strong>{value.title}</strong>
								<p>{value.text}</p>
							</div>
						</li>
					))}
				</ul>
			</div>
		</section>
	)
}

export default ValuesSection
