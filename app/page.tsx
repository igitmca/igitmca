import Image from 'next/image'
import styles from './page.module.css'
import IntroPart from '@/components/introPage'
import NoticePage from '@/components/notice'
import NotesComp from '@/components/notes'
import CourseComp from '@/components/course'

export default function Home() {
  return (
    <main className={styles.main}>
      <IntroPart/>
      <NoticePage/>
      <NotesComp/>
      <CourseComp/>
    </main>
  )
}
