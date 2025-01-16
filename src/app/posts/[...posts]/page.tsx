import { Darkmode } from "@/components/darkmode-switch";
import { StackImage } from "@/components/images/stack-image";
import { MDXContent } from "@/components/mdx-content";

import { posts } from "../../../../.velite";

import Link from "next/link";

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
    <div className="flex flex-col items-center">
      <nav
        className="fixed flex w-full max-w-[650px] items-center
justify-between border-b-[1px] border-black bg-white p-4 dark:border-white
dark:bg-black"
      >
        <Link href="/">
          <h1 className="text-xl">구름</h1>
        </Link>
        <Darkmode />
      </nav>
      <article className="max-w-[650px] overflow-x-hidden px-4 py-20">
        <div className="space-y-4">
          <h1 className="text-2xl font-bold">{post.title}</h1>
          <p className="flex items-center justify-between text-sm">
            <span>{post.date}</span>
            <StackImage slug={post.slug} />
          </p>
        </div>
        <hr
          className="my-4 border-[0.5px] border-black/20
dark:border-white/20"
        />
        <MDXContent code={post.code} />
      </article>
    </div>
  );
}
