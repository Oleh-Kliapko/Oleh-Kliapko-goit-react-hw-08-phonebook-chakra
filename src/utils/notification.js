import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const alreadyInContact = addedName =>
  toast.warn(`"${addedName}" is already in contacts`);

export const commonError = () => toast.error('Something is wrong. Try again');

export const registerSuccess = () =>
  toast.success('You have registered. Enjoy creating your own phone book');

export const registerError = () =>
  toast.error('Your registration was failed. Try again');

export const loginError = () =>
  toast.error('Your loginisation was failed. Try again');

export const logoutError = () => toast.error('Logout failed. Try again');
