import footer from '@/data/layout/footer'
import { Link } from 'react-router-dom'

function Footer() {
	return (
		<footer className='footer'>
			<div className='container'>
				<div className='footer__container'>
					<p className='footer__text'>© Ron ⏤ 2026</p>
					<nav className='footer__links'>
						<ul>
							{footer.map(item => (
								<li key={item.path}>
									<Link to={item.path} className='footer__link'>
										{item.title}
									</Link>
								</li>
							))}
						</ul>
					</nav>
				</div>
			</div>
		</footer>
	)
}

export default Footer
