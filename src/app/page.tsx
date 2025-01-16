import { Darkmode } from "@/components/darkmode-switch";
import { CloudImage } from "@/components/images/cloud-image";
import { StackImage } from "@/components/images/stack-image";

import { posts } from "../../.velite";

import Link from "next/link";

const sortedByDatePosts = posts.sort((a, b) => {
  if (a.date > b.date) return -1;
  if (a.date < b.date) return 1;

  return 0;
});

const Header = () => {
  return (
    <header className="relative flex flex-col items-center gap-8 md:w-1/3">
      <CloudImage />
      <Darkmode />
    </header>
  );
};

const PostsList = () => {
  return (
    <section
      className="scrollbar-hide w-full pb-12 md:h-[85vh] md:max-h-screen
md:w-1/2 md:overflow-y-scroll"
    >
      <ul className="space-y-8">
        {sortedByDatePosts.map(({ title, slug, date }) => {
          return (
            <li
              key={slug}
              className="rounded-lg border-[1px] border-neutral-500/20
bg-neutral-100 dark:border-white/20 dark:bg-[#303030]"
            >
              <Link
                href={slug.toLowerCase()}
                className="block h-full w-full space-y-4 p-4 md:pb-2"
              >
                <p className="text-lg font-[400]">{title}</p>
                <p className="flex items-center justify-between text-xs">
                  <span>{date}</span>
                  <StackImage slug={slug} />
                </p>
              </Link>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default function MainPage() {
  return (
    <div
      className="max-h-screen space-y-8 px-4 pt-4 md:flex md:max-w-[1024px]
md:items-center md:justify-between"
    >
      <Header />
      <PostsList />
    </div>
  );
}
