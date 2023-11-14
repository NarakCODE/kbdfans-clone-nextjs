import imageUrlBuilder from '@sanity/image-url';
import { createClient } from 'next-sanity';

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET;
const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2022-03-27';
const token = process.env.SANITY_AUTH_TOKEN;
export const client = createClient({
	projectId,
	dataset,
	apiVersion,
	token,
	useCdn: true,
});

const builder = imageUrlBuilder(client);

export function urlFor(source) {
	return builder.image(source);
}
