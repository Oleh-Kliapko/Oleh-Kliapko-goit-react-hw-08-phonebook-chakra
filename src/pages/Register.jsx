import { useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import {
  FormControl,
  FormLabel,
  Input,
  FormHelperText,
  Button,
  useColorMode,
} from '@chakra-ui/react';
import { AtSignIcon, LockIcon, StarIcon } from '@chakra-ui/icons';
import autOperations from 'redux/auth/authOperations';

const Register = () => {
  const schema = yup
    .object({
      name: yup.string().required(),
      email: yup.string().email().nullable().required(),
      password: yup.string().required(),
    })
    .required();

  const { register, handleSubmit, reset } = useForm({
    resolver: yupResolver(schema),
  });

  const { colorMode } = useColorMode();
  const dispatch = useDispatch();

  const onFormSubmit = ({ name, email, password }) => {
    dispatch(autOperations.register({ name, email, password }));
    reset();
  };

  return (
    <FormControl
      as="form"
      display="flex"
      flexDirection="column"
      w="70vw"
      gap={5}
      p={7}
      onSubmit={handleSubmit(onFormSubmit)}
    >
      <FormLabel htmlFor="name">
        <StarIcon color="gray.600" mb={1} /> Name
        <Input type="text" {...register('name', { required: true })} />
        <FormHelperText fontSize={12} color="teal.500" mt={1}>
          Name may contain only letters, apostrophe and spaces
        </FormHelperText>
      </FormLabel>
      <FormLabel htmlFor="email">
        <AtSignIcon color="gray.600" mb={1} /> E-mail
        <Input type="email" {...register('email', { required: true })} />
        <FormHelperText fontSize={12} color="teal.500" mt={1}>
          Email must be valid and contain @
        </FormHelperText>
      </FormLabel>
      <FormLabel htmlFor="password">
        <LockIcon color="gray.600" mb={1} /> Password
        <Input type="password" {...register('password', { required: true })} />
        <FormHelperText fontSize={12} color="teal.500" mt={1}>
          Password must be at least 7 characters long
        </FormHelperText>
      </FormLabel>
      <Button
        type="submit"
        w={48}
        bg={colorMode === 'dark' ? 'teal.500' : 'teal.200'}
      >
        Save contact
      </Button>
    </FormControl>
  );
};

export default Register;
