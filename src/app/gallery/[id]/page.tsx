import Image from "next/image";
import Link from "next/link";
import { photos } from "@/app/data/photos";
import Layout from "@/components/Layout"

export default function PhotoDetail({ params }: { params: { id: string } }) {
  const photo = photos.find((p) => p.id === params.id);

  if (!photo) return <h1>Photo not found</h1>;

  return (<Layout>
    <div style={{ padding: "20px" }}>
      <h1>{photo.id}</h1>
      <Image src={photo.src} alt={photo.desc} width={600} height={400} />
      <p>{photo.desc}</p>
         <Link
              href={`/gallery`}
              className="text-pink-500 hover:underline"
            >
              back
            </Link>
    </div>
  </Layout>);
}
