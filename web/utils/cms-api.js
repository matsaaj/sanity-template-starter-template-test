import { createClient } from 'next-sanity';

const config = {
	projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || '',
	dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
	apiVersion: '2022-08-04',
	useCdn: process.env.NODE_ENV === 'production'
}

export const sanityClient = createClient(config);

export const getClient = () => {
    return sanityClient;
};