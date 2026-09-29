import { fireEvent, render, screen } from '@testing-library/react'
import { MemoryRouter, Route, Routes } from 'react-router-dom'
import { describe, expect, it } from 'vitest'
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

	it('calls addToCart when the Add to bag button is clicked', () => {
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

		fireEvent.click(screen.getByRole('button', { name: /add to bag/i }))

		expect(addToCart).toHaveBeenCalledTimes(1)
		expect(addToCart).toHaveBeenCalledWith(
			expect.objectContaining({
				id: 1,
				title: 'Colorblock Fleece Jacket',
			}),
		)
	})
})
