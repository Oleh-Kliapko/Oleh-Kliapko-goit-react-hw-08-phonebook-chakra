import {
  FormLabel,
  Input,
  FormHelperText,
  useColorMode,
} from '@chakra-ui/react';
import { AtSignIcon, LockIcon, StarIcon } from '@chakra-ui/icons';

export const FormItems = ({ type, helper }) => {
  const { colorMode } = useColorMode();
  const shadow = colorMode === 'dark' ? 'dark-lg' : 'md';

  let icon;

  switch (type) {
    case 'name':
      icon = <StarIcon color="gray.600" mb={1} />;
      break;
    case 'email':
      icon = <AtSignIcon color="gray.600" mb={1} />;
      break;
    case 'password':
      icon = <LockIcon color="gray.600" mb={1} />;
      break;
    default:
      return;
  }

  return (
    <FormLabel htmlFor={type}>
      {icon}
      {type}
      <Input shadow={shadow} />
      <FormHelperText fontSize={12} color="teal.500" mt={1}>
        {helper}
      </FormHelperText>
    </FormLabel>
  );
};
