import '@testing-library/jest-dom/vitest'
import { vi } from 'vitest'

class MockIntersectionObserver {
	constructor(callback) {
		this.callback = callback
	}

	observe(element) {
		this.callback([{ isIntersecting: true, target: element }])
	}

	unobserve() {}

	disconnect() {}
}

globalThis.IntersectionObserver = MockIntersectionObserver
window.scrollTo = vi.fn()
Element.prototype.scrollIntoView = vi.fn()