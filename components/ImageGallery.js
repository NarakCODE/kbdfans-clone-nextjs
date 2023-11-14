'use client';

import { urlFor } from '@/lib/client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import React, { useState } from 'react';

export default function ImageGallery({ images }) {
	const [current, setCurrent] = useState(0);
	return (
		<div className="col-span-5 ">
			<div className="w-full h-full">
				<div className="relative col-span-3 rounded-[--radius] overflow-hidden shadow-lg">
					<div>
						<Image
							src={urlFor(images[current]).url()}
							alt=""
							width={1920}
							height={1920}
							className="object-cover object-center"
						/>
					</div>
				</div>
			</div>

			<div className="grid grid-cols-5 gap-2 mt-2">
				{images.map((image, index) => (
					<div
						key={index}
						className={`rounded-[--radius] overflow-hidden cursor-pointer `}
						onClick={() => setCurrent(index)}
					>
						<Image
							src={urlFor(image).url()}
							alt=""
							width={1920}
							height={1920}
							className="object-cover object-center"
						/>
					</div>
				))}
			</div>
		</div>
	);
}
