/* eslint-disable @next/next/no-img-element */
'use client'

import { getPhysCompBlog } from "@/sanity/sanity-utils";
import { PortableText } from "@portabletext/react";
import { PortableTextComponents } from '@portabletext/react'
import Link from "next/link";
import Image from "next/image";

type Props = {
    params: { slug: string }
}
const components: PortableTextComponents = {
    list: {
        // Ex. 1: customizing common list types
        bullet: ({ children }) => <ul className="translate-x-5  ">{children}</ul>,
    },
    listItem: {
        // Ex. 1: customizing common list types
        bullet: ({ children }) => <li style={{ listStyleType: 'disc' }} className="">{children}</li>,
    },
    types: {
        code: ({ value }) => (
            <pre className="bg-black/[0.5] p-5 text-[#FEFEF0] rounded-lg w-min my-4 mx-auto flex">
                <code>
                    {value.code}
                </code>
            </pre>
        ),
        image: ({ value }) => <img src={value.imageUrl} />,
    },
    marks: {
        link: ({ children, value }) => {
            const rel = !value.href.startsWith('/') ? 'noreferrer noopener' : undefined
            return (
                <Link href={value.href} className="text-[#FEFEF0] bg-[#141414] hover:bg-[#FEFEF0] hover:text-[#141414] transition duration-200 rounded-full px-2">
                    {children}
                </Link>
            )
        },
    },
}

export default async function PhysCompBlog({ params }: Props) {
    const physcompblog = await getPhysCompBlog(params.slug);

    return (
        <div>
            <br />
            <div className="flex-col sm:flex-row sm:flex">
                <div className="flex">
                    <Link href='/blog'>
                        <p className='text-base uppercase'>Blogs &#65125; </p>
                    </Link>
                    <Link href='/blog/deeno'>
                        <p className='text-base uppercase'>Deeno &#65125; </p>
                    </Link>
                </div>
                <Link href={`/blog/deeno/${physcompblog.slug}`} className="">
                    <p className='text-base uppercase'>{physcompblog.title} &#65125; </p>
                </Link>
            </div>
            <div>
                {/* <p className='text-9xl font-black uppercase translate-y-16 text-outline-primary text-white/[0]'>
                    {physcompblog.title}
                </p>
                <p className='absolute z-[-10] text-9xl font-black uppercase -translate-y-16 text-white'>
                    {physcompblog.title}
                </p> */}
                <div className="py-10">
                    <h1 className="uppercase font-black text-3xl md:text-7xl text-outline-primary hover:text-white/0 transition duration-200">
                        {physcompblog.title}
                    </h1>
                    <p className="my-2 p-1 px-4 bg-[#141414] text-[#FEFEF0] rounded-full w-32">{`${physcompblog.date}`}</p>
                </div>
                <img src={physcompblog.image} alt={physcompblog.title} className="w-full md:w-1/2 float-left mr-5 mb-5" />
                <PortableText
                    value={physcompblog.content}
                    components={components}
                />
            </div>
        </div>
    )
}
