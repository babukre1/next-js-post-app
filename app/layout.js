import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="px-9 bg-sky-200">
          <ul className="flex justify-center gap-3 items-center w-full py-4 list-none">
            <li className="text-[25px] font-semibold">
              <Link className="no-underline text-slate-800 text-[20px]" href="/">Home</Link>
            </li>
            <li className="text-[25px] font-semibold">
              <Link className="no-underline text-slate-800 text-[20px]" href="/posts">Posts</Link>
            </li>
            <li className="text-[25px] font-semibold">
              <Link className="no-underline text-slate-800 text-[20px]" href="/articles">Articles</Link>
            </li>
            <li className="text-[25px] font-semibold">
              <Link className="no-underline text-slate-800 text-[20px]" href="/about">About</Link>
            </li>
          </ul>
        </div>
        {children}
      </body>
    </html>
  );
}
