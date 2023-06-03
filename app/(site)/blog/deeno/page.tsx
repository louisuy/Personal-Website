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
                            <div className='flex'>
                                <Image
                                    src={physcomp.image}
                                    alt={physcomp.title}
                                    width={400}
                                    height={300}
                                    className='aspect-video object-cover overflow-hidden rounded-sm hover:opacity-50 transition duration-200'
                                />
                                <div className='pl-5'>
                                    <p className='font-black text-4xl text-outline-primary text-white/[0] uppercase hover:text-white transition duration-200'>{physcomp.title}</p>
                                    <br />
                                    <PortableText 
                                        value={physcomp.content} 
                                    />
                                </div>
                            </div>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    )
}
