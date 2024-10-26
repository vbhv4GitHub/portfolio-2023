'use client';

import { useMDXComponent } from 'next-contentlayer2/hooks';

type MDXContentProps = {
  code: string;
  components: Record<string, React.ComponentType<any>>;
};

export function MDXContent({ code, components }: MDXContentProps) {
  const MDXComponent = useMDXComponent(code);
  return <MDXComponent components={components} />;
}
