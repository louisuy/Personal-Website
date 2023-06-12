import { PortableTextBlock } from 'sanity';

export type PhysCompExps = {
	excerpt: string;
	_id: string;
	_createdAt: Date;
	title: string;
	slug: string;
	image: string;
	url: string;
	date: Date;
	content: PortableTextBlock[];
};
