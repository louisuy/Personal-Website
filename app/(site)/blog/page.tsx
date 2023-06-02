import Image from 'next/image'
import { getBlogs } from '@/sanity/sanity-utils'
import { Blog } from '@/types/Blog';
import Link from 'next/link'

export default async function Blog() {
    const blogs = await getBlogs();
    console.log(blogs);
    return (
        <div>
            <div className=''>
                <br />
                <Link href='/'>
                    <h1 className='text-base uppercase'>Blogs &#65125;</h1>
                </Link>
                {blogs.map((blogs: Blog) => (
                    <div key={blogs._id}>
                        <Link href={`blog/${blogs.slug}`}>
                            <p className='text-9xl font-black uppercase translate-x-32 translate-y-16 text-outline-primary text-white/[0]'>
                                {blogs.title}
                            </p>
                            <p className='absolute z-[-10] text-9xl font-black uppercase translate-x-32 -translate-y-16 text-white'>
                                {blogs.title}
                            </p>
                            <div className=''>
                                <Image
                                    src={blogs.image}
                                    alt={blogs.title}
                                    width={1280}
                                    height={720}
                                    className='aspect-video object-cover overflow-hidden w-3/4'
                                />
                            </div>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    )
}
