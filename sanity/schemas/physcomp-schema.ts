const physcomp = {
    name: 'physcomp',
    title: 'Physical Computing Blog',
    type: 'document',
    fields: [
        {
            name: 'title',
            title: 'Title',
            type: 'string'
        },
        {
            name: 'date',
            title: 'Date',
            type: 'date',
        },
        {
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: { source: 'title' }
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
            }
            ]
        },
        {
            name: 'url',
            title: 'URL',
            type: 'url',
        },
        {
            name: 'content',
            title: 'Content',
            type: 'array',
            of: [{ type: 'block' },{ type: 'image' }, { type: 'code' }]
        }
    ]
}

export default physcomp;