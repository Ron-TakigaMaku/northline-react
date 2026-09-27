import { fireEvent, render, screen } from '@testing-library/react'
import { describe, expect, it, vi } from 'vitest'
import HeroSection from './HeroSection'

const data = [
	{
		title: 'Built for the city',
		description: 'Ready for the wild.',
		img: '/hero.jpg',
	},
]

describe('HeroSection', () => {
	it('returns empty output for missing hero data', () => {
		const { container } = render(<HeroSection data={[]} />)

		expect(container).toBeEmptyDOMElement()
	})

	it('scrolls to the configured target when its action is clicked', () => {
		const target = document.createElement('div')
		target.id = 'story'
		target.scrollIntoView = vi.fn()
		document.body.append(target)
		render(<HeroSection data={data} targetId='story' />)

		fireEvent.click(screen.getByRole('link', { name: /discover our story/i }))

		expect(target.scrollIntoView).toHaveBeenCalledWith({
			behavior: 'smooth',
			block: 'start',
		})
	})
})