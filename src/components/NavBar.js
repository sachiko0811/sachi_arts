import React, { useContext } from 'react';
import { Flex , Icon, Image, Box, Badge } from '@chakra-ui/react';
import { ShopContext } from '../context/shopContext';
import { Link } from 'react-router-dom';
// import { MdMenu, MdShoppingBasket } from 'react-icons/md';

import logo from '../images/Icon.png';

const NavBar = () => {

  const { openCart, openMenu, checkout } = useContext(ShopContext);

  return (
    <Flex backgroundColor="#FFF" flexDirection="row" alignItems="center" justifyContent="space-between" p="2rem">
      <Icon 
        fill="white" 
        cursor="pointer" 
        // as={MdMenu} 
        w={30} 
        h={30}
        onClick={() => openMenu()}
      ></Icon>
      <Link to="/">
      <Image 
        src={logo} 
        w={100} 
        h={100} />
      </Link>
      <Box>
        <Icon 
          fill="white" 
          cursor="pointer" 
          // as={MdShoppingBasket} 
          w={30} 
          h={30} 
          onClick={() => openCart()}
        />
        <Badge backgroundColor="#DB352E" borderRadius="50%">{checkout.lineItems?.length}</Badge>
      </Box>
      
    </Flex>
  )
}

export default NavBar;
