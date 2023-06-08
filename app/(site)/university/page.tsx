import Image from 'next/image'
import { getProjects } from '@/sanity/sanity-utils'
import { UniProject } from '@/types/UniProject';
import Link from 'next/link';

export default async function UniProjects() {
    // TODO: Projects and Uni Projects are swapped.
    const projects = await getProjects();
    return (
        <div className="sm:grid grid-cols-5 sm:gap-4 gap-2 flex flex-col">
            {projects.map((project: UniProject) => (
                <div
                    key={project._id}
                    className={`
                        ${project.size === "wide" ? "col-span-2 sm:aspect-[2.1]"
                            : project.size === "tall" ? "row-span-2 sm:aspect-[0.485]"
                                : project.size === "square" ? "sm:aspect-[1]" : ""
                        } sm:rounded-3xl rounded-lg overflow-hidden aspect-video`}
                >
                    <div>

                    </div>
                    <div className='h-full bg-[#141414]'>
                        <Link href={project.url || '/projects'}>
                            <div className='relative'>
                                <div className='flex text-[#FEFEF0] justify-between p-4 absolute w-full z-10'>
                                    <p className='max-w-[30%]'>
                                        {project.name}
                                    </p>
                                    <p>
                                        &#9702; {project.type}
                                    </p>
                                </div>
                            </div>
                            < Image
                                src={project.image}
                                alt={project.name}
                                width={5000}
                                height={5000}
                                className="opacity-20 hover:opacity-100 hover:scale-105 transition duration-500 h-full object-cover"
                            />
                        </Link>
                    </div>
                </div>
            ))
            }
        </div >
    )
}
