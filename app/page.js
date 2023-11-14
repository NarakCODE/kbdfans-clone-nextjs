import CarouselImage from '@/components/CarouselImage';
import Hero from '@/components/Hero';
import { client } from '@/lib/client';
import React from 'react';

const getData = async () => {
	const query = `*[_type == 'product'] | order(_createdAt desc){
		_id,
		name,
		images,
		price,
		"categoryName": category->name,
		"slug": slug.current,
	}`;

	const data = await client.fetch(query);

	return data;
};

const getImageCarousel = async () => {
	const query = `*[_type == 'carouselImage'][0]{
		carouselImages
	}`;

	const data = await client.fetch(query);

	return data;
};

const HomePage = async () => {
	const data = await getData();
	const Cimages = await getImageCarousel();

	return (
		<div className="relative flex flex-col">
			<CarouselImage Cimages={Cimages} />
			<Hero data={data} />
		</div>
	);
};

export default HomePage;
