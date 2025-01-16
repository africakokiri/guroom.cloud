import { Darkmode } from "@/components/darkmode-switch";
import { MDXContent } from "@/components/mdx-content";

import { posts } from "../../../.velite";

export default async function PostDetailPage({
  params
}: {
  params: Promise<{ slug: string }>;
}) {
  return (
    <div>
      <nav
        className="fixed flex w-full items-center justify-between
border-b-[1px] border-black bg-white p-4 dark:border-white dark:bg-black"
      >
        <h1 className="text-xl">구름</h1>
        <Darkmode />
      </nav>
      <article className="max-w-[768px] overflow-x-hidden px-4 py-20">
        <div>
          <h1 className="text-2xl font-bold">{posts[0].title}</h1>
        </div>
        <MDXContent code={posts[0].code} />
      </article>
    </div>
  );
}
