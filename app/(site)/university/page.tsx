import Image from 'next/image'
import { getProjects } from '@/sanity/sanity-utils'
import { UniProject } from '@/types/UniProject';
import Link from 'next/link';

export default async function UniProjects() {
    // TODO: Projects and Uni Projects are swapped.
    const projects = await getProjects();
    return (
        <div>
            <div className='py-5'>
                <h1 className='text-5xl font-bold uppercase'>University Projects</h1>
                <p>Various projects produced in my time in Bath Spa University under the BSc Creative Computing Program. This page excludes projects I have done <span className='underline underline-offset-2 hover:bg-[#141414] hover:text-[#FEFEF0] rounded-full hover:no-underline hover:px-2 py-1 transition-all duration-300 decoration-dotted decoration-1'><a href="/projects">professionally</a></span> outside the university.</p>
            </div>
            <div className="sm:grid grid-cols-5 sm:gap-4 gap-2 flex flex-col">
                {projects.map((project: UniProject) => (
                    <div
                        key={project._id}
                        className={`
                        ${project.size === "wide" ? "col-span-2 sm:aspect-[2.1]"
                                : project.size === "tall" ? "row-span-2 sm:aspect-[0.485]"
                                    : project.size === "square" ? "sm:aspect-[1]" : ""
                            } sm:rounded-3xl rounded-lg overflow-hidden aspect-[2.39]`}
                    >
                        <div>

                        </div>
                        <div className='h-full bg-[#141414]'>
                            <Link href={project.url || '/projects'} target='_blank'>
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
        </div>
    )
}
