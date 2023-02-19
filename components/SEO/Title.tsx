import React from 'react';
import Head from 'next/head';
import { SITE_TITLE } from 'types/constants';

type Props = { title?: string };

const Title = ({ title }: Props) => {
  const temp = title ? title + ' | ' + SITE_TITLE : SITE_TITLE;
  return (
    <Head>
      <title>{temp}</title>
    </Head>
  );
};

export default Title;
