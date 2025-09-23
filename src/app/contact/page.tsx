import styles from "./page.module.css"
import Layout from "@/components/Layout"
import Image from "next/image";
export default function About(){
    return(
        <Layout>
           <div>
        <h1 className={styles.title}>холбоо барих</h1>
        <p className={styles.description}>email:sw23d018</p>
        <p className={styles.text}>гар утас: 88888888</p>
         {/* Зураг оруулж байна */}
              <Image
                src="/images/pinkk.jpg" // public/images/mountain.jpg
                alt="pinkk"   // SEO + accessibility
                width={400}                // өргөн заавал
                height={500}               // өндөр заавал
                className="rounded-lg shadow-lg"
              />
        </div>
        </Layout>
        
    )
}