import {
  Avatar,
  Text,
  Flex,
  Button,
  IconButton,
  useColorMode,
} from '@chakra-ui/react';
import { PhoneIcon, DeleteIcon } from '@chakra-ui/icons';

export const ContactItem = ({ contacts }) => {
  const { colorMode } = useColorMode();
  const {
    // id,
    name,
    number,
  } = contacts;

  return (
    <Flex
      p={3}
      gap={7}
      boxShadow="lg"
      minW="260px"
      bg={colorMode === 'dark' ? 'gray.600' : 'gray.100'}
    >
      <Avatar name={name} src="" />
      <Flex flexDirection="column" justify="space-between" gap={2}>
        <Text fontSize="xl" fontWeight="semibold">
          {name}
        </Text>
        <Text as="samp" fontSize="lg">
          {
            <IconButton
              variant="outline"
              colorScheme="teal"
              aria-label="Call Sage"
              fontSize="16px"
              icon={<PhoneIcon />}
            />
          }{' '}
          {number}
        </Text>
        <Button
          type="button"
          colorScheme="teal"
          size="sm"
          //   onClick={() => deleteContact(id)}
        >
          Delete contact
          <DeleteIcon ml={2} />
        </Button>
      </Flex>
    </Flex>
  );
};
