import React from 'react'
import Link from 'next/link'
import styles from '../app/page.module.css';

const Navbar = () => {
  return (
    <nav className={styles.nav_bar}>
        <ul>
          <Link href="/">
          <li>Home</li>
          </Link>
          <Link href='/About'>
          <li>About</li>
          </Link>
            <Link href='/Contactus'>
          <li>Contact us </li>
            </Link>
          <Link href='/blog'>
          <li>Blog</li>
          </Link>
          </ul>
      </nav>
  )
}

export default Navbar