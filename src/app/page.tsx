import styles from "./about/page.module.css"
import Layout from "@/components/Layout";
export default function Contact(){
    return(
      <Layout>
        <div>
        <h1 className={styles.title}>Миний тухай</h1>
        <p className={styles.description}>энэ хуудсыг css module ашиглаж загварчилсан</p>
        <p className="mt-2">миний хобби: тоглох, зурах, кино үзэх</p>
        <p className="mt-4">энэ бол layout ашигласан жишээ</p>
        </div>
      </Layout>
    )
}
