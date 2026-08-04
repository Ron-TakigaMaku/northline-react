import { useEffect } from 'react'

export default function useReveal() {
	useEffect(() => {
		const elements = document.querySelectorAll('.reveal')
		let revealedCount = 0 // общий счётчик, не сбрасывается между вызовами колбэка

		const observer = new IntersectionObserver(
			entries => {
				entries
					.filter(entry => entry.isIntersecting)
					.forEach(entry => {
						const el = entry.target
						const delay = revealedCount * 120
						revealedCount++ // увеличиваем на каждый показанный элемент

						setTimeout(() => {
							el.classList.add('in')
						}, delay)

						observer.unobserve(el)
					})
			},
			{ threshold: 0.15 },
		)

		elements.forEach(el => observer.observe(el))

		return () => observer.disconnect()
	}, [])
}
