import { Suspense } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { Box, Flex, Container, useColorMode } from '@chakra-ui/react';
import { ColorModeSwitcher } from 'utils/ColorModeSwitcher';
import { Logo } from 'images';
import { Loader } from 'utils/loader';

export const NavBar = () => {
  const { colorMode } = useColorMode();
  const activeLink =
    colorMode === 'dark' ? { color: 'red.200' } : { color: 'red.500' };

  return (
    <>
      <Box
        as="header"
        p={3}
        bg={colorMode === 'dark' ? 'gray.500' : 'gray.200'}
        boxShadow="xl"
        w="100%"
      >
        <Container maxW={'container.2xl'}>
          <Flex alignItems="center">
            <Logo boxSize="60px" objectFit="cover" pointerEvents="none" />
            <Flex as="nav" ml={10}>
              <Flex gap={10} flexWrap="wrap" justify="flex-start">
                <Box
                  as={NavLink}
                  fontSize="2xl"
                  _activeLink={activeLink}
                  to="/"
                >
                  Home
                </Box>
                <Box
                  as={NavLink}
                  fontSize="2xl"
                  _activeLink={activeLink}
                  to="/contacts"
                >
                  Contacts
                </Box>
              </Flex>
              <Flex gap={10} flexWrap="wrap" pos="absolute" right={32}>
                <Box
                  as={NavLink}
                  fontSize="2xl"
                  _activeLink={activeLink}
                  to="/login"
                >
                  Log In
                </Box>
                <Box
                  as={NavLink}
                  fontSize="2xl"
                  _activeLink={activeLink}
                  to="/register"
                >
                  Register
                </Box>
              </Flex>
            </Flex>
            <ColorModeSwitcher pos="absolute" right={6} />
          </Flex>
        </Container>
      </Box>
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </>
  );
};
