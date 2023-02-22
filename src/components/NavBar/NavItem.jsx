import { NavLink } from 'react-router-dom';
import { Box, useColorMode } from '@chakra-ui/react';

export const NavItem = ({ title, to }) => {
  const { colorMode } = useColorMode();
  const activeLink =
    colorMode === 'dark' ? { color: 'red.200' } : { color: 'red.500' };

  return (
    <Box as={NavLink} fontSize="2xl" _activeLink={activeLink} to={to}>
      {title}
    </Box>
  );
};
