import { createClient, groq } from 'next-sanity';
import clientConfig from './config/client-config'
import { Blog } from "@/types/Blog";

export async function getProjects() {
    const client = createClient({
        projectId: 'mg9khq3b',
        dataset: 'production',
        apiVersion: '2023-05-29',
    })

    return client.fetch(
        groq`*[_type == "project"]{
            _id,
            _createdAt,
            name,
            "slug": slug.current,
            "image": image.asset->url,
            url,
            content,
        }`
    )
}

export async function getBlogs(): Promise<Blog[]> {
    return createClient(clientConfig).fetch(
      groq`*[_type == "blog"]{
        _id,
        _createdAt,
        title,
        "slug": slug.current,
        "image": image.asset->url,
        url,
        content
      }`
    )
}
  
export async function getBlog(slug: string): Promise<Blog> {
    return createClient(clientConfig).fetch(
        groq`*[_type == "blog" && slug.current == $slug][0]{
        _id,
        _createdAt,
        title,
        "slug": slug.current,
        content
        }`,
        { slug }
    )
}