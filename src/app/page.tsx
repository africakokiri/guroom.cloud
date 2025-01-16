import { CloudImage } from "@/components/cloud-image";
import { Darkmode } from "@/components/darkmode-switch";

import { posts } from "../../.velite";

import Link from "next/link";

const sortedByDatePosts = posts.sort((a, b) => {
  if (a.date > b.date) return -1;
  if (a.date < b.date) return 1;

  return 0;
});

export default function MainPage() {
  return (
    <div className="space-y-8 px-4 pb-12 pt-4">
      <header className="relative flex flex-col items-center gap-8">
        <CloudImage />
        <Darkmode />
      </header>
      <ul className="space-y-8">
        {sortedByDatePosts.map(({ title, slug, date }) => {
          return (
            <li
              key={slug}
              className="rounded-lg bg-neutral-100 p-2 dark:bg-[#303030]"
            >
              <Link
                href={slug}
                className="space-y-4"
              >
                <p className="text-lg">{title}</p>
                <p className="flex justify-between text-sm">
                  <span>{slug.split("/")[1]}</span>
                  <span>{date}</span>
                </p>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
