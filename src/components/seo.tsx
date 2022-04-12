import React from 'react';
import { Helmet } from 'react-helmet';

interface ISeo {
  title?: string;
}

const SEO = ({ title }: ISeo) => (
  <Helmet>
    <meta charSet="utf-8" />
    <title>{ title ? `Degen > ${title}` : 'Degen Community'}</title>
    <link rel="canonical" href="https://degentoken.xyz" />
  </Helmet>
)

export default SEO;
