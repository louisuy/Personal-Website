'use client';

import Image from 'next/image'
import { getPhysCompBlogs } from '@/sanity/sanity-utils'
import { PhysComp } from '@/types/PhysComp';
import { PortableText } from "@portabletext/react";
import { PortableTextComponents } from '@portabletext/react'
import Link from 'next/link'

export default async function Blog() {
    const physcomp = await getPhysCompBlogs();

    return (
        <div>
            <div className=''>
                <br />
                <div className="flex flex-row">
                    <Link href='/'>
                        <h1 className='text-base uppercase'>Blogs &#65125; </h1>
                    </Link>
                    <Link href={`blog/deeno`} className="">
                        <p className='text-base uppercase'>Deeno &#65125; </p>
                    </Link>
                </div>
                <br />
                {physcomp.map((physcomp: PhysComp) => (
                    <div key={physcomp._id}>
                        <Link href={`/blog/deeno/${physcomp.slug}`}>
                            <div className='flex flex-col md:flex-row'>
                                <img
                                    src={physcomp.image}
                                    alt={physcomp.title}
                                    className='aspect-video object-cover overflow-hidden rounded-sm hover:opacity-50 transition duration-200 w-[100vw]'
                                />
                                <div className='md:pl-5'>
                                    <p className='font-black text-4xl uppercase'>
                                        {physcomp.title}
                                    </p>
                                    <br />
                                    <div className='hidden md:flex'>
                                        {physcomp.excerpt}
                                    </div>
                                </div>
                            </div>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    )
}
