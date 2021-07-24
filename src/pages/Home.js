import React, { useContext, useEffect }from 'react';
import { Link } from 'react-router-dom';
import { Box, Grid, Text, Image } from '@chakra-ui/react';

import { ShopContext } from '../context/shopContext';

import Hero from '../components/Hero';
import RichText from '../components/RichText';
import ImageWithText from '../components/ImageWithText';

 const Home = () => {

  const { fetchAllProducts, products } = useContext(ShopContext)

  useEffect(() => {
    fetchAllProducts()
  }, [fetchAllProducts])

  console.log(products);

  if(!products) return <div>Loadings...</div>

  return (
    <Box>
      <Hero />
      <RichText 
        heading="The moment I can't forget."
        text="Post cards "
      />
      <Grid templateColumns="repeat(3, 1fr)">
      {
        products.map(product => (
          <Link 
            to={`/products/${product.handle}`} 
            key={product.id}
            >
              <Box _hover={{ opacity: '80%' }} textAlign="center" position="relative">
                <Image src={product.images[0].src} />
                <Text position="absolute" bottom="15%" w="100%" fontWeight="bold" color="whiteAlpha.800">
                  {product.title}
                </Text>
                <Text position="absolute" bottom="5%" w="100%" color="whiteAlpha.700">
                  ${product.variants[0].price}
                </Text>
              </Box>
          </Link>
        ))
      }
      </Grid>
      <RichText 
        heading="Find Your Favorite Photo!"
      />
      <ImageWithText  
        image="https://cdn.shopify.com/s/files/1/0572/2085/8005/files/blue-nemo.jpg?v=1622670036" 
        heading="Nemophila" 
        link="/products/blue-nemo"
        text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
      />

      <ImageWithText 
        reverse 
        image="https://cdn.shopify.com/s/files/1/0572/2085/8005/files/tokyo-night.jpg?v=1622670167" 
        heading="The city night" 
        link="/products/tokyo-night"
        text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
      />
    </Box>
  )
}

export default Home;

