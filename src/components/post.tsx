import React from "react";
import Layout from '../layout';
import { Center, Box, Heading, Code, Link} from '@chakra-ui/react'

import { MDXProvider } from "@mdx-js/react"
import SEO from "./seo";

const components = {
  h1: (props: string) => <Heading as='h1' size='xl' pb={10} {...props} />,
  h2: (props: any) => <Heading as='h1' size='l' pb={8} {...props} />,
  p: (props: any) => (
    <p style={{ fontSize: "18px", lineHeight: 1.6 }} {...props} />
  ),
  a: (props: {href: string, children: string}) => (
    <Link color='purple' href={props.href}>{props.children || 'Link'}</Link>
  ),
  code: (props: any) => (
    <Center>
        <Code bg="#3d3d3d" color="white" width={720} p={10} {...props} />
    </Center>
  )
}

interface IPost {
  title: string;
  date: string;
  children: JSX.Element;
}
const Post = ({ title, date, children }: IPost) => {
  return (
    <Layout>
      <SEO title={title} />
      <Center>
      <Box pt={20} w={960}>
        <Heading pb={5} as={'h1'}>{title}</Heading>
        <Heading as={'h6'} size={'sm'} pb={5}>
          <time dateTime={date}>{date}</time>
        </Heading>
        <MDXProvider components={components}>{children}</MDXProvider>
      </Box>
      </Center>
      
    </Layout>
  )
}

export default Post;
