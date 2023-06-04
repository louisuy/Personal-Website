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
        bullet: ({ children }) => <ul className="mt-xl pl-10">{children}</ul>,
    },
    listItem: {
        // Ex. 1: customizing common list types
        bullet: ({ children }) => <li style={{ listStyleType: 'disc' }}>{children}</li>,
    },
}

export default async function PhysCompBlog({ params }: Props) {
    const physcompblog = await getPhysCompBlog(params.slug);

    return (
        <div>
            <br />
            <div className="flex-row hidden sm:flex">
                <Link href='/blog'>
                    <p className='text-base uppercase'>Blogs &#65125; </p>
                </Link>
                <Link href='/blog/deeno'>
                    <p className='text-base uppercase'>Deeno &#65125; </p>
                </Link>
                <Link href={`${physcompblog.slug}`} className="">
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
                <h1 className="uppercase font-black text-7xl py-10 text-outline-primary text-white hover:text-white/0 transition duration-200">
                    {physcompblog.title}
                </h1>
                <img src={physcompblog.image} alt={physcompblog.title} className="w-auto" />
            </div>

            <br />
            <PortableText
                value={physcompblog.content}
                components={components}
            />
        </div>
    )
}
