import { fireEvent, render, screen } from '@testing-library/react'
import { describe, expect, it, vi } from 'vitest'
import ProductCard from './ProductCard'

const product = {
	brand: 'NORTHLINE',
	title: 'Trail Jacket',
	price: '$120',
	description: 'Weather-ready outer layer.',
	img: '/jacket.jpg',
	linkText: 'More information',
}

describe('ProductCard', () => {
	it('renders the product details and lazy-loaded image', () => {
		render(<ProductCard product={product} onOpen={vi.fn()} />)

		expect(screen.getByRole('heading', { name: product.title })).toBeInTheDocument()
		expect(screen.getByText(product.brand)).toBeInTheDocument()
		expect(screen.getByText(product.price)).toBeInTheDocument()
		expect(screen.getByRole('img', { name: product.title })).toHaveAttribute(
			'src',
			product.img,
		)
	})

	it('passes the selected product to onOpen', () => {
		const onOpen = vi.fn()
		render(<ProductCard product={product} onOpen={onOpen} />)

		fireEvent.click(screen.getByRole('button', { name: product.linkText }))

		expect(onOpen).toHaveBeenCalledOnce()
		expect(onOpen).toHaveBeenCalledWith(product)
	})
})