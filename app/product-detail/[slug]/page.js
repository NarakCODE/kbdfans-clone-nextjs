import AddToBag from '@/components/AddToBag';
import ImageGallery from '@/components/ImageGallery';
import { Button } from '@/components/ui/button';
import { client } from '@/lib/client';
import { PortableText } from '@portabletext/react';
import { Truck } from 'lucide-react';
import React from 'react';

const getData = async (slug) => {
	const query = `*[_type == 'product' && slug.current == '${slug}'][0]{
      _id,
      name,
      images,
      price,
      description,
      "categoryName": category->name,
      "slug": slug.current
   }`;

	const data = await client.fetch(query);

	return data;
};

const ProductDetailPage = async ({ params }) => {
	const data = await getData(params.slug);

	return (
		<div>
			<div className="max-w-6xl mx-auto px-2 grid md:grid-cols-2 grid-cols-1 items-start gap-8">
				<div>
					<ImageGallery images={data.images} />
				</div>

				{/* Content */}
				<div className="flex flex-col gap-4 items-start">
					<div className="flex flex-col gap-2">
						<h4 className="text-green-600 uppercase">{data.categoryName}</h4>
						<h2 className="text-xl md:text-2xl font-bold tracking-widest">
							{data.name}
						</h2>
					</div>
					<div className="p-4 rounded-[--radius] border md:text-md">
						<PortableText value={data.description} />
					</div>

					<div className="text-slate-500 flex">
						<Truck size={20} />
						<p className="text-md  flex">4/5 days shipping</p>
					</div>

					<div className="flex items-center gap-2">
						<h2 className="font-bold text-lg">${data.price} USD</h2>
						<h2 className="font-semibold text-md text-red-500 line-through">
							${data.price.toFixed(2)}
						</h2>
					</div>

					<div className=" flex items-center space-x-2">
						<AddToBag
							currency="USD"
							description={data.description}
							images={data.images}
							name={data.name}
							price={data.price}
							key={data._id}
						/>

						<Button variant="destructive" className="font-bold uppercase">
							Check out
						</Button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ProductDetailPage;
