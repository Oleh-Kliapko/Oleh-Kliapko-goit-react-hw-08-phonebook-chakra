import { Flex } from '@chakra-ui/react';
import ContactItem from 'components/ContactItem';

const contacts = {
  items: [
    { id: 'id-1', name: 'Oleh Kliapko', number: '333-33-33' },
    { id: 'id-2', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-3', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-4', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-5', name: 'Annie Copeland', number: '227-91-26' },
  ],
};

const Contacts = () => {
  const { items } = contacts;

  return (
    <Flex p={7} pt="120px" gap={5} flexWrap="wrap">
      {items.map(item => (
        <ContactItem key={item.id} contacts={item} />
      ))}
    </Flex>
  );
};

export default Contacts;
