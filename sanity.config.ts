import { defineConfig } from 'sanity'
import { deskTool } from 'sanity/desk'
import schemas from './sanity/schemas';

const config = defineConfig({
    projectId: 'mg9khq3b',
    dataset: 'production',
    title: 'Louis Uy',
    apiVersion: '2023-05-29',
    basePath: '/admin',
    plugins: [deskTool()],
    schema: { types: schemas }
})

export default config;