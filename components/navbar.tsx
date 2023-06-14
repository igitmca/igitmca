"use client"
import { Close, Menu } from '@mui/icons-material';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react'
import Logo from '@/public/images/logo.png'
import { navlist } from '@/utils/navbarlist'
import styles from '@/styles/navbar.module.css'

const Navbar = () => {
  const [isNavShowing, setIsNavShowing] = useState(false);

  return (
    <nav>
      <div className={styles.container}>
        {/* <button className='nav__toggle__btn' onClick={() => { setIsNavShowing((prev) => !prev); }}>
          {isNavShowing ? <Close /> : <Menu />}
        </button> */}
        <Link href='/' className={styles.logo}>
          <Image src={Logo} width={50} height={50} alt='IGIT MCA' onClick={() => setIsNavShowing(false)} />
        </Link>
        <ul className={styles.navlinks}>
          {
            navlist.map(list => {
              return (
                <li key={list.name}>
                  <Link href={list.href} className='' onClick={() => setIsNavShowing((prev) => !prev)}>
                    {list.name}
                  </Link>
                </li>
              )
            })
          }
        </ul>
      </div>
    </nav>
  )
}

export default Navbar