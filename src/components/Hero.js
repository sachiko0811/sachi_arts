import React from 'react'
import { Box, Button, Text, Image, Center } from '@chakra-ui/react';

const Hero = () => {
  return (
    <Box backgroundColor="#DB352E" w="100%" position="relative" h="70vh">
      <Image src="https://lh3.googleusercontent.com/proxy/YBEC683s6t-dJVaStd44virJM9e56HLDsKogdNshICpPuf9BlJMneZxd7JuRbnCMCjVpzOhtexvB7HA-Q-oJJiRlSK-BoSRRvNwRY4Fp3tT3Ftf0TWvS46h8tVB414mkktQ-0xh8DHlnRqjd7ckMi3dxeXfdjH4" 
      h="100%" m="auto" objectFit="contain" objectPosition={["top", "center"]}
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
