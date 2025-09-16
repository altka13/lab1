import { notFound } from "next/navigation";
import Link from "next/link";
import { blogs } from "@/app/data/blogs";

export default function BlogDetail({ params }: { params: { id: string } }) {
  const blogId = Number(params.id);
  const blog = blogs.find((b) => b.id === blogId);

  if (!blog) {
    notFound();
  }

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-2">{blog.blogname}</h1>
      <p className="text-gray-700">{blog.description}</p>
      <p className="mt-4 text-sm text-gray-500">
        Blog ID: {blog.id} - dynamically routed page
      </p>
      <Link href={`/blog/${blog.id}/comments` } className="text-1xl font-bold mb-2 text-pink-700">comment харах</Link>
      <hr />
      <Link
              href={`/blog`}
              className="text-pink-500 hover:underline"
            >
              back
            </Link>
    </div>
  );
}
