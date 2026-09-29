import navigation from '@/data/layout/navigation-data'
import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

function Header({ cartCount = 0 }) {
	const { pathname } = useLocation()
	const isProductPage = pathname.includes('/product/')
	const [isDark, setIsDark] = useState(() => {
		const savedTheme = window.localStorage.getItem('northline-theme')
		return savedTheme
			? savedTheme === 'dark'
			: (window.matchMedia?.('(prefers-color-scheme: dark)').matches ?? false)
	})

	useEffect(() => {
		const theme = isDark ? 'dark' : 'light'
		document.documentElement.dataset.theme = theme
		window.localStorage.setItem('northline-theme', theme)
	}, [isDark])

	return (
		<header className={`header${isProductPage ? ' header--dark' : ''}`}>
			<div className='container'>
				<div className='header__container'>
					<span className='header__logo'>NORTHLINE</span>
					<nav className='header__nav'>
						<ul className='header__list'>
							{navigation.map(item => (
								<li className='header__item' key={item.path}>
									<Link to={item.path} className='header__link'>
										{item.title}
									</Link>
								</li>
							))}
						</ul>
					</nav>
					<Link to='/cart' className='header__cart' aria-label='Open cart'>
						Bag {cartCount > 0 ? `(${cartCount})` : ''}
					</Link>
					<button
						className='header__theme-toggle'
						type='button'
						aria-label={`Переключить на ${isDark ? 'светлую' : 'тёмную'} тему`}
						aria-pressed={isDark}
						title={`Тема: ${isDark ? 'тёмная' : 'светлая'}`}
						onClick={() => setIsDark(theme => !theme)}
					>
						{isDark ? '☀' : '☾'}
					</button>
				</div>
			</div>
		</header>
	)
}

export default Header
