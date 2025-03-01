'use client';

import { Suspense } from 'react';
import { useMDXComponent } from 'next-contentlayer2/hooks';
import InternalLink from 'components/UI/InternalLink/InternalLink';
import ExternalLink from 'components/UI/ExternalLink/ExternalLink';

type MDXContentProps = {
  code: string;
};

const components = { InternalLink, ExternalLink };

export function MDXContent({ code }: MDXContentProps) {
  const MDXComponent = useMDXComponent(code);

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <MDXComponent components={components} />
    </Suspense>
  );
}
