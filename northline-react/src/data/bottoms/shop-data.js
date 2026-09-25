// id1
import id1_1 from '@/assets/image/bottoms/shop/id1/1.jpg'
// import id1_2 from '@/assets/image/bottoms/shop/id1/2.jpg'
import id1_3 from '@/assets/image/bottoms/shop/id1/3.jpg'
import id1_4 from '@/assets/image/bottoms/shop/id1/4.jpg'
import id1_5 from '@/assets/image/bottoms/shop/id1/5.jpg'
// id2
import id2_1 from '@/assets/image/bottoms/shop/id2/1.jpg'
import id2_2 from '@/assets/image/bottoms/shop/id2/2.jpg'
import id2_3 from '@/assets/image/bottoms/shop/id2/3.jpg'
import id2_4 from '@/assets/image/bottoms/shop/id2/4.jpg'
import id2_5 from '@/assets/image/bottoms/shop/id2/5.jpg'
// id3
import id3_1 from '@/assets/image/bottoms/shop/id3/1.jpg'
import id3_2 from '@/assets/image/bottoms/shop/id3/2.jpg'
import id3_3 from '@/assets/image/bottoms/shop/id3/3.jpg'
import id3_4 from '@/assets/image/bottoms/shop/id3/4.jpg'
import id3_5 from '@/assets/image/bottoms/shop/id3/5.jpg'
// id4
import id4_1 from '@/assets/image/bottoms/shop/id4/1.jpg'
import id4_2 from '@/assets/image/bottoms/shop/id4/2.jpg'
import id4_3 from '@/assets/image/bottoms/shop/id4/3.jpg'
import id4_4 from '@/assets/image/bottoms/shop/id4/4.jpg'
import id4_5 from '@/assets/image/bottoms/shop/id4/5.jpg'
// id5
import id5_1 from '@/assets/image/bottoms/shop/id5/1.jpg'
import id5_2 from '@/assets/image/bottoms/shop/id5/2.jpg'
import id5_3 from '@/assets/image/bottoms/shop/id5/3.jpg'
import id5_4 from '@/assets/image/bottoms/shop/id5/4.jpg'
import id5_5 from '@/assets/image/bottoms/shop/id5/5.jpg'
// id6
import id6_1 from '@/assets/image/bottoms/shop/id6/1.jpg'
import id6_2 from '@/assets/image/bottoms/shop/id6/2.jpg'
import id6_3 from '@/assets/image/bottoms/shop/id6/3.jpg'
import id6_4 from '@/assets/image/bottoms/shop/id6/4.jpg'
import id6_5 from '@/assets/image/bottoms/shop/id6/5.jpg'

