import styles from '@/styles/course.module.scss'
import { course } from '@/utils/course';
import Image from 'next/image';
import Link from 'next/link';
const CourseComp = () => {
    return (
        <div className={styles.main__container}>

            <div className={styles.container}>
                {
                    course.map(c =>
                        <>
                            <article className={styles.course}>
                                <div className={styles.course__image}>
                                    <Image src={c.icon} width={360} height={200} alt='course Image' />
                                </div>
                                <div className={styles.course__desc}>
                                    <h3>{c.title}</h3>
                                    <p>{c.desc}</p>
                                    <Link href={c.path} >Learn More</Link>
                                </div>
                            </article>
                        </>)
                }
            </div>
        </div>
    )
}

export default CourseComp;