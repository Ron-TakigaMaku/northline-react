// id1
import id1_1 from '@/assets/image/accesories/shop/id1/1.jpg'
import id1_2 from '@/assets/image/accesories/shop/id1/2.jpg'
import id1_3 from '@/assets/image/accesories/shop/id1/3.jpg'
import id1_4 from '@/assets/image/accesories/shop/id1/4.jpg'
import t from '@/assets/image/accesories/shop/id1/t.jpg'
import tt from '@/assets/image/accesories/shop/id1/tt.jpg'
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
		text: 'Lightweight sun protection for active outdoor days.',
		description:
			'Breathable brim hat designed to provide reliable UV protection and comfort during hiking, travel, and everyday summer wear.',
		img: t,
		image: [t, tt, id1_1, id1_2, id1_3, id1_4],
		linkText: 'More information ↗',
		linkUrl: '#',
	},
	{
		id: 2,
		brand: 'The North Face',
		title: 'Borealis Tote',
		price: '$90',
		text: 'Everyday tote built for durability and versatility.',
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
		text: 'Classic everyday cap with minimalist design.',
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
		text: 'Hybrid carry solution for travel and urban use.',
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
		text: 'Compact waist bag for hands-free convenience.',
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
		text: 'Compact field bag for daily essentials.',
		description:
			'Retro-inspired shoulder bag with modern functionality, ideal for carrying small essentials in a lightweight and organized form.',
		img: id6_1,
		image: [id6_1, id6_2, id6_3],
		linkText: 'More information ↗',
		linkUrl: '#',
	},
]

export default shopData
