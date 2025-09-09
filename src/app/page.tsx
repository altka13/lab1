import styles from "./about/page.module.css"
export default function Page(){
    return(
        <div>
        <h1 className={styles.title}>Миний тухай</h1>
        <p className={styles.description}>энэ хуудсыг css module ашиглаж загварчилсан</p>
        <p className="mt-2">миний хобби: тоглох, зурах, кино үзэх</p>
        </div>
    )
}