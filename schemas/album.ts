// schemas/album.js

export default {
    name: 'album',
    title: 'Album',
    type: 'document',
    fields: [
        {
            name: 'title',
            title: 'Title',
            type: 'string'
        },
        {
            name: 'releaseDate',
            title: 'Release Date',
            type: 'date'

        },
        {
            name: 'location',
            title: 'Location',
            type: 'geopoint', // Add a geopoint field for location coordinates
        },
        {
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: {
                source: 'title',
                maxLength: 96
            }
        },
        {
            name: 'images',
            title: 'Images',
            type: 'array',
            of: [{ type: 'image', options: { hotspot: true } }]
        }
    ],
    preview: {
        select: {
            title: 'title',
            media: 'images.0' // Show the first image in the album as a preview in the Sanity Studio
        }
    }
};
