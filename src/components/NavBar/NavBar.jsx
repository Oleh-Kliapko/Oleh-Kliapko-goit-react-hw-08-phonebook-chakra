import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Box, Flex, Container, useColorMode } from '@chakra-ui/react';
import { ColorModeSwitcher } from 'utils/ColorModeSwitcher';
import { Logo } from 'images';
import { Loader } from 'utils/loader';
import { getIsLoggedIn } from 'redux/auth/authSelectors';
import UserMenu from 'components/UserMenu';
import { NavItem } from './NavItem';

export const NavBar = () => {
  const isLoggedIn = useSelector(getIsLoggedIn);
  const { colorMode } = useColorMode();

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
            <Logo boxSize="40px" objectFit="cover" pointerEvents="none" />
            <Flex as="nav" ml={10}>
              <Flex gap={10} flexWrap="wrap" justify="flex-start">
                {!isLoggedIn && <NavItem title="Home" to="/" />}
                {isLoggedIn && <NavItem title="My contacts" to="/contacts" />}
              </Flex>
              {!isLoggedIn && (
                <Flex gap={10} flexWrap="wrap" pos="absolute" right={32}>
                  <NavItem title="Log In" to="/login" />
                  <NavItem title="Register" to="/register" />
                </Flex>
              )}
              {isLoggedIn && <UserMenu />}
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
