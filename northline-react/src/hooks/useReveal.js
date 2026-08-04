import { useEffect } from 'react'

export default function useReveal() {
	useEffect(() => {
		const elements = document.querySelectorAll('.reveal')

		const observer = new IntersectionObserver(
			entries => {
				entries.forEach((entry, index) => {
					if (entry.isIntersecting) {
						const el = entry.target
						setTimeout(() => {
							el.classList.add('in')
						}, index * 120)
						observer.unobserve(el)
					}
				})
			},
			{
				threshold: 0.15,
			},
		)

		elements.forEach(el => observer.observe(el))

		return () => observer.disconnect()
	}, [])
}
