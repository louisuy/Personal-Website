export default function Job({ company, role, type, year, description }: {
    company: string,
    role: string,
    type: string,
    year: string,
    description: string
}) {
    return (
        <div className='py-4'>
            <div className='flex justify-between'>
                <div>
                    <h3 className='text-xl font-bold uppercase'>
                        {company}
                    </h3>
                    <p>
                        {role}
                    </p>
                </div>
                <div className='text-end'>
                    <p>
                        {type} <br />
                        {year}
                    </p>
                </div>
            </div>
            <div>
                <p className='font-bold pt-4'>
                    {description}
                </p>
            </div>
        </div>
    )
}