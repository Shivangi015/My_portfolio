import React from 'react'
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from 'react-icons/bs';
const Social = () => {
    const Links = [
        {
            id:1,
            child: (
                <>
                LinkedIn <FaLinkedin size={30}/>
                </>
            ),
            href:'https://www.linkedin.com/in/shivangi-baranwal-7467ab237/',
           style: 'rounded-tr-md'
        },
        {
            id:2,
            child: (
                <>
                GitHub <FaGithub size={30}/>
                </>
            ),
            href:'https://github.com/Shivangi015'
        },
        {
            id:3,
            child: (
                <>
                Mail <HiOutlineMail size={30}/>
                </>
            ),
            href:'mailto:Shivangibaranwal15@gmail.com'
        },
        {
            id:4,
            child: (
                <>
                Resume <BsFillPersonLinesFill size={30}/>
                </>
            ),
            href:'https://drive.google.com/file/d/13whGWDgjOP4aGU0rKtmov6ute36BQqsp/view?usp=sharing',
            style: 'rounded-br-md'
        }
    ]
  return (
    <div className='hidden lg:flex flex-col top-[35%] left-0 fixed'>
        <ul>
            {Links.map(({id, child, href, download, style})=>
            (
            <li key={id} className={"flex bg-gray-500 justify-between items-center w-40 h-14 px-4 ml-[-100px] hover:rounded-md duration-300  hover:ml-[-10px] duration-500" + " " + style}><a
             href={href} className='flex items-center w-full text-white justify-between'
             target='_blank'
             rel='noreferrer'
             >
            {child}
           
            </a>
            </li>
            )
            )}
            
        </ul>
    </div>
  )
}

export default Social