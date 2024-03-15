import Link from "next/link";
export default async function PostsPage() {


  const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
    cashe: "no-store",
  });
  const posts = await response.json();
  const postsJSX = posts.map((post) => {
    return (
      <div
        key={post.id}
        className=" rounded-xl bg-sky-300 px-4 py-8 my-4 max-w-2xl"
      >
        <Link href={`posts/${post.id}`}>
          <h1 className="font-semibold text-slate-100 capitalize text-[18-px]">
            {post.title}
          </h1>
        </Link>
        <p className="text-[14px]">{post.body}</p>
      </div>
    );
  });
  return (
    <div className=" flex items-center justify-center flex-col">{postsJSX}</div>
  );
}
