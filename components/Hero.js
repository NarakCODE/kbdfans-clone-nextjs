import ProductCard from '@/components/ProductCard';

import React from 'react';

const Hero = async ({ data }) => {
	return (
		<div>
			<div className="flex flex-col items-center gap-2 mt-10">
				<h2 className="font-bold md:text-3xl text-xl text-center uppercase">
					All Products
				</h2>
				<p className="text-md text-slate-500">
					{data.length} product{data.length > 1 ? 's' : ''}
				</p>
			</div>
			<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mt-10">
				{data?.map((product) => (
					<ProductCard product={product} key={product._id} />
				))}
			</div>
		</div>
	);
};

export default Hero;
