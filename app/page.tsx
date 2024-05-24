import Link from 'next/link';
import { ArrowUpRightIcon } from 'lucide-react';
import { compareDesc } from 'date-fns';
import List from '@/components/List';
import { allBlogs, allWeeklies } from 'contentlayer/generated';

export default async function Page() {
  const weeklyList = allWeeklies
    .sort((a, b) => compareDesc(new Date(a.date), new Date(b.date)))
    .slice(0, 5);

  const blogList = allBlogs
    .sort((a, b) => compareDesc(new Date(a.date), new Date(b.date)))
    .slice(0, 5);

  return (
    <>
      <div className="pt-10 pb-6 px-3">
        <h1 className={`flex flex-col text-3xl text-black leading-normal tracking-wider`}>
          <span>Hello,</span>
          <span>I&apos;m Paranoid_K</span>
        </h1>
        <div className="mt-6 text-gray-900 space-y-1.5">
          <p>🧑‍💻 前端开发者 / Front-end Developer</p>
          <p>🤩 正在做一些有趣的事 / Working on something interesting</p>
        </div>
      </div>
      <div className="mt-8">
        <div className="flex items-center justify-between px-3">
          <h2 className="font-medium text-xl text-gray-800">周刊</h2>
          <Link
            className="text-gray-400 transition-colors hover:text-gray-600"
            href="/weekly"
            title="查看全部"
          >
            <ArrowUpRightIcon size={20} />
          </Link>
        </div>
        <List data={weeklyList} className="mt-4" />
      </div>
      <div className="mt-8 mb-8">
        <div className="flex items-center justify-between px-3">
          <h2 className="font-medium text-xl text-gray-800">博客</h2>
          <Link
            className="text-gray-400 transition-colors hover:text-gray-600"
            href="/blog"
            title="查看全部"
          >
            <ArrowUpRightIcon size={20} />
          </Link>
        </div>
        <List data={blogList} className="mt-4" />
      </div>
    </>
  );
}
