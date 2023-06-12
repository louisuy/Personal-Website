/* eslint-disable @next/next/no-img-element */
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
                    <Link href={`/blog/physcomp`} className="">
                        <p className='text-base uppercase'>Phys Comp &#65125; </p>
                    </Link>
                </div>
                <br />
                {physcomp.map((physcomp: PhysComp) => (
                    <div key={physcomp._id}>
                        <Link href={`/blog/deeno/${physcomp.slug}`}>
                            <div className='flex flex-col pb-10 md:flex-row'>
                                <img
                                    src={physcomp.image}
                                    alt={physcomp.title}
                                    className='w-[100vw] object-cover aspect-video rounded-sm hover:opacity-50 transition duration-200 md:w-[30vw]'
                                />
                                <div className='md:pl-5'>
                                    <p className='font-black text-4xl uppercase'>
                                        {physcomp.title}
                                    </p>
                                    <p>
                                        {physcomp.excerpt}
                                    </p>
                                </div>
                            </div>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    )
}
