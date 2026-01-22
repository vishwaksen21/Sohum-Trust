'use client';

import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from './ui/button';

/* ------------------ DATA ------------------ */

const slides = [
	{
		id: 1,
		subtitle: 'Sohum Trust',
		title: 'Nurturing Minds',
		text: 'Illuminating Futures through comprehensive educational advancement suitable for all.',
		image: '/children1.png',
	},
	{
		id: 2,
		subtitle: 'Fostering',
		title: 'Vocational Training',
		text: 'Empowering individuals with practical skills for a sustainable livelihood.',
		image: '/children2.png',
	},
	{
		id: 3,
		subtitle: 'Preserving',
		title: 'Our Heritage',
		text: 'Connecting the youth with our rich cultural traditions and values.',
		image: '/children3.png',
	},
];

export default function HeroSection() {
	const [index, setIndex] = useState(0);

	const next = useCallback(() => {
		setIndex((i) => (i + 1) % slides.length);
	}, []);

	const prev = () => {
		setIndex((i) => (i - 1 + slides.length) % slides.length);
	};

	useEffect(() => {
		const timer = setInterval(next, 5000);
		return () => clearInterval(timer);
	}, [next]);

	return (
		<div className='relative h-[600px] w-full overflow-hidden bg-[#FBF7F1] flex items-center justify-center'>
			{/* Background Blobs (Optional for aesthetic) */}
			<div className='absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-orange-100 rounded-full blur-3xl opacity-60' />
			<div className='absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-amber-100 rounded-full blur-3xl opacity-60' />

			<div className='container relative z-10 mx-auto px-4 h-full flex items-center'>
				<div className='relative w-full max-w-6xl mx-auto h-[450px] bg-white rounded-3xl shadow-2xl overflow-hidden grid grid-cols-1 md:grid-cols-2'>
					{/* Left Content */}
					<div className='p-8 md:p-12 flex flex-col justify-center space-y-6 relative z-10'>
						<AnimatePresence mode='wait'>
							<motion.div
								key={index}
								initial={{ opacity: 0, x: -20 }}
								animate={{ opacity: 1, x: 0 }}
								exit={{ opacity: 0, x: 20 }}
								transition={{ duration: 0.5 }}
							>
								<span className='inline-block py-1 px-3 rounded-full bg-orange-100 text-orange-600 text-xs font-bold tracking-widest uppercase mb-4'>
									{slides[index].subtitle}
								</span>
								<h1 className='text-4xl md:text-5xl font-extrabold text-slate-800 leading-tight mb-4'>
									{slides[index].title}
								</h1>
								<p className='text-gray-600 text-lg mb-8 leading-relaxed'>
									{slides[index].text}
								</p>
								<div className='flex gap-4'>
									<Button className='bg-[#E66A2C] hover:bg-[#d85f25] text-white rounded-full px-8 py-6 text-lg shadow-lg hover:shadow-xl transition-all'>
										Get Involved
									</Button>
								</div>
							</motion.div>
						</AnimatePresence>

						{/* Controls */}
						<div className='absolute bottom-8 left-8 md:left-12 flex gap-4'>
							<button
								onClick={prev}
								className='p-2 rounded-full border border-gray-200 hover:bg-gray-50 transition-colors'
							>
								<ChevronLeft className='w-5 h-5 text-gray-600' />
							</button>
							<button
								onClick={next}
								className='p-2 rounded-full border border-gray-200 hover:bg-gray-50 transition-colors'
							>
								<ChevronRight className='w-5 h-5 text-gray-600' />
							</button>
						</div>
					</div>

					{/* Right Image */}
					<div className='relative h-full hidden md:block overflow-hidden'>
						<AnimatePresence mode='wait'>
							<motion.div
								key={index}
								className='absolute inset-0'
								initial={{ opacity: 0, scale: 1.1 }}
								animate={{ opacity: 1, scale: 1 }}
								exit={{ opacity: 0 }}
								transition={{ duration: 0.7 }}
							>
								<div className='absolute inset-0 bg-gradient-to-r from-white/20 to-transparent z-10' />
								<img
									src={slides[index].image}
									alt={slides[index].title}
									className='w-full h-full object-cover'
								/>
							</motion.div>
						</AnimatePresence>
					</div>
				</div>
			</div>
		</div>
	);
}