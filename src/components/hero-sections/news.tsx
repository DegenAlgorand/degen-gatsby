import { Box, Heading, Link, Text, } from '@chakra-ui/react';
import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';

const News = () => {
  const data = useStaticQuery(query);
    return (
      <Box mw={960} pt={10}>
        <Heading textDecoration={'underline'} pb={10}>News</Heading>
          <Heading as={'h4'}>Degen is on PactFi Community Aeneas Awards!</Heading>
        </Box>
    )
}

export const query = graphql`
  {
    allMdx(sort: {fields: frontmatter___date, order: DESC}) {
      edges {
        node {
          id
          excerpt
          frontmatter {
            date
            title
          }
          slug
        }
      }
    }
  }
`

export default News;