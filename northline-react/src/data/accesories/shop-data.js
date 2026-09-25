// id1
import id1_1 from '@/assets/image/accesories/shop/id1/1.jpg'
import id1_2 from '@/assets/image/accesories/shop/id1/2.jpg'
import id1_3 from '@/assets/image/accesories/shop/id1/3.jpg'
import id1_4 from '@/assets/image/accesories/shop/id1/4.jpg'
// import t from '@/assets/image/accesories/shop/id1/t.jpg'
// import tt from '@/assets/image/accesories/shop/id1/tt.jpg'
// id2
import id2_1 from '@/assets/image/accesories/shop/id2/1.png'
import id2_2 from '@/assets/image/accesories/shop/id2/2.png'
import id2_3 from '@/assets/image/accesories/shop/id2/3.jpg'
// id3
import id3_1 from '@/assets/image/accesories/shop/id3/1.jpg'
import id3_2 from '@/assets/image/accesories/shop/id3/2.jpg'
import id3_3 from '@/assets/image/accesories/shop/id3/3.jpg'
// id4
import id4_1 from '@/assets/image/accesories/shop/id4/1.jpg'
import id4_2 from '@/assets/image/accesories/shop/id4/2.jpg'
import id4_3 from '@/assets/image/accesories/shop/id4/3.jpg'
// id5
import id5_1 from '@/assets/image/accesories/shop/id5/1.jpg'
import id5_2 from '@/assets/image/accesories/shop/id5/2.jpg'
import id5_3 from '@/assets/image/accesories/shop/id5/3.jpg'
// id6
import id6_1 from '@/assets/image/accesories/shop/id6/1.jpg'
import id6_2 from '@/assets/image/accesories/shop/id6/2.jpg'
import id6_3 from '@/assets/image/accesories/shop/id6/3.jpg'

