import PostDetailsComponent from "@/app/components/PostDetails";
import { Suspense } from "react";

export default function PostDetails({ params }) {
  const loadingJSX = (
    <div className="flex items-center justify-center h-screen">
      <div className="loader text-3xl">
        Loading<span className="dot animate-ping">&#8230;</span>
        <span className="dot animate-ping" style={{ animationDelay: "0.2s" }}>
          &#8230;
        </span>
        <span className="dot animate-ping" style={{ animationDelay: "0.4s" }}>
          &#8230;
        </span>
      </div>
    </div>
  );
  return (
    <div>
      <h1>Post Details</h1>
      <Suspense fallback={loadingJSX}>
        <PostDetailsComponent postId={params.postid} />
      </Suspense>
    </div>
  );
}
