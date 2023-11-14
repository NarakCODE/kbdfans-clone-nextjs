import ProductCard from '@/components/ProductCard';
import { client } from '@/lib/client';
import { AnimatePresence, motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const getData = async (category) => {
	const query = `*[_type == 'product' && category->name == '${category}']{
		_id,
		name,
		images,
		price,
		"categoryName": category->name,
		"slug": slug.current
	}`;

	const data = await client.fetch(query);

	return data;
};

const CategoryPage = async ({ params }) => {
	const data = await getData(params.category);

	return (
		<div>
			<div className="flex flex-col items-center gap-2 my-10">
				<h2 className="font-bold md:text-3xl text-xl text-center uppercase">
					Explore our {params.category}
				</h2>
				<p className="text-md text-slate-500">
					{data.length} product{data.length > 1 ? 's' : ''}
				</p>
			</div>

			<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 ">
				{data?.map((product) => (
					<ProductCard product={product} key={product._id} />
				))}
			</div>
		</div>
	);
};

export default CategoryPage;
