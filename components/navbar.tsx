"use client"
import { Close, Menu } from '@mui/icons-material';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react'
import Logo from '@/public/images/logo.png'
import { navlist } from '@/utils/navbarlist'
import styles from '@/styles/navbar.module.css'
import { IconButton } from '@mui/material';

const Navbar = () => {
  const [isNavShowing, setIsNavShowing] = useState(false);

  return (
    <nav>
      <div className={styles.container}>
        <div className={styles.head}>
          <Link href='/' className={styles.logo}>
            <Image src={Logo} width={50} height={50} alt='IGIT MCA' onClick={() => setIsNavShowing(false)} />
          </Link>
          <div className={styles.dropdown}>
            <IconButton onClick={() => setIsNavShowing(prev => !prev)}>
              <Menu />
            </IconButton>
          </div>
        </div>
        <div className={`${styles.dropdown__content} ${isNavShowing ? styles.active : styles.inactive}`}>
          <ul className={styles.navlinks}>
            {
              navlist.map(list => {
                return (
                  <li onClick={() => setIsNavShowing((prev) => !prev)} key={list.href}>
                    <Link href={list.href}  >
                      {list.name}
                    </Link>
                  </li>
                )
              })
            }
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar