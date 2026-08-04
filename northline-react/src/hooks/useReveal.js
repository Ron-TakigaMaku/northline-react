import { useEffect } from 'react'

export default function useReveal() {
	useEffect(() => {
		const observer = new IntersectionObserver(
			entries => {
				entries.forEach(entry => {
					if (entry.isIntersecting) {
						entry.target.classList.add('in')
					} else {
						entry.target.classList.remove('in') // если нужна повторная анимация
					}
				})
			},
			{
				threshold: 0.15,
			},
		)

		const elements = document.querySelectorAll('.reveal')

		elements.forEach(el => observer.observe(el))

		return () => observer.disconnect()
	}, [])
}
