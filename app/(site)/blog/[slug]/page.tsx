'use client'

import { getBlog } from "@/sanity/sanity-utils";
import { PortableText } from "@portabletext/react";
import { PortableTextComponents } from '@portabletext/react'
import Link from "next/link";
import Image from "next/image";

type Props = {
    params: { slug: string }
}
const components: PortableTextComponents = {
    list: {
        bullet: ({ children }) => <ul className="mt-xl pl-10">{children}</ul>,
    },
    listItem: {
        bullet: ({ children }) => <li style={{ listStyleType: 'disc' }}>{children}</li>,
    },
}

export default async function Blog({ params }: Props) {
    const blog = await getBlog(params.slug);

    return (
        <div>
            <br />
            <div className="flex flex-row">
                <Link href='/'>
                    <h1 className='text-base uppercase'>Blogs &#65125; </h1>
                </Link>
                <Link href={`blog/${blog.slug}`} className="">
                    <p className='text-base uppercase'>{blog.slug} &#65125; </p>
                </Link>
            </div>
            <div>
                <p className='text-9xl font-black uppercase translate-y-16 text-outline-primary text-white/[0]'>
                    {blog.title}
                </p>
                <p className='absolute z-[-10] text-9xl font-black uppercase -translate-y-16 text-white'>
                    {blog.title}
                </p>
                <Image
                    src={blog.image}
                    alt={blog.title}
                    width={1280}
                    height={720}
                    className='aspect-video object-cover overflow-hidden pb-16'
                />
            </div>


            <PortableText
                value={blog.content}
                components={components}
            />
        </div>
    )
}
