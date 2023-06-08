export default function SkillsSection({ className }: { className: string }) {
    return (
        <div className={className}>
            <div className={`flex flex-col py-5 items-center`}>
                <div className='flex gap-4 pb-2'>
                    <button className='p-2 hover:bg-[#141414] hover:text-[#FEFEF0] rounded-full uppercase w-max bg-[#FEFEF0] text-[#141414] transition duration-200 border-[#141414] border-solid border-2 font-bold text-center text-[80%]'>
                        VIDEOGRAPHY
                    </button>
                    <button className='p-2 hover:bg-[#141414] hover:text-[#FEFEF0] rounded-full uppercase w-max bg-[#FEFEF0] text-[#141414] transition duration-200 border-[#141414] border-solid border-2 font-bold text-center text-[80%]'>
                        Photography
                    </button>
                    <button className='p-2 hover:bg-[#141414] hover:text-[#FEFEF0] rounded-full uppercase w-max bg-[#FEFEF0] text-[#141414] transition duration-200 border-[#141414] border-solid border-2 font-bold text-center text-[80%]'>
                        Social Media
                    </button>
                </div>
                <div className='flex gap-4 pb-2'>
                    <button className='p-2 hover:bg-[#141414] hover:text-[#FEFEF0] rounded-full uppercase w-max bg-[#FEFEF0] text-[#141414] transition duration-200 border-[#141414] border-solid border-2 font-bold text-center text-[80%]'>
                        Graphic Design
                    </button>
                    <button className='p-2 hover:bg-[#141414] hover:text-[#FEFEF0] rounded-full uppercase w-max bg-[#FEFEF0] text-[#141414] transition duration-200 border-[#141414] border-solid border-2 font-bold text-center text-[80%]'>
                        Creative Direction
                    </button>
                </div>
                <div className='flex gap-4 pb-2'>
                    <button className='p-2 hover:bg-[#141414] hover:text-[#FEFEF0] rounded-full uppercase w-max bg-[#FEFEF0] text-[#141414] transition duration-200 border-[#141414] border-solid border-2 font-bold text-center text-[80%]'>
                        Ui Design
                    </button>
                    <button className='p-2 hover:bg-[#141414] hover:text-[#FEFEF0] rounded-full uppercase w-max bg-[#FEFEF0] text-[#141414] transition duration-200 border-[#141414] border-solid border-2 font-bold text-center text-[80%]'>
                        Web Design
                    </button>
                    <button className='p-2 hover:bg-[#141414] hover:text-[#FEFEF0] rounded-full uppercase w-max bg-[#FEFEF0] text-[#141414] transition duration-200 border-[#141414] border-solid border-2 font-bold text-center text-[80%]'>
                        Motion Graphics
                    </button>
                </div>
            </div>
            <div className="pb-4">
                <h3 className="text-xl font-bold">Skills</h3>
                <div className="flex flex-row pt-2 gap-4">
                    <div>
                        <h4 className="font-bold">
                            LANGUAGES
                        </h4>
                        <p>
                            TypeScript <br />
                            HTML, CSS<br />
                            C++ / C#<br />
                            Python<br />
                            Dart (Flutter)<br />
                        </p>
                    </div>
                    <div>
                        <h4 className="font-bold">
                            TECHNOLOGIES
                        </h4>
                        <p>
                            Next.js <br />
                            Sanity.io <br />
                            Vue / Nuxt <br />
                            Machine Learning <br />
                            Arduino<br />
                        </p>
                    </div>
                    <div>
                        <h4 className="font-bold">
                            TOOLS
                        </h4>
                        <p>
                            Adobe CC Suite <br />
                            VS Code <br />
                            Git / Github <br />
                            Anaconda <br />
                            Selenium <br />
                        </p>
                    </div>
                </div>
            </div>
            <div>
                <h3 className="text-xl font-bold">Education</h3>
                <div className="flex flex-col gap-4">
                    <div className="flex flex-row">
                        <div className="mx-2.5">
                            <p className="font-bold text-[#FEFEF0] bg-[#141414] px-2 rounded-full hover:bg-[#FEFEF0] hover:text-[#141414] border-2 border-[#141414] transition duration-200">
                                2023
                            </p>
                        </div>
                        <p className="font-bold">
                            Bath Spa University, United Kingdom
                            BSc Creative Computing
                        </p>
                    </div>
                    <div className="flex flex-row">
                        <p className="mx-5 font-bold">2021</p>
                        <p>
                            EduQual Level 4,
                            Diploma in Creative Computing
                            Academic Excellence Awardee
                        </p>
                    </div>
                    <div className="flex flex-row">
                        <p className="mx-5 font-bold">2020</p>
                        <p>
                            BTEC Level 3,
                            Creative Media Studies
                        </p>
                    </div>
                    <div className="flex flex-row">
                        <p className="mx-5 font-bold">2020</p>
                        <p>
                            GCE CAIE AS Level
                            Physics (A), Computer Science (B)
                        </p>
                    </div>
                    <div className="flex flex-row">
                        <p className="mx-5 font-bold">2020</p>
                        <p>
                            Pearson Edexcel, International AS Level
                            Maths (A)
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}