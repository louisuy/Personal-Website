import { createClient, groq } from 'next-sanity';
import clientConfig from './config/client-config';
import { Blog } from '@/types/Blog';
import { PhysComp } from '@/types/PhysComp';
import { PhysCompExps } from '@/types/PhysCompExps';
import { UniProject } from '@/types/UniProject';
import { Project } from '@/types/Project';

export async function getProjects() {
	const client = createClient({
		projectId: 'mg9khq3b',
		dataset: 'production',
		apiVersion: '2023-05-29',
	});

	return client.fetch(
		groq`*[_type == "project"]{
            _id,
            _createdAt,
            name,
            type,
            "slug": slug.current,
            "image": image.asset->url,
            size,
            url,
            content,
        }`,
	);
}

export async function getUniProjects() {
	const client = createClient({
		projectId: 'mg9khq3b',
		dataset: 'production',
		apiVersion: '2023-05-29',
	});

	return client.fetch(
		groq`*[_type == "uniproject"]{
            _id,
            _createdAt,
            name,
            type,
            "slug": slug.current,
            "image": image.asset->url,
            size,
            url,
            content,
        }`,
	);
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
        }`,
	);
}

export async function getBlog(slug: string): Promise<Blog> {
	return createClient(clientConfig).fetch(
		groq`*[_type == "blog" && slug.current == $slug][0]{
        _id,
        _createdAt,
        title,
        "slug": slug.current,
        "image": image.asset->url,
        url,
        content
        }`,
		{ slug },
	);
}

export async function getPhysCompBlogs(): Promise<PhysComp[]> {
	return createClient(clientConfig).fetch(
		groq`*[_type == "physcomp"]{
        _id,
        _createdAt,
        date,
        title,
        "slug": slug.current,
        "image": image.asset->url,
        url,
        content,
        "excerpt": array::join(string::split((pt::text(content)), "")[0..255], "") + "..."
      } | order(date desc)`,
	);
}

export async function getPhysCompBlog(slug: string): Promise<PhysComp> {
	return createClient(clientConfig).fetch(
		groq`*[_type == "physcomp" && slug.current == $slug][0]{
        _id,
        _createdAt,
        date,
        title,
        "slug": slug.current,
        "image": image.asset->url,
        url,
        content[]{}
        }`,
		{ slug },
	);
}

export async function getPhysCompExps(): Promise<PhysComp[]> {
	return createClient(clientConfig).fetch(
		groq`*[_type == "physcompexps"]{
        _id,
        _createdAt,
        date,
        title,
        "slug": slug.current,
        "image": image.asset->url,
        url,
        content,
        "excerpt": array::join(string::split((pt::text(content)), "")[0..255], "") + "..."
      } | order(date desc)`,
	);
}
