function Header() {
	return (
		<header className='header'>
			<div className='container'>
				<div className='header__container'>
					<span className='header__logo'>NORTHLINE</span>
					<nav className='header__nav'>
						<ul className='header__list'>
							<li className='header__item'>
								<a href='#' className='header__link'>
									Fleece
								</a>
							</li>
							<li className='header__item'>
								<a href='#' className='header__link'>
									Bottoms
								</a>
							</li>
							<li className='header__item'>
								<a href='#' className='header__link'>
									Accessories
								</a>
							</li>
							<li className='header__item'>
								<a href='#' className='header__link'>
									Footwear
								</a>
							</li>
						</ul>
					</nav>
				</div>
			</div>
		</header>
	)
}

export default Header
