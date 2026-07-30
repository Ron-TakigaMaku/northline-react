import bitsnbobsTechShell from '@/assets/image/index/track/Bitsnbobs Tech Shell Jacket.png'
import nikeHoodie from '@/assets/image/index/track/nike-hoodie.png'
import palaceTrackJacket from '@/assets/image/index/track/Palace x Umbro Track Jacket.png'
import reversible from '@/assets/image/index/track/reversible.png'
import sportswear from '@/assets/image/index/track/sportswear.png'

const products = [
	{
		id: 1,
		brand: 'Palace x Umbro',
		title: 'Track Jacket',
		price: '$720',
		description: 'Retro-inspired windbreaker with premium detailing.',
		img: palaceTrackJacket,
		image: [palaceTrackJacket],
		linkText: 'More information ↗',
	},
	{
		id: 2,
		brand: 'Bitsnbobs',
		title: 'Tech Shell Jacket',
		price: '$480',
		description: 'Minimalist urban shell with reflective details.',
		img: bitsnbobsTechShell,
		image: [bitsnbobsTechShell],
		linkText: 'More information ↗',
	},
	{
		id: 3,
		brand: 'Nike',
		title: 'Vintage Boxy Hoodie',
		price: '$350',
		description: 'Oversized hoodie with vintage streetwear feel.',
		img: nikeHoodie,
		image: [nikeHoodie],
		linkText: 'More information ↗',
	},
	{
		id: 4,
		brand: 'Nike',
		title: 'Sportswear Authentics Corduroy Hooded Jacket',
		price: '$170',
		description: 'Transitional zip jacket in heavy corduroy.',
		img: sportswear,
		image: [sportswear],
		linkText: 'More information ↗',
	},
	{
		id: 5,
		brand: 'Nike',
		title: 'Reversible Big Swoosh Full-Zip Boa Jacket',
		price: '$160',
		description: 'Reversible fleece jacket with bold Swoosh branding.',
		img: reversible,
		image: [reversible],
		linkText: 'More information ↗',
	},
]

export default products
