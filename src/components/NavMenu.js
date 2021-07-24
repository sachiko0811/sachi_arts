import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { 
  Drawer,
  DrawerBody, 
  DrawerCloseButton, 
  DrawerContent, 
  DrawerFooter, 
  DrawerHeader, 
  DrawerOverlay,
  VStack,
  Grid,
  Text,
  Flex,
  Image,
  Box,
 } from '@chakra-ui/react';

import { ShopContext } from '../context/shopContext';


const NavMenu = () => {

  const { isMenuOpen, closeMenu } = useContext(ShopContext) 

  return (
    <Drawer isOpen={isMenuOpen} onClose={closeMenu} placement="left" size="sm">
      <DrawerOverlay>
        <DrawerContent>
          <DrawerCloseButton />
            <DrawerHeader>Menu</DrawerHeader>
            <DrawerBody>
              <VStack p="2rem">
                <Link to="/">Home</Link>
                <Link to="/products/blue-nemo">Nemophila</Link>
                <Link to="/products/gerbera-daisy">Gerbera</Link>
                <Link to="/products/tokyo-night">The city night</Link>
              </VStack>
            </DrawerBody>
            <DrawerFooter textAlign="center">
              <Text w="100%">©︎ Copyright www.workingwithshopify.com</Text>
            </DrawerFooter>
        </DrawerContent>
      </DrawerOverlay>
    </Drawer>
  )
}

export default NavMenu;