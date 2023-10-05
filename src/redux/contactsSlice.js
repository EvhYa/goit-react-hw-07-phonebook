import { createSlice } from '@reduxjs/toolkit';
import { fetchContacts, addContact, deleteContact } from './operations';
import toast from 'react-hot-toast';

const initialStateContacts = {
  items: [],
  isLoading: false,
  error: null,
  isRemoveProcess: false,
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: initialStateContacts,
  // reducers: {
  //   addContact: {
  //     reducer: (state, action) => {
  //       state.items.push(action.payload);
  //     },
  //     prepare: contact => {
  //       return { payload: { ...contact, id: nanoid() } };
  //     },
  //   },
  //   removeContact(state, action) {
  //     state.items = state.items.filter(
  //       contact => contact.id !== action.payload);
  //   },
  // },
  extraReducers: builder => {
    builder
      .addCase(fetchContacts.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items = action.payload;
      })
      .addCase(fetchContacts.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(addContact.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(addContact.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items.push(action.payload);
      })
      .addCase(addContact.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(deleteContact.pending, (state, action) => {
        state.isRemoveProcess = true;
      })
      .addCase(deleteContact.fulfilled, (state, action) => {
        state.isRemoveProcess = false;
        state.error = null;
        toast.success(`Contact with ID:${action.payload.id} has been removed`);
        const index = state.items.findIndex(
          contact => contact.id === action.payload.id
        );
        state.items.splice(index, 1);
      })
      .addCase(deleteContact.rejected, (state, action) => {
        state.isRemoveProcess = false;
        state.error = action.payload;
      });
  },
});

export const contactsReducer = contactsSlice.reducer;
