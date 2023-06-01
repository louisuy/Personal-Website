import Image from 'next/image'
import { getProjects } from '@/sanity/sanity-utils'
import { Project } from '@/types/Project';
import Link from 'next/link'

export default async function Blog() {
    const projects = await getProjects();

    return (
        <div>
            <div className=''>
                <br />
                <Link href='/'>
                    <h1 className='text-base uppercase'>Projects &#65125;</h1>
                </Link>
                {projects.map((projects: Project) => (
                    <div key={projects._id}>
                        <p className='text-9xl font-black uppercase translate-x-32 translate-y-16 text-outline-primary text-white/[0]'>
                            {projects.name}
                        </p>
                        <p className='absolute z-[-10] text-9xl font-black uppercase translate-x-32 -translate-y-16 text-white'>
                            {projects.name}
                        </p>
                        <div className=''>
                            <Image
                                src={projects.image}
                                alt={projects.name}
                                width={1280}
                                height={720}
                                className='aspect-video object-cover overflow-hidden w-3/4'
                            />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
