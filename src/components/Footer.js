import React from 'react';
import { Link } from 'react-router-dom';
import { Grid, Box, Text, Image, VStack } from '@chakra-ui/react';

const Footer = () => {
  return (
    <Box backgroundColor="#DB352E">
      <Grid templateColumns={["repeat(3, 1fr)", "repeat(3, 1fr)"]} color="white" fontWeight="bold">
        <Image src="" />
        <VStack p="2rem">
          <Link to="/products/blue-nemo">Nemophila</Link>
          <Link to="/products/gerbera-daisy">Gerbera</Link>
          <Link to="/products/tokyo-night">The City Night</Link>
        </VStack>
        <VStack p="2rem">
          <Link to="/">Home</Link>
        </VStack>
      </Grid>
      <Box>
        <Text textAlign="center" color="white" w="100%" borderTop="1px solid white" p="1rem">
        ©︎ Copyright www.workingwithshopify.com
        </Text>
      </Box>
    </Box>
  )
}

export default Footer;