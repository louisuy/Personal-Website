import Image from 'next/image';
import Link from 'next/link';
import SkillsSection from '@/components/SkillsSection';
import Job from '@/components/Job';

export default async function Home() {
  return (
    <div>
      <div className='flex flex-col md:flex-row'>
        <div className='flex flex-col md:w-1/2'>
          <Image
            src={'https://uploadthing.com/f/59103dd8-3758-4cb5-bc81-c89c469d2687_IMG_1072.jpg'}
            alt={'Louis Picture'}
            width={5000}
            height={5000}
            className='w-full aspect-square object-cover md:aspect-auto'
          />
          <SkillsSection className='hidden flex-col md:flex' />

        </div>
        <div className='md:ml-10 mt-10 md:mt-0 md:max-w-[50vw]'>
          <h1 className='font-bold uppercase text-3xl sm:text-5xl'>
            Anthony Bon
            <span className='bg-[#141414] text-[#FEFEF0] px-2 ml-2'>
              Louis
            </span>
            <br />
            Uy Cubillas
          </h1>
          <p className='py-4'>
            DUBAI, United Arab Emirates <br />
            louisuycubillas@gmail.com <br />
            +971 564614915 <br />
          </p>
          <div className='gap-4 w-full sm:flex'>
            <Link
              href={'https://www.linkedin.com/in/louis-uy-cubillas-b3a074231/'}
              target='_blank'
            >
              <button className='px-4 py-2 bg-[#141414] text-[#FEFEF0] rounded-full uppercase w-32 hover:bg-[#FEFEF0] hover:text-[#141414] transition duration-200 border-[#141414] border-solid border-2'>
                LinkedIn
              </button>
            </Link>
            <Link
              href={'https://github.com/louisuy'}
              target='_blank'
            >
              <button className='px-4 py-2 bg-[#141414] text-[#FEFEF0] rounded-full uppercase w-32 hover:bg-[#FEFEF0] hover:text-[#141414] transition duration-200 border-[#141414] border-solid border-2'>
                GitHub
              </button>
            </Link>
            <Link
              href={'https://github.com/louisuy'}
              target='_blank'
            >
              <button className='px-4 py-2 bg-[#141414] text-[#FEFEF0] rounded-full uppercase w-32 hover:bg-[#FEFEF0] hover:text-[#141414] transition duration-200 border-[#141414] border-solid border-2'>
                Portfolio
              </button>
            </Link>
          </div>
          <p className='py-4 font-bold text-xl'>
            I am a digital creative: skilled in digital content creation, web development, and design, leveraging my artistic vision and technical expertise to create innovative and impactful digital experiences.
          </p>
          <Job
            company={'sewcial'}
            role={'Web Development, Lead QA, Marketing'}
            type={'CONCEPT'}
            year={'2023'}
            description={'Conceptualised and developed a cafe business and its website using Vue, Nuxt, Prisma, Tailwind, tRPC, ThreeJS, Vite, and deployed on Vercel.'}
          />
          <Job
            company={'CHUNK, MR.CRAB & LET’S EAT SIGNATURE BRANDS'}
            role={'Content Creation Executive'}
            type={'FULLTIME → FREELANCE'}
            year={'2021 - PRESENT'}
            description={'Elevated content reach by the creation and execution of viral, engaging, short-form content and feed posts through TikTok, Instagram and Facebook.'}
          />
          <Job
            company={'THE PIXIES DANCE'}
            role={'Director of Photography, Producer'}
            type={'ORGANIZATION'}
            year={'2020 - Present'}
            description={'Directed and produced dynamic music videos with gimbal stabilizers, orchestrated lighting, acquired permits, excelling as a one-man-team.'}
          />
          <Job
            company={'PAKISTAN ISLAMIA HIGH SECONDARY SCHOOL'}
            role={'Web Development, Lead QA, Content Creation'}
            type={'INTERNSHIP'}
            year={'2022'}
            description={'Overhauled a website for a school in Sharjah using HTML5, SCSS, PHP and deployed through cPanel and through Filezilla.'}
          />
          <Job
            company={'AUGUSTUS MEDIA LOVIN’ DUBAI & SAUDI'}
            role={'Content Creation Intern'}
            type={'INTERNSHIP'}
            year={'2020'}
            description={'Ideated and storyboarded branded content (HSBC, Noir Bar). Assisted as a camera operator, grip, and boom operator for a two-man crew, and created motion graphics for Jo-Koy Tour in Dubai.'}
          />
          <SkillsSection className='flex md:hidden' />
        </div>
      </div>
    </div>
  )
}
