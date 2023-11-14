'use client';
import { urlFor } from '@/lib/client';
import Image from 'next/image';
import { useEffect, useState } from 'react';

const CarouselImage = ({ Cimages }) => {
	const [changeImage, setChangeImage] = useState(0);

	useEffect(() => {
		setChangeImage(Math.floor(Math.random() * Cimages.carouselImages.length));
	}, [Cimages]);

	return (
		<div className="w-full lg:h-[600px] md:h-[300px] bg-black rounded-xl overflow-hidden">
			<Image
				src={urlFor(Cimages.carouselImages[changeImage]).url()}
				alt="banner image"
				width={1920}
				height={1080}
				className="w-full h-full object-cover object-center"
			/>
		</div>
	);
};

export default CarouselImage;
