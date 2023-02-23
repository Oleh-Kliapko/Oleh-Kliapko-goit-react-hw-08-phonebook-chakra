import { useDispatch, useSelector } from 'react-redux';
import { Image, Flex, Text, Button, useColorMode } from '@chakra-ui/react';
import { getUser } from 'redux/auth/authSelectors';
import authOperations from 'redux/auth/authOperations';
import avatar from 'images/user.png';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const user = useSelector(getUser);

  const { colorMode } = useColorMode();

  return (
    <>
      <Flex align="center" pos="absolute" right={24}>
        <Image src={avatar} alt="Avatar" w={8} mr={2} />
        <Text mr={16} fontSize="18px">
          Welcome, {user.name}
        </Text>
        <Button
          type="button"
          w={24}
          shadow={colorMode === 'dark' ? 'dark-lg' : 'md'}
          bg={colorMode === 'dark' ? 'teal.500' : 'teal.200'}
          onClick={() => dispatch(authOperations.logOut())}
        >
          Log Out
        </Button>
      </Flex>
    </>
  );
};
