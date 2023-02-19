import { Avatar, Text, Flex, Button, useColorMode } from '@chakra-ui/react';
import { PhoneIcon } from '@chakra-ui/icons';

export const ContactItem = ({ contacts }) => {
  const { colorMode } = useColorMode();
  const { id, name, number } = contacts;

  return (
    <Flex
      p={3}
      gap={7}
      boxShadow="lg"
      minW="260px"
      bg={colorMode === 'dark' ? 'gray.600' : 'gray.100'}
    >
      <Avatar name={name} src="" />
      <Flex flexDirection="column" justifyContent="space-between" gap={2}>
        <Text fontSize="xl" as="b">
          {name}
        </Text>
        <Text as="samp" fontSize="lg">
          {<PhoneIcon />} {number}
        </Text>
        <Button
          type="button"
          colorScheme="teal"
          size="sm"
          //   onClick={() => deleteContact(id)}
        >
          Delete contact
        </Button>
      </Flex>
    </Flex>
  );
};
