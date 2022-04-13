import React from 'react';
import { Button, Link } from '@chakra-ui/react';

const B = ({ title, link }) => (
  <Link href={link} target='_blank'>
    <Button w={'full'} bg={'purple.500'} mt={'20px'} >
      {title}
    </Button>
  </Link>
  
)

export default B;
