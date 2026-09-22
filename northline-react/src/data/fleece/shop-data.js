//id1
import id1_1 from '@/assets/image/fleece/shop/id1/1.jpg'
import id1_2 from '@/assets/image/fleece/shop/id1/2.jpg'
import id1_3 from '@/assets/image/fleece/shop/id1/3.jpg'
import id1_4 from '@/assets/image/fleece/shop/id1/4.jpg'
//id2
import id2_1 from '@/assets/image/fleece/shop/id2/1(1).jpg'
import id2_2 from '@/assets/image/fleece/shop/id2/2(1).jpg'
import id2_3 from '@/assets/image/fleece/shop/id2/3(1).jpg'
import id2_4 from '@/assets/image/fleece/shop/id2/4(1).jpg'
//id3
import id3_1 from '@/assets/image/fleece/shop/id3/1(2).jpg'
import id3_2 from '@/assets/image/fleece/shop/id3/2(2).jpg'
import id3_3 from '@/assets/image/fleece/shop/id3/3(2).jpg'
import id3_4 from '@/assets/image/fleece/shop/id3/4(2).jpg'
//id4
import id4_1 from '@/assets/image/fleece/shop/id4/1(3).jpg'
import id4_2 from '@/assets/image/fleece/shop/id4/2(3).jpg'
import id4_3 from '@/assets/image/fleece/shop/id4/3.jpg'
import id4_4 from '@/assets/image/fleece/shop/id4/4.png'
import id4_5 from '@/assets/image/fleece/shop/id4/5.png'
//id5
import id5_1 from '@/assets/image/fleece/shop/id5/1.png'
import id5_2 from '@/assets/image/fleece/shop/id5/2(4).jpg'
import id5_3 from '@/assets/image/fleece/shop/id5/3(3).jpg'
import id5_4 from '@/assets/image/fleece/shop/id5/4(3).jpg'

const shopData = [
	{
		id: 1,
		brand: 'Vinteys Couture',
		title: 'Colorblock Fleece Jacket',
		price: '$90',
		description:
			"This is an oversized sherpa fleece jacket in brown with a distinctive curved beige colorblock panel and the brand's embroidery on the chest. It features a high mock neck and adjustable toggles at the hem",
		img: id1_1,
		image: [id1_1, id1_2, id1_4, id1_3],
		linkText: 'More information ↗',
		linkUrl: '#',
	},
	{
		id: 2,
		brand: 'Nike',
		title: 'Swoosh Full-Zip Sherpa Jacket',
		price: '$120',
		description:
			'A piece made of thick artificial sherpa fleece, characterized by a large contrasting Nike "Swoosh" logo spanning across the front.',
		img: id2_1,
		image: [id2_1, id2_2, id2_3, id2_4],
		linkText: 'More information ↗',
		linkUrl: '#',
	},
	{
		id: 3,
		brand: 'The North Face',
		title: 'Denali Fleece Jacket',
		price: '$170',
		description:
			"A classic all-black fleece zip-up jacket featuring the brand's logo embroidered on the left chest, designed for outdoor activities and daily wear.",
		img: id3_4,
		image: [id3_1, id3_2, id3_3, id3_4],
		linkText: 'More information ↗',
		linkUrl: '#',
	},
	{
		id: 4,
		brand: 'The North Face',
		title: 'Fleece Zip-up with Chest Pocket.',
		price: '$190',
		description:
			'A fleece jacket equipped with an additional vertical zippered chest pocket, increasing its functionality as a mid-layer for insulation.',
		img: id4_1,
		image: [id4_1, id4_2, id4_3, id4_4, id4_5],
		linkText: 'More information ↗',
		linkUrl: '#',
	},
	{
		id: 5,
		brand: 'The North Face',
		title: 'Oversized Sherpa Fleece.',
		price: '$200',
		description:
			'A modern oversized version of The North Face fleece jacket with a contrasting chest overlay made of a different fabric; it features a relaxed fit and a dense fleece texture.',
		img: id5_1,
		image: [id5_1, id5_2, id5_3, id5_4],
		linkText: 'More information ↗',
		linkUrl: '#',
	},
]

export default shopData
