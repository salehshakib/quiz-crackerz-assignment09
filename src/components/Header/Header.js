/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/letter-q.png';

const Header = () => {
    return (
        // bg-neutral text-base-100
        <nav className='bg-slate-200'>
            <div className='md:w-5/6 mx-auto w-full '>
                <div className="navbar ">
                    <div className="navbar-start">

                        <div className="dropdown md:hidden block">
                            <label tabIndex={0} className="btn btn-ghost btn-circle">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
                            </label>
                            <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 text-neutral">

                                <li><Link to="/courses" className='hover:text-primary'>Courses</Link></li>
                                <li><Link to="/statistics" className='hover:text-primary'>Statistics</Link></li>
                                <li><Link to="/blog" className='hover:text-primary'>Blog</Link></li>
                            </ul>
                        </div>
                        <img src={logo} alt="" className='w-[40px]'/>
                        <div className="flex items-center">
                            <Link to='/' className="btn btn-ghost normal-case text-2xl px-1">Quiz <span className='text-3xl font-bold text-[#3abfef]'>Whiz</span> </Link>
                        </div>
                    </div>
                    <div className="navbar-end">
                        <div className='hidden md:block mr-5'>
                            <Link to="/courses" className='px-2 hover:text-primary'>Courses</Link>
                            <Link to="/statistics" className='px-2 hover:text-primary'>Statistics</Link>
                            <Link to="/blog" className='px-2 hover:text-primary'>Blog</Link>
                        </div>
                        <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                            <div className="w-10 rounded-full">
                                <img src="https://placeimg.com/80/80/people" />
                            </div>
                        </label>
                    </div>
                </div>
            </div>
        </nav>

    );
};

export default Header;