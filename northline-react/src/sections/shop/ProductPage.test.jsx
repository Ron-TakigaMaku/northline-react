import { fireEvent, render, screen } from '@testing-library/react'
import { MemoryRouter, Route, Routes } from 'react-router-dom'
import { describe, expect, it, vi } from 'vitest'
import ProductPage from './ProductPage'

describe('ProductPage', () => {
	it('renders product details and closes the lightbox on Escape', () => {
		render(
			<MemoryRouter initialEntries={['/fleece/product/1']}>
				<Routes>
					<Route path='/:category/product/:id' element={<ProductPage />} />
				</Routes>
			</MemoryRouter>,
		)

		expect(
			screen.getByRole('heading', { name: /colorblock fleece jacket/i }),
		).toBeInTheDocument()

		const firstImageButton = document.querySelector(
			'.product-page__image-button',
		)
		expect(firstImageButton).not.toBeNull()
		fireEvent.click(firstImageButton)

		expect(document.body.style.overflow).toBe('hidden')

		fireEvent.keyDown(window, { key: 'Escape' })
		expect(document.body.style.overflow).toBe('')
	})

	it('requires a size and adds the selected color and size to the bag', () => {
		const addToCart = vi.fn()

		render(
			<MemoryRouter initialEntries={['/fleece/product/1']}>
				<Routes>
					<Route
						path='/:category/product/:id'
						element={<ProductPage onAddToCart={addToCart} />}
					/>
				</Routes>
			</MemoryRouter>,
		)

		const addToBagButton = screen.getByRole('button', { name: /add to bag/i })
		expect(addToBagButton).toBeDisabled()

		fireEvent.click(screen.getByRole('button', { name: 'M' }))
		expect(addToBagButton).toBeEnabled()
		fireEvent.click(addToBagButton)

		expect(addToCart).toHaveBeenCalledTimes(1)
		expect(addToCart).toHaveBeenCalledWith(
			expect.objectContaining({
				id: 1,
				title: 'Colorblock Fleece Jacket',
				selectedColor: 'Black',
				selectedSize: 'M',
			}),
		)
	})

	it('allows choosing between multiple colors', () => {
		render(
			<MemoryRouter initialEntries={['/footwear/product/1']}>
				<Routes>
					<Route path='/:category/product/:id' element={<ProductPage />} />
				</Routes>
			</MemoryRouter>,
		)

		const blackButton = screen.getByRole('button', { name: 'Black' })
		const blueButton = screen.getByRole('button', { name: 'Blue' })

		expect(blackButton).toHaveAttribute('aria-pressed', 'true')
		fireEvent.click(blueButton)

		expect(blackButton).toHaveAttribute('aria-pressed', 'false')
		expect(blueButton).toHaveAttribute('aria-pressed', 'true')
	})
})
