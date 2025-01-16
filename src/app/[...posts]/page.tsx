import { MDXContent } from "@/components/mdx-content";

import { posts } from "../../../.velite";

export default async function PostDetailPage({
  params
}: {
  params: Promise<{ slug: string }>;
}) {
  console.log(await params);

  return (
    <article>
      <MDXContent code={posts[0].code} />
    </article>
  );
}
