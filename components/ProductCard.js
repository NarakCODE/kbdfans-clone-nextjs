'use client';

import { urlFor } from '@/lib/client';
import { AnimatePresence, MotionConfig, motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';

const ProductCard = ({ product }) => {
	const [isHover, setIsHover] = useState(false);

	return (
		<div className="flex flex-col">
			<Link
				href={`/product-detail/${product.slug}`}
				className="relative  overflow-hidden rounded-xl"
				onMouseEnter={() => setIsHover(true)}
				onMouseLeave={() => setIsHover(false)}
			>
				<MotionConfig>
					<AnimatePresence>
						<motion.div
							className="w-full h-full"
							initial={{ scale: 1.05 }}
							animate={{ scale: isHover ? 1 : 1.05 }}
							exit={{ scale: 1 }}
							transition={{ duration: 0.3 }}
						>
							<Image
								src={urlFor(product?.images[0].asset).url()}
								width={1920}
								height={1080}
								alt="product"
								className={`aspect-square object-cover object-center w-full h-full`}
							/>
						</motion.div>
						<motion.div
							className="w-full h-full absolute top-0 left-0"
							initial={{ scale: 1, opacity: 0 }}
							animate={{ scale: isHover ? 1.05 : 1, opacity: isHover ? 1 : 0 }}
							exit={{ scale: 1, opacity: 0 }}
							transition={{ duration: 0.3 }}
						>
							<Image
								src={urlFor(product?.images[1].asset).url()}
								width={1920}
								height={1080}
								alt="product"
								className=" w-full h-full aspect-square object-cover object-center"
							/>
						</motion.div>
					</AnimatePresence>
				</MotionConfig>
			</Link>

			<div className="mt-3 flex flex-col gap-4">
				<div className="flex flex-col gap-1 w-full">
					<h2 className="bg-gray-900 md:text-lg text-green-700 uppercase text-center w-full rounded-[--radius] shadow text-md">
						🚀 In stock
					</h2>
					<h2 className="bg-gray-900 md:text-lg text-blue-600 uppercase text-center w-full rounded-[--radius] shadow text-md">
						🛒 pre-order
					</h2>
				</div>

				<div className="flex flex-col">
					<h2 className="md:text-sm text-xs text-center">{product?.name}</h2>
					{/* <PortableText value={product?.description} /> */}
					<p className="font-bold text-lg md:text-xl text-center">
						${product?.price}
					</p>
				</div>
			</div>
		</div>
	);
};

export default ProductCard;
