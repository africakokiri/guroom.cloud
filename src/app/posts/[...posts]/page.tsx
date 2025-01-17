import { Darkmode } from "@/components/darkmode-switch";
import { StackImage } from "@/components/images/stack-image";
import { MDXContent } from "@/components/mdx-content";

import { posts } from "../../../../.velite";

import { Inter } from "next/font/google";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

const getPostByParams = async (resolvedParams: string[]) => {
  const params = `posts/${resolvedParams[0]}/${resolvedParams[1]}`;

  const post = posts.find((post) => post.slug.toLowerCase() === params);

  return post;
};

export default async function PostDetailPage({
  params
}: {
  params: Promise<{ posts: string[] }>;
}) {
  const resolvedParams = await params;

  const post = await getPostByParams(resolvedParams.posts);

  if (!post) {
    throw new Error("포스트 없삼");
  }

  return (
    <div className="space-y-12 self-center px-4">
      <div className="">
        <nav
          className="fixed flex w-[calc(100vw-32px)] items-center
justify-between border-b-[1px] border-black/20 bg-white py-4
dark:border-white/20 dark:bg-black"
        >
          <Link href="/">
            <span className="text-xl">구름</span>
          </Link>
          <Darkmode />
        </nav>
        <header className="space-y-4 pt-24">
          <h1 className={`${inter.className} text-3xl font-extrabold`}>
            {post.title}
          </h1>
          <p className="flex items-center justify-between text-sm">
            <span>{post.date}</span>
            <StackImage slug={post.slug} />
          </p>
        </header>
      </div>

      <article
        className="prose self-center overflow-x-hidden py-20 pt-0
text-black dark:text-white"
      >
        <div className="">
          <MDXContent code={post.code} />
        </div>
      </article>
    </div>
  );
}
