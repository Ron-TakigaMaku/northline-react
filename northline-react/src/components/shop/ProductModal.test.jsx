import { fireEvent, render, screen } from '@testing-library/react'
import { describe, expect, it, vi } from 'vitest'
import ProductModal from './ProductModal'

const product = {
	brand: 'NORTHLINE',
	title: 'Trail Jacket',
	price: '$120',
	description: 'Weather-ready outer layer.',
	img: '/jacket.jpg',
	image: ['/jacket-1.jpg', '/jacket-2.jpg'],
	id: 7,
}

describe('ProductModal', () => {
	it('renders nothing when there is no active product', () => {
		const { container } = render(
			<ProductModal product={null} category='fleece' onClose={vi.fn()} />,
		)

		expect(container).toBeEmptyDOMElement()
	})

	it('closes from the overlay and Escape key', () => {
		const onClose = vi.fn()
		render(<ProductModal product={product} category='fleece' onClose={onClose} />)

		fireEvent.click(document.querySelector('.modal__overlay'))
		fireEvent.keyDown(window, { key: 'Escape' })

		expect(onClose).toHaveBeenCalledTimes(2)
	})

	it('wraps gallery navigation and locks body scrolling while open', () => {
		render(<ProductModal product={product} category='fleece' onClose={vi.fn()} />)
		const slides = screen.getAllByRole('img', { name: product.title })

		expect(document.body.style.overflow).toBe('hidden')
		expect(slides[0]).toHaveClass('modal__slide--active')

		fireEvent.click(screen.getByRole('button', { name: '→' }))

		expect(slides[1]).toHaveClass('modal__slide--active')
		fireEvent.click(screen.getByRole('button', { name: '←' }))
		expect(slides[0]).toHaveClass('modal__slide--active')
})
})