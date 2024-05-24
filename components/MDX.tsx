import { FC } from 'react';
import Image from 'next/image';
import { useMDXComponent } from 'next-contentlayer/hooks';

export interface MDXProps {
  code: string;
}

const MDX: FC<MDXProps> = ({ code }) => {
  const Component = useMDXComponent(code);

  // eslint-disable-next-line jsx-a11y/alt-text
  return <Component components={{ img: (props: any) => <Image {...props} /> }} />;
};

export default MDX;
