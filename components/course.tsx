import styles from '@/styles/course.module.scss'
import { course } from '@/utils/course';
import Image from 'next/image';
import Link from 'next/link';

const CourseComp = () => {
    const shimmer = (w: number, h: number) => `
<svg width="${w}" height="${h}" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs>
    <linearGradient id="g">
      <stop stop-color="#333" offset="20%" />
      <stop stop-color="#222" offset="50%" />
      <stop stop-color="#333" offset="70%" />
    </linearGradient>
  </defs>
  <rect width="${w}" height="${h}" fill="#333" />
  <rect id="r" width="${w}" height="${h}" fill="url(#g)" />
  <animate xlink:href="#r" attributeName="x" from="-${w}" to="${w}" dur="1s" repeatCount="indefinite"  />
</svg>`
    const toBase64 = (str: string) =>
        typeof window === 'undefined'
            ? Buffer.from(str).toString('base64')
            : window.btoa(str)
    return (
        <div className={styles.main__container}>
            <div className={styles.container}>
                {
                    course.map(c =>
                        <article className={styles.course} key={c.path}>
                            <div className={styles.course__image}>
                                <Image src={c.icon} width="200"
                                    height="0" alt='course Image' style={{ width: '22rem', height: 'auto' }} placeholder='blur'
                                    blurDataURL={`data:image/svg+xml;base64,${toBase64(shimmer(700, 475))}`}
                                />
                            </div>
                            <div className={styles.course__desc}>
                                <h3>{c.title}</h3>
                                <p>{c.desc}</p>
                                <Link href={c.path} >Learn More</Link>
                            </div>
                        </article>
                    )
                }
            </div>
        </div>
    )
}

export default CourseComp;