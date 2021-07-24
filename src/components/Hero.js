import React from 'react'
import { Box, Button, Text, Image, Center, Flex, Grid } from '@chakra-ui/react';
import image from '../images/camera-girl.svg';

const Hero = () => {
  return (

    <Flex 
      bg="#db352E"
      h="50vh"
      >
      <Center w="50%">
        <Text
          className="text-focus-in"
          objectFit="contain"
          fontWeight="bold"
          fontSize="8rem"
          color="white"
        >Sachi Arts</Text>
      </Center>

      <Center w="50%">
        <Image 
          src={image}
          h="100%"
          m="auto"
          paddingBottom="10vh"
        />
      </Center>
    </Flex>

    // <Box 
    //   backgroundColor="#DB352E" 
    //   w="100%" 
    //   position="relative" 
    //   h="70vh">
    //   <Grid templateRows="(2, 1fr)">
    //   {/* <Flex gridTemplateRows="(2, 1fr)"> */}
    //   <Text
    //     className="text-focus-in"
    //     position="absolute"
    //     // bottom="20%"
    //     w="50%"
    //     textAlign="center"
    //     alignSelf="center"
    //     color="white"
    //     fontWeight="bold"
    //     fontSize="4rem"
    //   >
    //     Sachi Arts
    //   </Text>
    //   <Image 
    //     src={image} 
    //     h="100%" 
    //     // m="auto" 
    //     objectFit="contain" 
    //     // objectPosition={["top", "center"]}
    //     // textAlign="center"
    //   />
    //   {/* </Flex> */}
    //   {/* <Text
    //     className="text-focus-in"
    //     position="absolute"
    //     bottom="20%"
    //     w="100%"
    //     textAlign="center"
    //     color="white"
    //     fontWeight="bold"
    //     fontSize="4rem"
    //   >
    //     Sachi Arts
    //   </Text> */}
    //   </Grid>
    //   {/* <Center>
    //     <Button
    //       w="10rem"
    //       backgroundColor="#111514"
    //       color="white"
    //       _hover={{ opacity: '70%' }}
    //       position="absolute"
    //       bottom="10%"
    //     >
    //       Shop Now
    //     </Button>
    //   </Center> */}
    // </Box>
  )
}

export default Hero
