import React from 'react'
import { Box, Button, Text, Image, Center } from '@chakra-ui/react';
import image from '../images/camera-girl.svg';

const Hero = () => {
  return (
    <Box backgroundColor="#DB352E" w="100%" position="relative" h="70vh">
      <Image 
        src={image} 
        h="100%" 
        m="auto" 
        objectFit="contain" 
        objectPosition={["top", "center"]}
      />
      <Text
        className="text-focus-in"
        position="absolute"
        bottom="20%"
        w="100%"
        textAlign="center"
        color="white"
        fontWeight="bold"
        fontSize="4rem"
      >
        Sachi Arts
      </Text>
      {/* <Center>
        <Button
          w="10rem"
          backgroundColor="#111514"
          color="white"
          _hover={{ opacity: '70%' }}
          position="absolute"
          bottom="10%"
        >
          Shop Now
        </Button>
      </Center> */}
    </Box>
  )
}

export default Hero
