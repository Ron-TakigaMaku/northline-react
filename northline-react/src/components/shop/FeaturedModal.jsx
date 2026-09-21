import { useEffect } from 'react'
import { createPortal } from 'react-dom'

function FeaturedModal({ item, onClose }) {
	useEffect(() => {
		if (!item) return

		document.body.style.overflow = 'hidden'

		const handleKeyDown = e => {
			if (e.key === 'Escape') {
				onClose()
			}
		}

		document.addEventListener('keydown', handleKeyDown)

		return () => {
			document.body.style.overflow = ''
			document.removeEventListener('keydown', handleKeyDown)
		}
	}, [item, onClose])

	if (!item) return null

	return createPortal(
		<div className='featured-modal modal--open'>
			<div className='featured-modal__overlay' onClick={onClose} />

			<div className='featured-modal__window'>
				<button
					className='featured-modal__close'
					onClick={onClose}
					aria-label='Close modal'
				>
					✕
				</button>

				<div className='featured-modal__body'>
					<img
						src={item.img}
						alt={item.title}
						className='featured-modal__img'
					/>

					<div className='featured-modal__info'>
						<span className='featured-modal__number'>{item.number}</span>

						<h3 className='featured-modal__title'>{item.title}</h3>

						<p className='featured-modal__text'>{item.text}</p>
					</div>
				</div>
			</div>
		</div>,
		document.body,
	)
}

export default FeaturedModal
