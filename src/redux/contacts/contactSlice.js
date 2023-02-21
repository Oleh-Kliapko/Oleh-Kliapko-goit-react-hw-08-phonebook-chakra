import { createSlice } from '@reduxjs/toolkit';
import { fetchContacts, addContact, deleteContact } from './contactOperations';

const contacts = {
  items: [],
  isLoading: false,
  error: null,
};

const onPending = state => {
  state.isLoading = true;
};
const onRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

export const contactSlice = createSlice({
  name: 'contact',
  initialState: contacts,
  extraReducers: {
    [fetchContacts.pending]: onPending,
    [fetchContacts.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.items = action.payload;
    },
    [fetchContacts.rejected]: onRejected,

    [addContact.pending]: onPending,
    [addContact.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.items.unshift(action.payload);
    },
    [addContact.rejected]: onRejected,

    [deleteContact.pending]: onPending,
    [deleteContact.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      const index = state.items.findIndex(({ id }) => id === action.payload.id);
      state.items.splice(index, 1);
    },
    [deleteContact.rejected]: onRejected,
  },
});
