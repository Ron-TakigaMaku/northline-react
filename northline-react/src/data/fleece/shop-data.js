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
		color: 'Black',
		sizes: ['S', 'M', 'L', 'XL'],
		details: [
			{ label: 'MATERIAL', value: '100% recycled polyester' },
			{ label: 'LINING', value: 'Soft polyester lining' },
			{ label: 'FIT', value: 'Oversized fit' },
			{ label: 'COLLAR', value: 'High mock neck' },
			{ label: 'CLOSURE', value: 'Full-length front zipper' },
			{ label: 'POCKETS', value: 'Front zip pockets' },
			{ label: 'HEM', value: 'Adjustable drawcord hem' },
			{ label: 'SLEEVES', value: 'Long sleeves with elastic cuffs' },
			{ label: 'TEXTURE', value: 'Soft sherpa fleece' },
			{ label: 'WEIGHT', value: 'Lightweight' },
			{ label: 'COLOR', value: 'Black / Beige' },
			{ label: 'SEASON', value: 'Spring / Autumn' },
			{ label: 'STYLE', value: 'Outdoor / Streetwear' },
			{ label: 'CARE', value: 'Machine wash cold' },
		],
		description:
			'The Vinteys Couture Colorblock Fleece Jacket combines a soft sherpa fleece texture with a distinctive colorblock design. The predominantly black construction is complemented by a curved beige panel across the upper section, creating a strong visual contrast. A high mock neck provides additional coverage, while the adjustable hem toggles allow the fit and silhouette to be customized. The embroidered chest branding adds a subtle finishing detail. Its relaxed proportions and lightweight construction make it a practical choice for transitional weather, everyday urban outfits, and layered looks.',
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
		color: 'Black',
		sizes: ['S', 'M', 'L', 'XL'],
		details: [
			{ label: 'MATERIAL', value: '100% recycled polyester' },
			{ label: 'FABRIC', value: 'Thick artificial sherpa fleece' },
			{ label: 'FIT', value: 'Regular fit' },
			{ label: 'COLLAR', value: 'High stand collar' },
			{ label: 'CLOSURE', value: 'Full-length front zipper' },
			{ label: 'POCKETS', value: 'Side hand pockets' },
			{ label: 'SLEEVES', value: 'Long sleeves' },
			{ label: 'LOGO', value: 'Oversized contrasting Swoosh' },
			{ label: 'TEXTURE', value: 'Dense and soft fleece' },
			{ label: 'WEIGHT', value: 'Midweight' },
			{ label: 'COLOR', value: 'Black' },
			{ label: 'SEASON', value: 'Autumn / Winter' },
			{ label: 'STYLE', value: 'Sport / Streetwear' },
			{ label: 'CARE', value: 'Machine wash cold' },
		],
		description:
			'The Nike Swoosh Full-Zip Sherpa Jacket is built around a thick artificial sherpa fleece construction that gives the piece a soft, textured appearance and a warmer feel. The full-length front zip makes it easy to put on and remove, while the classic silhouette keeps the jacket versatile for everyday outfits. The oversized contrasting Nike Swoosh extending across the front provides the main visual accent and gives the otherwise minimal black design a strong branded identity. The jacket works particularly well with casual streetwear, denim, cargo trousers, and other relaxed silhouettes.',
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
		color: 'Black',
		sizes: ['S', 'M', 'L', 'XL'],
		details: [
			{ label: 'MATERIAL', value: '100% recycled polyester' },
			{ label: 'FABRIC', value: 'Technical fleece' },
			{ label: 'FIT', value: 'Regular fit' },
			{ label: 'COLLAR', value: 'Stand collar' },
			{ label: 'CLOSURE', value: 'Full-length front zipper' },
			{ label: 'POCKETS', value: 'Zipped side pockets' },
			{ label: 'CHEST DETAIL', value: 'Embroidered logo' },
			{ label: 'SLEEVES', value: 'Long sleeves' },
			{ label: 'TEXTURE', value: 'Soft fleece construction' },
			{ label: 'WEIGHT', value: 'Midweight' },
			{ label: 'COLOR', value: 'Black' },
			{ label: 'SEASON', value: 'Autumn / Winter' },
			{ label: 'STYLE', value: 'Outdoor / Technical' },
			{ label: 'LAYERING', value: 'Designed for mid-layer use' },
			{ label: 'CARE', value: 'Machine wash cold' },
		],
		description:
			'The North Face Denali Fleece Jacket presents a clean and understated take on the classic fleece zip-up. Finished entirely in black, the jacket keeps its visual identity minimal, with the North Face logo embroidered on the left chest as the main branding element. The full-zip construction allows it to be worn independently or integrated into a layered outdoor outfit. Its straightforward silhouette makes it suitable for everyday urban wear while maintaining a recognizable technical outdoor aesthetic.',
		img: id3_4,
		image: [id3_1, id3_2, id3_3, id3_4],
		linkText: 'More information ↗',
		linkUrl: '#',
	},

	{
		id: 4,
		brand: 'The North Face',
		title: 'Fleece Zip-up with Chest Pocket',
		price: '$190',
		color: 'Black',
		sizes: ['S', 'M', 'L', 'XL'],
		details: [
			{ label: 'MATERIAL', value: '100% recycled polyester' },
			{ label: 'FABRIC', value: 'Dense fleece fabric' },
			{ label: 'FIT', value: 'Regular fit' },
			{ label: 'COLLAR', value: 'Stand collar' },
			{ label: 'CLOSURE', value: 'Full-length front zipper' },
			{ label: 'CHEST POCKET', value: 'Vertical zippered pocket' },
			{ label: 'SIDE POCKETS', value: 'Two side pockets' },
			{ label: 'SLEEVES', value: 'Long sleeves' },
			{ label: 'HEM', value: 'Straight hem' },
			{ label: 'TEXTURE', value: 'Soft textured fleece' },
			{ label: 'WEIGHT', value: 'Midweight' },
			{ label: 'COLOR', value: 'Black' },
			{ label: 'SEASON', value: 'Autumn / Winter' },
			{ label: 'STYLE', value: 'Outdoor / Utility' },
			{ label: 'LAYERING', value: 'Suitable as a mid-layer' },
			{ label: 'CARE', value: 'Machine wash cold' },
		],
		description:
			'This The North Face fleece zip-up combines a practical silhouette with additional storage in the form of a vertical zippered chest pocket. The pocket provides a convenient place for smaller everyday essentials while adding a functional element to the front of the jacket. The full-length zipper allows the fleece to be worn open or fully closed, while the simple black finish keeps the design versatile. Its balanced proportions make it suitable for technical outdoor outfits, casual streetwear, and layered looks during cooler conditions.',
		img: id4_1,
		image: [id4_1, id4_2, id4_3, id4_4, id4_5],
		linkText: 'More information ↗',
		linkUrl: '#',
	},

	{
		id: 5,
		brand: 'The North Face',
		title: 'Oversized Sherpa Fleece',
		price: '$200',
		color: 'Black',
		sizes: ['S', 'M', 'L', 'XL'],
		details: [
			{ label: 'MATERIAL', value: '100% recycled polyester' },
			{ label: 'FABRIC', value: 'Dense sherpa fleece' },
			{ label: 'FIT', value: 'Oversized fit' },
			{ label: 'COLLAR', value: 'High stand collar' },
			{ label: 'CLOSURE', value: 'Full-length front zipper' },
			{ label: 'CHEST PANEL', value: 'Contrasting fabric overlay' },
			{ label: 'POCKETS', value: 'Front zip pockets' },
			{ label: 'SLEEVES', value: 'Long sleeves' },
			{ label: 'HEM', value: 'Relaxed straight hem' },
			{ label: 'TEXTURE', value: 'Dense and soft sherpa' },
			{ label: 'WEIGHT', value: 'Midweight' },
			{ label: 'COLOR', value: 'Black' },
			{ label: 'SEASON', value: 'Autumn / Winter' },
			{ label: 'STYLE', value: 'Outdoor / Streetwear' },
			{ label: 'SILHOUETTE', value: 'Relaxed oversized silhouette' },
			{ label: 'CARE', value: 'Machine wash cold' },
		],
		description:
			'The North Face Oversized Sherpa Fleece gives the traditional fleece silhouette a more relaxed and contemporary appearance. Its oversized proportions create a loose and comfortable silhouette, while the dense sherpa fleece texture adds visual depth to the monochromatic black design. A contrasting chest overlay introduces a different material and breaks up the otherwise uniform appearance of the jacket. The relaxed construction makes it particularly suitable for layered outfits and modern outdoor-inspired streetwear.',
		img: id5_1,
		image: [id5_1, id5_2, id5_3, id5_4],
		linkText: 'More information ↗',
		linkUrl: '#',
	},
]

export default shopData
