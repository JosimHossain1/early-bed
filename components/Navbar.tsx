import Link from 'next/link';
import React from 'react';
import { Button } from './ui/button';

const Navbar = () => {
  return (
    <nav className='bg-gray-200 flex justify-between items-center py-3 px-6 md:px-18'>
      <div className='logo'>
        <h1 className='text-lg font-bold'>Early To Bed Early to Rise</h1>
      </div>

      {/* Menu */}
      <ul className='flex space-x-6'>
        <Link href=''>Home</Link>
      </ul>

      {/* Create Account */}
      <div className='space-x-3'>
        <Button>Login</Button>
        <Button>Create Account</Button>
      </div>
    </nav>
  );
};

export default Navbar;
