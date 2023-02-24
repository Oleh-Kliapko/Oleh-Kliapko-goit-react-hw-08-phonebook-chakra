import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { Text, Flex, Container } from '@chakra-ui/react';
import ContactItem from 'components/ContactItem';
import AddContactForm from 'components/AddContactForm';
import Filter from 'components/Filter';
import {
  selectFilteredContacts,
  selectIsLoading,
} from 'redux/contacts/contactSelectors';
import { fetchContacts } from 'redux/contacts/contactOperations';
import { Loader } from 'utils/loader';

const Contacts = () => {
  const filteredContacts = useSelector(selectFilteredContacts);
  const isLoading = useSelector(selectIsLoading);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Container maxW={'container.lg'}>
      <AddContactForm />
      <Filter />
      <Text fontSize="2xl" fontWeight="bold" mb={4}>
        My lovely contacts
      </Text>
      {isLoading && <Loader />}
      <Flex gap={12} flexWrap="wrap">
        {filteredContacts.map(item => (
          <ContactItem key={item.id} contacts={item} />
        ))}
      </Flex>
    </Container>
  );
};

export default Contacts;
