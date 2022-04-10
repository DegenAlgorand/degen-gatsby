import { Box, Center, Heading, Link, Text } from '@chakra-ui/react';
import { graphql } from 'gatsby';
import React from 'react';
import Layout from '../../layout';

const Posts = ({ data }) => {
  return (
    <Layout>
      <Center>
        <Box pt={10}>
        <Heading>Blog Posts</Heading>
        {data.allMdx.edges.map((e) => {
          return (
            <Box key={e.node.id} pt={5}>
              <Link href={`/${e.node.slug}`} >
                <Text fontSize={'4xl'}>
                  {e.node.frontmatter.title}
                </Text>
              </Link>
              <Text>
                {e.node.frontmatter.date}
              </Text>
              <Text>
                {e.node.excerpt}
              </Text>
            </Box>       
            )
          })}
        </Box>
      </Center>
    </Layout>
  );
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

export default Posts;
