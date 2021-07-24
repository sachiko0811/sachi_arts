import React from 'react';
import { Box, Flex, Button, Text, Image, Heading } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

const ImageWithText = ({ reverse, image, heading, text, link }) => {

  const reverseSection = reverse ? 'row-reverse' : 'row';

  return (
    <Box>
      <Flex flexDir={['column', reverseSection]} w="100%">
        <Image src={image} objectFit="cover" w={["100%", "50%"]}/>
        <Flex w={["100%", "50%"]} flexDir="column" justifyContent="center" alignItems="center" p="2rem">
          <Heading p="2rem">
            {heading && heading}
          </Heading>
          <Text p="2rem">
            {text && text}
          </Text>
          <Link to={link}>
            <Button
              w="10rem"
              backgroundColor="#111514"
              color="white"
              _hover={{ opacity: '70%' }}
            >
              Buy Now
            </Button>
          </Link>
        </Flex>
      </Flex>
    </Box>
  )
}

export default ImageWithText