const shopData = [
	{
		id: 1,
		brand: 'The North Face',
		title: "Women's Aphrodite Arise Wide-Leg Pants",
		price: '$100',
		color: 'Black',
		sizes: ['S', 'M', 'L', 'XL'],
		text: 'Versatile wide-leg trail pants designed for active women who move between outdoor adventures and everyday life...',
		details: [
			{ label: 'MATERIAL', value: 'Lightweight stretch fabric' },
			{ label: 'FABRIC', value: 'Moisture-wicking performance fabric' },
			{ label: 'FIT', value: 'Relaxed wide-leg fit' },
			{ label: 'WAIST', value: 'Elastic waistband' },
			{ label: 'WAISTBAND', value: 'Adjustable drawcord' },
			{ label: 'POCKETS', value: 'Secure zip pocket' },
			{ label: 'STRETCH', value: 'Four-way stretch' },
			{ label: 'FINISH', value: 'DWR water-repellent finish' },
			{ label: 'SUN PROTECTION', value: 'UPF 40+' },
			{ label: 'MOISTURE CONTROL', value: 'Moisture-wicking' },
			{ label: 'LEG', value: 'Wide-leg silhouette' },
			{ label: 'WEIGHT', value: 'Lightweight' },
			{ label: 'SEASON', value: 'Spring / Summer / Autumn' },
			{ label: 'ACTIVITY', value: 'Hiking / Travel / Everyday' },
			{ label: 'STYLE', value: 'Outdoor / Casual' },
			{ label: 'CARE', value: 'Machine wash cold' },
		],
		description:
			'Made from lightweight, moisture-wicking stretch fabric with a DWR finish that repels light rain and morning dew. UPF 40+ sun protection keeps you covered on exposed ridgelines and open trails. The relaxed wide-leg silhouette allows full freedom of movement, while a secure zip pocket and elastic waistband keep things comfortable and practical all day long. Ideal for hiking, travel, and casual wear.',
		img: id1_5,
		image: [id1_1, id1_3, id1_4],
		linkText: 'More information ↗',
		linkUrl: '#',
	},

	{
		id: 2,
		brand: 'The North Face',
		title: "Women's Summit Series Pacesetter 3 Shorts",
		price: '$80',
		color: 'Black',
		sizes: ['S', 'M', 'L', 'XL'],
		text: 'Performance trail shorts built for serious runners tackling long distances and technical terrain...',
		details: [
			{ label: 'MATERIAL', value: 'FlashDry-XD™ fabric' },
			{ label: 'FIT', value: 'Athletic performance fit' },
			{ label: 'INSEAM', value: '3 inches' },
			{ label: 'WAIST', value: 'Elastic performance waistband' },
			{ label: 'WAISTBAND', value: 'Dual zip-pocket construction' },
			{ label: 'POCKETS', value: 'Two secure zip pockets' },
			{ label: 'MOISTURE CONTROL', value: 'Advanced moisture-wicking' },
			{ label: 'DRYING', value: 'Quick-drying fabric' },
			{ label: 'STRETCH', value: 'Performance stretch' },
			{ label: 'WEIGHT', value: 'Ultralight' },
			{ label: 'MOBILITY', value: 'Maximum range of motion' },
			{ label: 'SERIES', value: 'Summit Series' },
			{ label: 'SEASON', value: 'Spring / Summer' },
			{ label: 'ACTIVITY', value: 'Trail Running / Racing' },
			{ label: 'TERRAIN', value: 'Technical Trails' },
			{ label: 'CARE', value: 'Machine wash cold' },
		],
		description:
			"Constructed with FlashDry-XD™ fabric that aggressively wicks sweat and dries remarkably fast, so you stay light and comfortable even on the hardest efforts. A dual zip-pocket waistband securely holds your phone, gels, and keys without bouncing. The 3` inseam offers maximum leg freedom, and the lightweight construction means you'll barely notice them on the run. From 5K road races to mountain ultras — these shorts keep up.",
		img: id2_5,
		image: [id2_1, id2_2, id2_3, id2_4],
		linkText: 'More information ↗',
		linkUrl: '#',
	},

	{
		id: 3,
		brand: 'The North Face',
		title: "Women's Aphrodite Arise Joggers",
		price: '$95',
		color: 'Black',
		sizes: ['S', 'M', 'L', 'XL'],
		text: 'The go-anywhere jogger that bridges the gap between trail performance and everyday comfort...',
		details: [
			{ label: 'MATERIAL', value: 'Soft four-way stretch fabric' },
			{ label: 'FIT', value: 'Relaxed tapered fit' },
			{ label: 'WAIST', value: 'Elastic waistband' },
			{ label: 'WAISTBAND', value: 'Adjustable drawcord' },
			{ label: 'POCKETS', value: 'Secure zip hand pocket' },
			{ label: 'LEG', value: 'Tapered ankle cut' },
			{ label: 'STRETCH', value: 'Four-way stretch' },
			{ label: 'FINISH', value: 'DWR water-repellent finish' },
			{ label: 'MOISTURE', value: 'Light moisture resistance' },
			{ label: 'PACKABILITY', value: 'Easy to pack into a day pack' },
			{ label: 'WEIGHT', value: 'Lightweight' },
			{ label: 'MOBILITY', value: 'Flexible unrestricted movement' },
			{ label: 'SEASON', value: 'Spring / Autumn' },
			{ label: 'ACTIVITY', value: 'Hiking / Travel / Everyday' },
			{ label: 'STYLE', value: 'Outdoor / Casual' },
			{ label: 'CARE', value: 'Machine wash cold' },
		],
		description:
			"Crafted from a soft, four-way stretch fabric that moves naturally with your body, whether you're warming up before a hike or running post-trail errands. A DWR finish sheds light moisture, and the tapered ankle cut keeps the fit clean and modern. Features a secure zip hand pocket and an adjustable drawcord waistband for a personalised fit. Lightweight enough to stuff into a day pack as a backup layer — versatile enough to wear everywhere.",
		img: id3_5,
		image: [id3_1, id3_2, id3_3, id3_4],
		linkText: 'More information ↗',
		linkUrl: '#',
	},

	{
		id: 4,
		brand: 'The North Face',
		title: "Women's Summit Series Pro 120 Tights",
		price: '$110',
		color: 'Black',
		sizes: ['S', 'M', 'L', 'XL'],
		text: 'Summit Series tights engineered for high-output activities where every detail matters...',
		details: [
			{ label: 'MATERIAL', value: '120-weight stretch fabric' },
			{ label: 'FIT', value: 'Athletic compression fit' },
			{ label: 'RISE', value: 'High-rise waistband' },
			{ label: 'WAISTBAND', value: 'Secure elastic waistband' },
			{ label: 'SEAMS', value: 'Flatlock low-profile seams' },
			{ label: 'COMPRESSION', value: 'Targeted muscle support' },
			{ label: 'STRETCH', value: 'Four-way stretch' },
			{ label: 'POCKET', value: 'Rear zip pocket' },
			{ label: 'CHAFING CONTROL', value: 'Flat seam construction' },
			{ label: 'MOBILITY', value: 'Full range of motion' },
			{ label: 'FABRIC WEIGHT', value: '120-weight' },
			{ label: 'WEIGHT', value: 'Lightweight' },
			{ label: 'SERIES', value: 'Summit Series' },
			{ label: 'SEASON', value: 'All-season' },
			{ label: 'ACTIVITY', value: 'Trail Running / Climbing / Ski Touring' },
			{ label: 'STYLE', value: 'Technical Performance' },
			{ label: 'CARE', value: 'Machine wash cold' },
		],
		description:
			'The four-way stretch, 120-weight fabric delivers exceptional range of motion without sagging or bunching, even after hours of movement. Flatlock seams sit flat against the skin to eliminate chafing on long efforts, while targeted compression panels support key muscle groups and speed up recovery. A high-rise waistband stays put during dynamic movement, and a rear zip pocket safely stores your essentials. Suited for trail running, ski touring, climbing approaches, or intense gym sessions.',
		img: id4_5,
		image: [id4_1, id4_2, id4_3, id4_4],
		linkText: 'More information ↗',
		linkUrl: '#',
	},

	{
		id: 5,
		brand: 'The North Face',
		title: "Women's Freedom Insulated Pants",
		price: '$140',
		color: 'Black',
		sizes: ['S', 'M', 'L', 'XL'],
		text: 'All-mountain ski and snowboard pants built to handle real winter conditions without sacrificing mobility...',
		details: [
			{ label: 'SHELL', value: 'DryVent™ 2L waterproof shell' },
			{ label: 'INSULATION', value: 'Heatseeker™ Eco insulation' },
			{ label: 'INSULATION TYPE', value: 'Recycled synthetic insulation' },
			{ label: 'FIT', value: 'Regular articulated fit' },
			{ label: 'WATERPROOFING', value: 'Fully waterproof construction' },
			{ label: 'BREATHABILITY', value: 'Breathable shell fabric' },
			{ label: 'SEAMS', value: 'Fully taped seams' },
			{ label: 'WAIST', value: 'Adjustable waist tabs' },
			{ label: 'KNEES', value: 'Articulated knees' },
			{ label: 'GAITERS', value: 'Integrated snow gaiters' },
			{ label: 'WEATHER', value: 'Wind and snow protection' },
			{ label: 'INSULATION', value: 'Warmth in wet conditions' },
			{ label: 'WEIGHT', value: 'Midweight' },
			{ label: 'SEASON', value: 'Winter' },
			{ label: 'ACTIVITY', value: 'Skiing / Snowboarding' },
			{ label: 'TERRAIN', value: 'All-mountain' },
			{ label: 'STYLE', value: 'Technical / Snow Sports' },
			{ label: 'CARE', value: 'Machine wash cold' },
		],
		description:
			'The DryVent™ 2L shell is fully waterproof and breathable, blocking out wind, wet snow, and cold air while letting excess heat escape during hard charging runs. Heatseeker™ Eco insulation — made from recycled materials — delivers reliable warmth even when wet, so you stay comfortable from the first lift to last call in the lodge. Articulated knees allow natural movement in deep powder and on groomed runs alike. Fully taped seams, adjustable waist tabs, and integrated snow gaiters round out the feature set. Everything you need for a full day on the mountain.',
		img: id5_5,
		image: [id5_1, id5_2, id5_3, id5_4],
		linkText: 'More information ↗',
		linkUrl: '#',
	},

	{
		id: 6,
		brand: 'The North Face',
		title: "Women's Basin Skort",
		price: '$90',
		color: 'Black',
		sizes: ['S', 'M', 'L', 'XL'],
		text: 'A trail-ready skort designed for warm-weather hiking, outdoor yoga, and active travel...',
		details: [
			{ label: 'MATERIAL', value: 'Lightweight stretch fabric' },
			{ label: 'FIT', value: 'Relaxed active fit' },
			{ label: 'DESIGN', value: 'Skirt with built-in stretch brief liner' },
			{ label: 'LINER', value: 'Integrated stretch brief' },
			{ label: 'WAIST', value: 'Elastic waistband' },
			{ label: 'POCKETS', value: 'Side storage pockets' },
			{ label: 'STRETCH', value: 'Four-way performance stretch' },
			{ label: 'MOISTURE CONTROL', value: 'Moisture-wicking fabric' },
			{ label: 'DRYING', value: 'Quick-drying construction' },
			{ label: 'COVERAGE', value: 'Built-in full-coverage liner' },
			{ label: 'MOBILITY', value: 'Unrestricted movement' },
			{ label: 'PACKABILITY', value: 'Lightweight and easy to pack' },
			{ label: 'WEIGHT', value: 'Lightweight' },
			{ label: 'SEASON', value: 'Spring / Summer' },
			{ label: 'ACTIVITY', value: 'Hiking / Yoga / Travel' },
			{ label: 'STYLE', value: 'Outdoor / Activewear' },
			{ label: 'WEATHER', value: 'Warm-weather use' },
			{ label: 'CARE', value: 'Machine wash cold' },
		],
		description:
			"The outer skirt gives a casual, feminine silhouette while a built-in stretch brief liner underneath provides full coverage and moves freely with every step. Quick-dry, moisture-wicking fabric keeps you cool and comfortable in the heat, and the lightweight construction makes it an easy pack into any bag. Side pockets offer convenient storage for small essentials on the go. Whether you're tackling a dusty summer trail, exploring a new city, or spending the day at camp — the Basin Skort adapts effortlessly.",
		img: id6_5,
		image: [id6_1, id6_2, id6_3, id6_4],
		linkText: 'More information ↗',
		linkUrl: '#',
	},
]

export default shopData