const shopData = [
	{
		id: 1,
		brand: 'The North Face',
		title: 'Women’s Class V Brimmer Hat',
		price: '$55',
		color: 'Black',
		sizes: ['S', 'M', 'L', 'XL'],
		text: 'Lightweight sun protection for active outdoor days.',
		details: [
			{ label: 'MATERIAL', value: 'Lightweight recycled polyester' },
			{ label: 'FABRIC', value: 'Breathable quick-drying fabric' },
			{ label: 'FIT', value: 'Relaxed outdoor fit' },
			{ label: 'BRIM', value: 'Wide protective brim' },
			{ label: 'SUN PROTECTION', value: 'UPF-rated fabric' },
			{ label: 'MOISTURE CONTROL', value: 'Moisture-wicking' },
			{ label: 'DRYING', value: 'Quick-drying construction' },
			{ label: 'VENTILATION', value: 'Breathable construction' },
			{ label: 'ADJUSTMENT', value: 'Adjustable chin cord' },
			{ label: 'PACKABILITY', value: 'Easy to pack and carry' },
			{ label: 'WEIGHT', value: 'Lightweight' },
			{ label: 'SEASON', value: 'Spring / Summer' },
			{ label: 'ACTIVITY', value: 'Hiking / Travel / Outdoor' },
			{ label: 'STYLE', value: 'Outdoor / Casual' },
			{ label: 'WEATHER', value: 'Warm and sunny conditions' },
			{ label: 'CARE', value: 'Hand wash recommended' },
		],
		description:
			'Breathable brim hat designed to provide reliable UV protection and comfort during hiking, travel, and everyday summer wear.',
		img: id1_1,
		image: [id1_1, id1_2, id1_3, id1_4],
		linkText: 'More information ↗',
		linkUrl: '#',
	},

	{
		id: 2,
		brand: 'The North Face',
		title: 'Borealis Tote',
		price: '$90',
		color: 'Black',
		sizes: ['S', 'M', 'L', 'XL'],
		text: 'Everyday tote built for durability and versatility.',
		details: [
			{ label: 'MATERIAL', value: 'Durable recycled polyester' },
			{ label: 'CONSTRUCTION', value: 'Structured reinforced construction' },
			{ label: 'CAPACITY', value: 'Large everyday capacity' },
			{ label: 'MAIN COMPARTMENT', value: 'Spacious main storage area' },
			{ label: 'ORGANIZATION', value: 'Multiple internal storage sections' },
			{ label: 'POCKETS', value: 'Exterior and interior pockets' },
			{ label: 'CLOSURE', value: 'Secure zip closure' },
			{ label: 'HANDLES', value: 'Reinforced carry handles' },
			{ label: 'CARRY STYLE', value: 'Hand carry / Shoulder carry' },
			{ label: 'LAPTOP STORAGE', value: 'Dedicated padded compartment' },
			{ label: 'LINING', value: 'Durable textile lining' },
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
		image: [id2_1, id2_2, id2_3],
		linkText: 'More information ↗',
		linkUrl: '#',
	},

	{
		id: 3,
		brand: 'The North Face',
		title: 'Norm SE Hat',
		price: '$40',
		color: 'Black',
		sizes: ['S', 'M', 'L', 'XL'],
		text: 'Classic everyday cap with minimalist design.',
		details: [
			{ label: 'MATERIAL', value: 'Soft cotton-blend fabric' },
			{ label: 'FABRIC', value: 'Lightweight breathable textile' },
			{ label: 'FIT', value: 'Classic six-panel fit' },
			{ label: 'CROWN', value: 'Structured low-profile crown' },
			{ label: 'VISOR', value: 'Curved brim' },
			{ label: 'CLOSURE', value: 'Adjustable rear strap' },
			{ label: 'VENTILATION', value: 'Breathable eyelet panels' },
			{ label: 'LOGO', value: 'Embroidered front branding' },
			{ label: 'SUN PROTECTION', value: 'Standard UV coverage' },
			{ label: 'INTERIOR', value: 'Comfort sweatband' },
			{ label: 'WEIGHT', value: 'Lightweight' },
			{ label: 'SEASON', value: 'Spring / Summer / Autumn' },
			{ label: 'ACTIVITY', value: 'Everyday / Travel / Outdoor' },
			{ label: 'STYLE', value: 'Casual / Streetwear' },
			{ label: 'FIT ADJUSTMENT', value: 'Adjustable one-size design' },
			{ label: 'CARE', value: 'Hand wash recommended' },
		],
		description:
			'Lightweight and comfortable cap designed for daily wear, combining simple styling with practical sun protection.',
		img: id3_1,
		image: [id3_1, id3_2, id3_3],
		linkText: 'More information ↗',
		linkUrl: '#',
	},

	{
		id: 4,
		brand: 'The North Face',
		title: 'Base Camp™ Tote Pack',
		price: '$110',
		color: 'Black',
		sizes: ['S', 'M', 'L', 'XL'],
		text: 'Hybrid carry solution for travel and urban use.',
		details: [
			{ label: 'MATERIAL', value: 'Durable Base Camp™ material' },
			{ label: 'CONSTRUCTION', value: 'Heavy-duty reinforced construction' },
			{ label: 'DESIGN', value: 'Convertible tote-backpack hybrid' },
			{ label: 'CAPACITY', value: 'Large multi-use capacity' },
			{ label: 'MAIN COMPARTMENT', value: 'Large zippered compartment' },
			{ label: 'SECONDARY STORAGE', value: 'Multiple organizational pockets' },
			{ label: 'BACK PANEL', value: 'Padded back panel' },
			{ label: 'SHOULDER STRAPS', value: 'Adjustable backpack straps' },
			{ label: 'HANDLES', value: 'Reinforced tote handles' },
			{ label: 'CLOSURE', value: 'Full-length zipper closure' },
			{ label: 'WATER RESISTANCE', value: 'Weather-resistant outer material' },
			{ label: 'HARDWARE', value: 'Durable metal hardware' },
			{ label: 'WEIGHT', value: 'Midweight' },
			{ label: 'SEASON', value: 'All-season' },
			{ label: 'ACTIVITY', value: 'Travel / Commute / Everyday' },
			{ label: 'STYLE', value: 'Utility / Outdoor / Urban' },
			{ label: 'CARRY OPTIONS', value: 'Tote / Backpack' },
			{ label: 'CARE', value: 'Wipe clean with damp cloth' },
		],
		description:
			'Convertible tote-backpack hybrid built from durable Base Camp material, designed for versatile carrying and heavy-duty everyday use.',
		img: id4_1,
		image: [id4_1, id4_2, id4_3],
		linkText: 'More information ↗',
		linkUrl: '#',
	},

	{
		id: 5,
		brand: 'The North Face',
		title: 'Base Camp™ Lumbar',
		price: '$55',
		color: 'Black',
		sizes: ['S', 'M', 'L', 'XL'],
		text: 'Compact waist bag for hands-free convenience.',
		details: [
			{ label: 'MATERIAL', value: 'Durable Base Camp™ fabric' },
			{ label: 'CONSTRUCTION', value: 'Reinforced lightweight construction' },
			{ label: 'CAPACITY', value: 'Compact everyday capacity' },
			{ label: 'MAIN COMPARTMENT', value: 'Zippered main compartment' },
			{ label: 'SECONDARY POCKET', value: 'Front zip pocket' },
			{ label: 'WAIST STRAP', value: 'Adjustable webbing belt' },
			{ label: 'CLOSURE', value: 'Secure zip closures' },
			{ label: 'LINING', value: 'Durable textile lining' },
			{ label: 'ACCESS', value: 'Quick-access storage' },
			{ label: 'CARRY STYLE', value: 'Waist / Crossbody carry' },
			{ label: 'WATER RESISTANCE', value: 'Weather-resistant outer fabric' },
			{ label: 'HARDWARE', value: 'Durable buckle hardware' },
			{ label: 'WEIGHT', value: 'Lightweight' },
			{ label: 'SEASON', value: 'All-season' },
			{ label: 'ACTIVITY', value: 'Travel / Hiking / Everyday' },
			{ label: 'STYLE', value: 'Utility / Outdoor' },
			{ label: 'USE', value: 'Phone, wallet, keys and essentials' },
			{ label: 'CARE', value: 'Wipe clean with damp cloth' },
		],
		description:
			'Durable lumbar pack designed for travel and outdoor activities, offering secure storage and easy access to essentials.',
		img: id5_1,
		image: [id5_1, id5_2, id5_3],
		linkText: 'More information ↗',
		linkUrl: '#',
	},

	{
		id: 6,
		brand: 'The North Face',
		title: 'Berkeley Field Bag',
		price: '$45',
		color: 'Black',
		sizes: ['S', 'M', 'L', 'XL'],
		text: 'Compact field bag for daily essentials.',
		details: [
			{ label: 'MATERIAL', value: 'Durable recycled polyester' },
			{ label: 'DESIGN', value: 'Retro-inspired shoulder bag' },
			{ label: 'FIT', value: 'Compact everyday profile' },
			{ label: 'CAPACITY', value: 'Small essentials capacity' },
			{ label: 'MAIN COMPARTMENT', value: 'Zippered main compartment' },
			{ label: 'POCKETS', value: 'Multiple organizational pockets' },
			{ label: 'SHOULDER STRAP', value: 'Adjustable shoulder strap' },
			{ label: 'CLOSURE', value: 'Secure zip closure' },
			{ label: 'LINING', value: 'Lightweight textile lining' },
			{ label: 'CARRY STYLE', value: 'Shoulder / Crossbody carry' },
			{ label: 'ACCESS', value: 'Quick-access front storage' },
			{ label: 'HARDWARE', value: 'Durable metal and plastic hardware' },
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
		image: [id6_1, id6_2, id6_3],
		linkText: 'More information ↗',
		linkUrl: '#',
	},
]

export default shopData
