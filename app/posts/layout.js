export const metadata = {
    title: "post page",
}
export default function ({ children }) {
  return (
    <div>
      <div>Articles</div>
      <div className="">{children}</div>
    </div>
  );
}
