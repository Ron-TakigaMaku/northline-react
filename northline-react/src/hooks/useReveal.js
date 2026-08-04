import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

export default function useReveal() {
	const location = useLocation()

	useEffect(() => {
		const elements = Array.from(document.querySelectorAll('.reveal'))

		elements.forEach(el => {
			el.classList.remove('in')
		})

		const observer = new IntersectionObserver(
			entries => {
				entries.forEach(entry => {
					if (entry.isIntersecting) {
						const el = entry.target
						setTimeout(() => {
							el.classList.add('in')
						}, 120)
						observer.unobserve(el)
					}
				})
			},
			{ threshold: 0.15 },
		)

		elements.forEach(el => {
			const rect = el.getBoundingClientRect()

			if (rect.top < window.innerHeight * 0.9) {
				el.classList.add('in')
			} else {
				observer.observe(el)
			}
		})

		return () => observer.disconnect()
	}, [location.pathname])
}
