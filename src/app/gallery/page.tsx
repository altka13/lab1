import Link from "next/link";
import Image from "next/image";
import { photos } from "@/app/data/photos";
import Layout from "@/components/Layout"
export default function GalleryPage() {
  return (
    <Layout>
    <div style={{ padding: "20px" }}>
      <h1>Gallery</h1>
      <div style={{ display: "flex", gap: "20px" }}>
        {photos.map((p) => (
          <Link key={p.id} href={`/gallery/${p.id}`}>
            <Image src={p.src} alt={p.desc} width={300} height={200} />
          </Link>
        ))}
      </div>
      <Link
              href={`/`}
              className="text-pink-500 hover:underline"
            >
              back
            </Link>
    </div>
  </Layout>);
}
