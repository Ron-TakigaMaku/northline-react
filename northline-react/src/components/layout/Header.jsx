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
						<svg
							className='header__cart-icon'
							width='20'
							height='20'
							viewBox='0 0 24 24'
							fill='none'
							stroke='currentColor'
							strokeWidth='1.5'
							strokeLinecap='round'
							strokeLinejoin='round'
							aria-hidden='true'
						>
							<path d='M6 7h12l1 13H5L6 7z' />
							<path d='M9 7V6a3 3 0 0 1 6 0v1' />
						</svg>
						<span className='header__cart-text'>
							{cartCount > 0 ? `(${cartCount})` : ''}
						</span>
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
