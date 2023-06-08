const uniproject = {
	name: 'uniproject',
	title: 'University Projects',
	type: 'document',
	fields: [
		{
			name: 'name',
			title: 'Name',
			type: 'string',
		},
		{
			name: 'slug',
			title: 'Slug',
			type: 'slug',
			options: { source: 'name' },
		},
		{
			name: 'image',
			title: 'Image',
			type: 'image',
			options: { hotspot: true },
			fields: [
				{
					name: 'alt',
					title: 'Alternative Text',
					type: 'string',
				},
			],
		},
		{
			name: 'url',
			title: 'URL',
			type: 'url',
		},
		// {
		//     name: 'blogUrl',
		//     title: 'Blog URL',
		//     type: 'url',
		// },
		{
			name: 'size',
			title: 'Size',
			type: 'string',
			options: {
				list: [
					{ title: 'Square', value: 'square' },
					{ title: 'Tall', value: 'tall' },
					{ title: 'Wide', value: 'wide' },
				],
			},
		},
		{
			name: 'type',
			title: 'Type',
			type: 'string',
			options: {
				list: [
					{ title: 'Media', value: 'Media' },
					{ title: 'Development', value: 'Development' },
				],
			},
		},
		{
			name: 'content',
			title: 'Content',
			type: 'array',
			of: [{ type: 'block' }],
		},
	],
};

export default uniproject;
