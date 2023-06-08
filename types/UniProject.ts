import { PortableTextBlock } from 'sanity';

export type UniProject = {
	_id: string;
	_createdAt: Date;
	name: string;
	slug: string;
	image: string;
	url: string;
	type: string;
	size: string;
	content: PortableTextBlock[];
};
