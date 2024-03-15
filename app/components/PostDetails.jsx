async function PostDetailsComponent({ postId }) {
  console.log(postId);
  await new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, 3000);
  });
  const response = await fetch(
    "https://jsonplaceholder.typicode.com/posts/" + postId
  );
  const post = await response.json();

  return (
    <div>
      <div className=" rounded-xl bg-sky-300 px-4 py-8 my-4 max-w-2xl">
        <h4 className="font-semibold text-slate-500 capitalize text-[18-px]">
          {post.title}
        </h4>
        <p className="text-[14px]">{post.id}</p>
        <p className="text-[14px]">{post.body}</p>
      </div>
    </div>
  );
}

export default PostDetailsComponent;
