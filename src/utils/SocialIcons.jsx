import React from 'react';
import {
  IoLogoFacebook,
  IoLogoTwitter,
  IoLogoGithub,
  IoLogoYoutube,
  IoLogoInstagram,
} from 'react-icons/io5';
import { Link } from 'react-router-dom';

export default function SocialIcons() {
  return (
    <section className='sm:flex gap-2 hidden'>
      <Link to='/'>
        <IoLogoFacebook className='text-lg dark:text-gray-900 hover:text-blue-600' />
      </Link>
      <Link to='/'>
        <IoLogoTwitter className='text-lg dark:text-gray-900 hover:text-blue-600' />
      </Link>
      <Link to='/'>
        <IoLogoGithub className='text-lg dark:text-gray-900 hover:text-blue-600' />
      </Link>
      <Link to='/'>
        <IoLogoYoutube className='text-lg dark:text-gray-900 hover:text-blue-600' />
      </Link>
      <Link to='/'>
        <IoLogoInstagram className='text-lg dark:text-gray-900 hover:text-blue-600' />
      </Link>
    </section>
  );
}
