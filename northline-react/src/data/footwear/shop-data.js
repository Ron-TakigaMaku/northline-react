//id1
import id1_1 from '@/assets/image/footwear/shop/id1/1.jpg'
import id1_2 from '@/assets/image/footwear/shop/id1/2.jpg'
import id1_3 from '@/assets/image/footwear/shop/id1/3.jpg'
import id1_4 from '@/assets/image/footwear/shop/id1/4.jpg'
import id1_5 from '@/assets/image/footwear/shop/id1/5.jpg'
//id2
import id2_1 from '@/assets/image/footwear/shop/id2/1.jpg'
import id2_2 from '@/assets/image/footwear/shop/id2/2.jpg'
import id2_3 from '@/assets/image/footwear/shop/id2/3.jpg'
import id2_4 from '@/assets/image/footwear/shop/id2/4.jpg'
import id2_5 from '@/assets/image/footwear/shop/id2/5.jpg'
//id3
import id3_1 from '@/assets/image/footwear/shop/id3/1.jpg'
import id3_2 from '@/assets/image/footwear/shop/id3/2.jpg'
import id3_3 from '@/assets/image/footwear/shop/id3/3.jpg'
import id3_4 from '@/assets/image/footwear/shop/id3/4.jpg'
import id3_5 from '@/assets/image/footwear/shop/id3/5.jpg'
//id4
import id4_1 from '@/assets/image/footwear/shop/id4/1.jpg'
import id4_2 from '@/assets/image/footwear/shop/id4/2.jpg'
import id4_3 from '@/assets/image/footwear/shop/id4/3.jpg'
import id4_4 from '@/assets/image/footwear/shop/id4/4.jpg'
import id4_5 from '@/assets/image/footwear/shop/id4/5.jpg'
//id5
import id5_1 from '@/assets/image/footwear/shop/id5/1.jpg'
import id5_2 from '@/assets/image/footwear/shop/id5/2.jpg'
import id5_3 from '@/assets/image/footwear/shop/id5/3.jpg'
import id5_4 from '@/assets/image/footwear/shop/id5/4.jpg'
import id5_5 from '@/assets/image/footwear/shop/id5/5.jpg'
//id6
import id6_1 from '@/assets/image/footwear/shop/id6/1.jpg'
import id6_2 from '@/assets/image/footwear/shop/id6/2.jpg'
import id6_3 from '@/assets/image/footwear/shop/id6/3.jpg'
import id6_4 from '@/assets/image/footwear/shop/id6/4.jpg'
import id6_5 from '@/assets/image/footwear/shop/id6/5.jpg'

