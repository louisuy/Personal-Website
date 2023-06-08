"use client";

import Link from "next/link";
import Image from "next/image";

const Nav = () => {
  return (
    // <nav>
    //   <Link href='/'>
    //   </Link>

    //   {/* Desktop Navigation */}
    //   <div className='sm:flex hidden'>
    //   </div>

    //   {/* Mobile Navigation */}
    //   <div className='sm:hidden flex relative'>
    //       <div className='flex'>
    //         <Image onClick={() => setToggleDropdown(!toggleDropdown)}/>

    //         {toggleDropdown && (
    //           <div className='dropdown'>
    //             <Link
    //               href='/profile'
    //               className='dropdown_link'
    //               onClick={() => setToggleDropdown(false)}
    //             >
    //               My Profile
    //             </Link>
    //             <Link
    //               href='/create-prompt'
    //               className='dropdown_link'
    //               onClick={() => setToggleDropdown(false)}
    //             >
    //               Create Prompt
    //             </Link>
    //             <button
    //               type='button'
    //               onClick={() => {
    //                 setToggleDropdown(false);
    //                 signOut();
    //               }}
    //               className='mt-5 w-full black_btn'
    //             >
    //               Sign Out
    //             </button>
    //           </div>
    //         )}
    //       </div>
    //     ) : (
    //       <>
    //       </>
    //   </div>
    // </nav>
    // TODO: Nav unavailable on mobile.
    <nav className="">
      <div className="flex justify-between">
        <Link href='/' className='text-2xl font-bold py-5 px-0'>
          Louis Uy
        </Link>

        <div className="justify-between gap-5 hidden sm:flex">
          <Link href='/university' className='text-xl py-5'>
            University
          </Link>
          <Link href='/projects' className='text-xl py-5'>
            Projects
          </Link>
          <Link href='/blog' className='text-xl py-5'>
            Blog
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Nav;