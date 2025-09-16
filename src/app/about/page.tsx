import styles from "./page.module.css"
import Layout from "@/components/Layout"
export default function About(){
    return(
        <Layout>
           <div>
        <h1 className={styles.title}>Миний тухай</h1>
        <p className={styles.description}>Миний нэрийг Алтанцэцэг гэдэг би 2005 оны 1-р сарын 13нд төрсөн</p>
        <p className={styles.text}>би нийслэлийн ерөнхий боловсролын 44-р сургуулийг төгссөн</p>
        <p className={styles.hobby}>миний хобби: тоглох, зурах, кино үзэх</p>
        <img src="unnamed.png"/>
        </div>
        </Layout>
        
    )
}