const shopData = [
	{
		id: 1,
		brand: 'The North Face',
		title: 'Women’s VECTIV™ Enduris 4 Shoes',
		price: '$180',
		text: 'Advanced trail running shoes for maximum comfort and energy return.',
		color: ['Black', 'White', 'Blue'],
		sizes: ['36', '37', '38', '39', '40', '41', '42'],
		details: [
			{ label: 'UPPER', value: 'Engineered breathable mesh' },
			{ label: 'MIDSOLE', value: 'VECTIV™ energy-returning foam' },
			{ label: 'OUTSOLE', value: 'High-traction rubber compound' },
			{ label: 'TECHNOLOGY', value: 'VECTIV™ propulsion technology' },
			{ label: 'FIT', value: 'Standard trail-running fit' },
			{ label: 'HEEL DROP', value: '6 mm' },
			{ label: 'HEEL HEIGHT', value: '32 mm' },
			{ label: 'FOREFOOT HEIGHT', value: '26 mm' },
			{ label: 'LACING', value: 'Traditional lace-up system' },
			{ label: 'FOOTBED', value: 'Contoured performance footbed' },
			{ label: 'TRACTION', value: 'Multi-directional lug pattern' },
			{ label: 'STABILITY', value: 'Enhanced lateral stability' },
			{ label: 'CUSHIONING', value: 'Responsive lightweight cushioning' },
			{ label: 'PROTECTION', value: 'Reinforced toe and heel areas' },
			{ label: 'BREATHABILITY', value: 'High airflow construction' },
			{ label: 'WEIGHT', value: 'Lightweight' },
			{ label: 'SEASON', value: 'Spring / Summer / Autumn' },
			{ label: 'ACTIVITY', value: 'Trail Running / Hiking' },
			{ label: 'TERRAIN', value: 'Technical and mixed trails' },
			{ label: 'STYLE', value: 'Performance / Outdoor' },
			{ label: 'CARE', value: 'Hand wash and air dry' },
		],
		description:
			'Engineered for long-distance trail running, these shoes feature VECTIV™ technology to maximize energy return and provide superior stability on rugged terrain, ensuring comfort during every mile.',
		img: id1_1,
		image: [id1_2, id1_3, id1_4, id1_5],
		linkText: 'More information ↗',
		linkUrl: '#',
	},

	{
		id: 2,
		brand: 'The North Face',
		title: 'Borealis Tote',
		price: '$90',
		text: 'Everyday tote built for durability and versatility.',
		color: ['Black', 'Khaki', 'White'],
		sizes: ['One Size'],
		details: [
			{ label: 'MATERIAL', value: 'Durable recycled polyester' },
			{ label: 'CONSTRUCTION', value: 'Reinforced everyday construction' },
			{ label: 'CAPACITY', value: 'Large everyday capacity' },
			{ label: 'MAIN COMPARTMENT', value: 'Spacious zippered compartment' },
			{ label: 'ORGANIZATION', value: 'Multiple internal storage sections' },
			{ label: 'POCKETS', value: 'Interior and exterior pockets' },
			{ label: 'LAPTOP STORAGE', value: 'Dedicated padded laptop sleeve' },
			{ label: 'CLOSURE', value: 'Full-length zipper closure' },
			{ label: 'HANDLES', value: 'Reinforced carry handles' },
			{ label: 'CARRY STYLE', value: 'Hand carry / Shoulder carry' },
			{ label: 'LINING', value: 'Durable textile lining' },
			{ label: 'BASE', value: 'Reinforced bottom panel' },
			{ label: 'WEIGHT', value: 'Lightweight' },
			{ label: 'SEASON', value: 'All-season' },
			{ label: 'ACTIVITY', value: 'Work / Travel / Everyday' },
			{ label: 'STYLE', value: 'Urban / Outdoor' },
			{ label: 'USE', value: 'Daily essentials and commuting' },
			{ label: 'CARE', value: 'Spot clean with damp cloth' },
		],
		description:
			'Spacious and durable tote bag inspired by the iconic Borealis design, offering organized storage for work, travel, and daily essentials.',
		img: id2_1,
		image: [id2_2, id2_3, id2_4, id2_5],
		linkText: 'More information ↗',
		linkUrl: '#',
	},

	{
		id: 3,
		brand: 'The North Face',
		title: 'Norm SE Hat',
		price: '$40',
		text: 'Classic everyday cap with minimalist design.',
		color: ['Black', 'Navy', 'Beige', 'White'],
		sizes: ['One Size'],
		details: [
			{ label: 'MATERIAL', value: 'Soft cotton-blend fabric' },
			{ label: 'FABRIC', value: 'Lightweight breathable textile' },
			{ label: 'FIT', value: 'Classic six-panel fit' },
			{ label: 'CROWN', value: 'Low-profile crown' },
			{ label: 'VISOR', value: 'Curved brim' },
			{ label: 'CLOSURE', value: 'Adjustable rear strap' },
			{ label: 'VENTILATION', value: 'Breathable eyelet panels' },
			{ label: 'LOGO', value: 'Embroidered front branding' },
			{ label: 'SWEATBAND', value: 'Comfort moisture-absorbing band' },
			{ label: 'ADJUSTMENT', value: 'Adjustable one-size fit' },
			{ label: 'SUN PROTECTION', value: 'Standard sun coverage' },
			{ label: 'CONSTRUCTION', value: 'Lightweight structured construction' },
			{ label: 'WEIGHT', value: 'Lightweight' },
			{ label: 'SEASON', value: 'Spring / Summer / Autumn' },
			{ label: 'ACTIVITY', value: 'Everyday / Travel / Outdoor' },
			{ label: 'STYLE', value: 'Casual / Streetwear' },
			{ label: 'PACKABILITY', value: 'Easy to carry' },
			{ label: 'CARE', value: 'Hand wash recommended' },
		],
		description:
			'Lightweight and comfortable cap designed for daily wear, combining simple styling with practical sun protection.',
		img: id3_1,
		image: [id3_2, id3_3, id3_4, id3_5],
		linkText: 'More information ↗',
		linkUrl: '#',
	},

	{
		id: 4,
		brand: 'The North Face',
		title: 'Base Camp™ Tote Pack',
		price: '$110',
		text: 'Hybrid carry solution for travel and urban use.',
		color: ['Black', 'Olive', 'Blue'],
		sizes: ['One Size'],
		details: [
			{ label: 'MATERIAL', value: 'Durable Base Camp™ material' },
			{ label: 'CONSTRUCTION', value: 'Heavy-duty reinforced construction' },
			{ label: 'DESIGN', value: 'Convertible tote-backpack hybrid' },
			{ label: 'CAPACITY', value: 'Large multi-use capacity' },
			{ label: 'MAIN COMPARTMENT', value: 'Large zippered main compartment' },
			{ label: 'ORGANIZATION', value: 'Multiple organizational pockets' },
			{ label: 'LAPTOP STORAGE', value: 'Padded internal laptop compartment' },
			{ label: 'BACK PANEL', value: 'Padded ergonomic back panel' },
			{ label: 'SHOULDER STRAPS', value: 'Adjustable backpack straps' },
			{ label: 'HANDLES', value: 'Reinforced tote handles' },
			{ label: 'CLOSURE', value: 'Secure full-length zipper' },
			{ label: 'CARRY OPTIONS', value: 'Tote / Backpack' },
			{ label: 'WATER RESISTANCE', value: 'Weather-resistant outer material' },
			{ label: 'HARDWARE', value: 'Durable hardware components' },
			{ label: 'WEIGHT', value: 'Midweight' },
			{ label: 'SEASON', value: 'All-season' },
			{ label: 'ACTIVITY', value: 'Travel / Commute / Everyday' },
			{ label: 'STYLE', value: 'Utility / Outdoor / Urban' },
			{ label: 'USE', value: 'Travel gear and daily essentials' },
			{ label: 'CARE', value: 'Wipe clean with damp cloth' },
		],
		description:
			'Convertible tote-backpack hybrid built from durable Base Camp material, designed for versatile carrying and heavy-duty everyday use.',
		img: id4_1,
		image: [id4_2, id4_3, id4_4, id4_5],
		linkText: 'More information ↗',
		linkUrl: '#',
	},

	{
		id: 5,
		brand: 'The North Face',
		title: 'Base Camp™ Lumbar',
		price: '$55',
		text: 'Compact waist bag for hands-free convenience.',
		color: ['Black', 'Red', 'Olive', 'Grey'],
		sizes: ['One Size'],
		details: [
			{ label: 'MATERIAL', value: 'Durable Base Camp™ fabric' },
			{ label: 'CONSTRUCTION', value: 'Compact reinforced construction' },
			{ label: 'CAPACITY', value: 'Small essentials capacity' },
			{ label: 'MAIN COMPARTMENT', value: 'Zippered main compartment' },
			{ label: 'SECONDARY POCKET', value: 'Front zip pocket' },
			{ label: 'WAIST STRAP', value: 'Adjustable webbing belt' },
			{ label: 'CLOSURE', value: 'Secure zip closures' },
			{ label: 'LINING', value: 'Durable textile lining' },
			{ label: 'CARRY STYLE', value: 'Waist / Crossbody carry' },
			{ label: 'ACCESS', value: 'Quick-access storage' },
			{ label: 'WATER RESISTANCE', value: 'Weather-resistant outer fabric' },
			{ label: 'HARDWARE', value: 'Durable buckle hardware' },
			{ label: 'FIT', value: 'Adjustable universal fit' },
			{ label: 'WEIGHT', value: 'Lightweight' },
			{ label: 'SEASON', value: 'All-season' },
			{ label: 'ACTIVITY', value: 'Travel / Hiking / Everyday' },
			{ label: 'STYLE', value: 'Utility / Outdoor / Streetwear' },
			{ label: 'USE', value: 'Phone, wallet, keys and essentials' },
			{ label: 'CARE', value: 'Wipe clean with damp cloth' },
		],
		description:
			'Durable lumbar pack designed for travel and outdoor activities, offering secure storage and easy access to essentials.',
		img: id5_1,
		image: [id5_2, id5_3, id5_4, id5_5],
		linkText: 'More information ↗',
		linkUrl: '#',
	},

	{
		id: 6,
		brand: 'The North Face',
		title: 'Berkeley Field Bag',
		price: '$45',
		text: 'Compact field bag for daily essentials.',
		color: ['Black', 'Brown', 'Green', 'Beige'],
		sizes: ['One Size'],
		details: [
			{ label: 'MATERIAL', value: 'Durable recycled polyester' },
			{ label: 'DESIGN', value: 'Retro-inspired shoulder bag' },
			{ label: 'CONSTRUCTION', value: 'Lightweight reinforced construction' },
			{ label: 'CAPACITY', value: 'Compact everyday capacity' },
			{ label: 'MAIN COMPARTMENT', value: 'Zippered main compartment' },
			{ label: 'POCKETS', value: 'Front and internal organization pockets' },
			{ label: 'SHOULDER STRAP', value: 'Adjustable shoulder strap' },
			{ label: 'CLOSURE', value: 'Secure zip closure' },
			{ label: 'LINING', value: 'Lightweight textile lining' },
			{ label: 'CARRY STYLE', value: 'Shoulder / Crossbody carry' },
			{ label: 'ACCESS', value: 'Quick-access front storage' },
			{ label: 'HARDWARE', value: 'Durable metal and plastic hardware' },
			{ label: 'FIT', value: 'Compact everyday profile' },
			{ label: 'WEIGHT', value: 'Lightweight' },
			{ label: 'SEASON', value: 'All-season' },
			{ label: 'ACTIVITY', value: 'Everyday / Travel / Urban' },
			{ label: 'STYLE', value: 'Retro / Casual / Outdoor' },
			{ label: 'USE', value: 'Small everyday essentials' },
			{ label: 'CARE', value: 'Spot clean with damp cloth' },
		],
		description:
			'Retro-inspired shoulder bag with modern functionality, ideal for carrying small essentials in a lightweight and organized form.',
		img: id6_1,
		image: [id6_2, id6_3, id6_4, id6_5],
		linkText: 'More information ↗',
		linkUrl: '#',
	},
]

export default shopData
