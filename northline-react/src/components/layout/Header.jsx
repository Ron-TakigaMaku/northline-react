import navigation from '@/data/navigation'
import { Link } from 'react-router-dom'

function Header() {
	return (
		<header className='header'>
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
				</div>
			</div>
		</header>
	)
}

export default Header
