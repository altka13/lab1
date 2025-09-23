import styles from "./about/page.module.css"
import Layout from "@/components/Layout";
import Image from "next/image";
export default function Contact(){
    return(
      <Layout>
        <div>
        <h1 className={styles.title}>Тавтай морил</h1>
        <p className={styles.description}>энэ хуудсыг css module ашиглаж загварчилсан</p>
        <p className="mt-2">энэ бол нүүр хуудас</p>
        <p className="mt-4">энэ бол layout ашигласан жишээ</p>
        {/* Зураг оруулж байна */}
      <Image
        src="/images/pinkie.jfif" // public/images/mountain.jpg
        alt="pinkie"   // SEO + accessibility
        width={600}                // өргөн заавал
        height={400}               // өндөр заавал
        className="rounded-lg shadow-lg"
      />
        </div>
      </Layout>
    )
}
