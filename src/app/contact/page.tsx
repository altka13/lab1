import styles from "./page.module.css"
import Layout from "@/components/Layout"
export default function About(){
    return(
        <Layout>
           <div>
        <h1 className={styles.title}>холбоо барих</h1>
        <p className={styles.description}>email:sw23d018</p>
        <p className={styles.text}>гар утас: 88888888</p>
        </div>
        </Layout>
        
    )
}