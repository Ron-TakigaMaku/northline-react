import bitsnbobsTechShell from '@/assets/image/index/track/Bitsnbobs Tech Shell Jacket.png' //id:2
import bitsnbobsDetails from '@/assets/image/index/track/bitsnbobs-details.png' //id:2 details
import neversible from '@/assets/image/index/track/neversible.png' //id:6
import nikeHoodie from '@/assets/image/index/track/nike-hoodie.png' //id:3
import nikeSupreamDetails from '@/assets/image/index/track/nike-supream-details.png' //id:4 details
import palaceTrackJacket from '@/assets/image/index/track/Palace x Umbro Track Jacket.png' //id:1
import palaceDetails from '@/assets/image/index/track/palace-details-1.png' //id:1 details
import reversible from '@/assets/image/index/track/reversible.png' //id:5
import sportswear from '@/assets/image/index/track/sportswear.png' //id:4

const aboutData = [
	{
		id: 1,
		brand: 'Palace x Umbro',
		title: 'Track Jacket',
		price: '$720',
		description:
			'A retro-inspired windbreaker born from the collaboration between skate giant Palace and heritage sportswear brand Umbro. Featuring a crisp white nylon shell, this jacket is detailed with contrast piping, light grey side panelling, and a classic stand-up collar. Completed with co-branded embroidery on the chest, capturing a perfect 90s football terrace aesthetic.',
		img: palaceTrackJacket,
		image: [palaceTrackJacket, palaceDetails],
		linkText: 'More information ↗',
		linkUrl: '#',
	},
	{
		id: 2,
		brand: 'Bitsnbobs',
		title: 'Tech Shell Jacket',
		price: '$480',
		description:
			'A minimalist hooded windbreaker designed for urban utility. Crafted from a matte black tech-fabric, it stands out with its sharp, white reflective contrast piping that defines its ergonomic, boxy fit. Equipped with a sleek waterproof center zip, secure zipped side pockets, and elasticated cuffs to block out the elements.',
		img: bitsnbobsTechShell,
		image: [bitsnbobsTechShell, bitsnbobsDetails],
		linkText: 'More information ↗',
		linkUrl: '#',
	},
	{
		id: 3,
		brand: 'Nike',
		title: 'Vintage Boxy Hoodie',
		price: '$350',
		description:
			'A heavy-weight, oversized hoodie capturing the ultimate vintage streetwear vibe with a washed, faded finish. Features a unique color-blocked panel construction, a structured buttonless hood with metal eyelets, and a classic kangaroo pocket. Detailed with a minimal centered mini-Swoosh and accent sleeve embroidery.',
		img: nikeHoodie,
		image: [nikeHoodie],
		linkText: 'More information ↗',
		linkUrl: '#',
	},
	{
		id: 4,
		brand: 'Nike',
		title: 'Sportswear Authentics Corduroy Hooded Jacket',
		price: '$170',
		description:
			'A stylish transitional zip-up jacket made from durable, heavy-wale black corduroy. Features an adjustable hood, a utility-style sleeve pocket, and minimalist embroidered Swoosh logos on the chest and hood. It perfectly complements modern streetwear and gorpcore aesthetics.',
		img: sportswear,
		image: [sportswear, nikeSupreamDetails],
		linkText: 'More information ↗',
		linkUrl: '#',
	},
	{
		id: 5,
		brand: 'Nike',
		title: 'Reversible Big Swoosh Full-Zip Boa Jacket',
		price: '$160',
		description:
			'A reversible full-zip jacket made of soft, warm "boa" fleece (sherpa). The standout feature is a giant dark grey Swoosh that wraps across the chest and back over a black base. The inner side is made of smooth, wind-resistant nylon, allowing it to be worn as a sleek windbreaker.',
		img: reversible,
		image: [reversible],
		linkText: 'More information ↗',
		linkUrl: '#',
	},
	{
		id: 6,
		brand: 'Nike',
		title: 'Reversible Big Swoosh Full-Zip Boa Jacket',
		price: '$170',
		description:
			'The classic and most popular colorway of the reversible fleece jacket series. It features a high-contrast, giant off-white (Sail) Swoosh across a deep black fleece background, making it a staple piece in streetwear culture. The reverse side turns into a practical black nylon jacket with a small white logo on the chest.',
		img: neversible,
		image: [neversible],
		linkText: 'More information ↗',
		linkUrl: '#',
	},
]

export default aboutData
