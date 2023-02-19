import { Flex, Image, Box, useColorMode } from '@chakra-ui/react';
import bookImg from 'images/bookImg.jpg';

const Home = () => {
  const { colorMode } = useColorMode();
  const colorText = colorMode === 'dark' ? 'green.200' : 'green.800';

  return (
    <Flex alignItems="center" flexDirection="column" gap={5} p={5} pt="120px">
      <Box as="samp" fontSize="xl" color={colorText}>
        This is a cool utility to create your own phone book.
      </Box>
      <Image src={bookImg} alt="book" borderRadius="full" />
      <Box as="samp" fontSize="xl" color={colorText}>
        If you are visiting for the first time, please register for this.
      </Box>
      <Box
        as="samp"
        fontSize="xl"
        color={colorMode === 'dark' ? 'purple.200' : 'purple.800'}
      >
        Otherwise, log in and manage your contact collection.
      </Box>
    </Flex>
  );
};

export default Home;
