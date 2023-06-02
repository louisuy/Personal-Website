import Image from 'next/image'
import { getProjects } from '@/sanity/sanity-utils'
import { Project } from '@/types/Project';

export default async function Projects() {
    const projects = await getProjects();

    return (
        <div>
            <div className='flex flex-col sm:flex-row'>
                {projects.map((projects: Project) => (
                    <div key={projects._id}>
                        <div className='p-2'>
                            <Image
                                src={projects.image}
                                alt={projects.name}
                                width={2000}
                                height={2000}
                                className='rounded-3xl aspect-video object-cover overflow-hidden sm:aspect-square'
                            />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
