import Image from "next/image";

export default function GalleryPage() {
  return (
    <div style={{ padding: "20px" }}>
      <h1>My Gallery</h1>
      <div style={{ display: "flex", gap: "20px" }}>
        <Image src="/images/drac.jfif" alt="drac" width={300} height={200}/>
        <Image src="/images/pinkie.jfif" alt="pinkie" width={300} height={200} />
        <Image src="/images/pinkk.jpg" alt="pink" width={300} height={200} />
      </div>
    </div>
  );
}
