import styles from '@/styles/notes.module.css'
import Link from 'next/link';
import Image from 'next/image';
import { semester } from '@/utils/semesterList';

const NotesComp = () => {
    return (
        <>
            <div className={styles.container}>
                <div className={styles.notes__container}>
                    <div className={styles.left__container}>
                        <h1>Notes</h1>
                        <p>It includes all of your Semester Notes, Question and Assignments. If any note is missed to place you can place the issue in contact page.
                            <Link href='/contact'>Contact Us</Link>
                        </p>
                    </div>
                    <div className={styles.right__container}>
                        {
                            semester.map(sem =>
                                <div key={sem.title} className={styles.card}>
                                    <Image src={sem.icon} width={200} height={200} alt="semester icon" />
                                    <h3>{sem.title}</h3>
                                    <p>{sem.desc}</p>
                                </div>)
                        }
                    </div>
                </div>
            </div>
        </>
    )
}

export default NotesComp