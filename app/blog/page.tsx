import { Metadata } from 'next';
import { compareDesc } from 'date-fns';
import List from '@/components/List';
import { allBlogs } from 'contentlayer/generated';

export const metadata: Metadata = {
  title: `Paranoid_K's Blog`,
};

export default async function Page() {
  const blogList = allBlogs.sort((a, b) => compareDesc(new Date(a.date), new Date(b.date)));

  return (
    <>
      <div className="pt-10 pb-6 px-3">
        <h1 className={`flex flex-col text-3xl text-black leading-normal tracking-wider`}>
          博客 / Blog
        </h1>
      </div>
      <List data={blogList} />
    </>
  );
}
