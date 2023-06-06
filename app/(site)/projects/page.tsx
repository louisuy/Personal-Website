import Image from 'next/image'
import { getProjects } from '@/sanity/sanity-utils'
import { Project } from '@/types/Project';

export default async function Projects() {
    const projects = await getProjects();
    return (
        <div className="grid grid-cols-3 sm:gap-4 gap-2">
            {projects.map((project: Project) => (
                <div
                    key={project._id}
                    className={`${project.size === "wide" ? "col-span-2 aspect-[2.015]"
                        : project.size === "tall" ? "row-span-2 aspect-[0.485]"
                            : project.size === "square" ? "aspect-[1]" : ""
                        } sm:rounded-3xl rounded-lg overflow-hidden`}
                >
                    <Image
                        src={project.image}
                        alt={project.name}
                        width={5000}
                        height={5000}
                        className="opacity-50 hover:opacity-100 transition duration-200 bg-black h-full object-cover"
                    />
                </div>
            ))}
        </div>
    )
}
