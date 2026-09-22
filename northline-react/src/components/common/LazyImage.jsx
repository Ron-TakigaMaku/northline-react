import { useEffect, useRef, useState } from 'react'

function LazyImage({ src, alt, className = '', style = {}, ...props }) {
	const imgRef = useRef(null)
	const [isVisible, setIsVisible] = useState(false)

	useEffect(() => {
		const node = imgRef.current
		if (!node) return

		const observer = new IntersectionObserver(
			entries => {
				entries.forEach(entry => {
					if (entry.isIntersecting) {
						setIsVisible(true)
						observer.unobserve(node)
					}
				})
			},
			{ rootMargin: '200px' },
		)

		observer.observe(node)

		return () => observer.disconnect()
	}, [])

	return (
		<img
			{...props}
			ref={imgRef}
			className={className}
			style={style}
			src={isVisible ? src : undefined}
			alt={alt}
			loading='lazy'
			decoding='async'
		/>
	)
}

export default LazyImage
