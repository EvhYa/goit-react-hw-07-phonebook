import { GlobalStyle } from './GlobalStyle';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import { Container } from './App.styled';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchContacts } from 'redux/operations';
import PropagateLoader from 'react-spinners/PropagateLoader';
import { getIsLoading } from 'redux/selector';
import { Toaster } from 'react-hot-toast';

export function App() {
  const dispatch = useDispatch();

  const loading = useSelector(getIsLoading);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Container>
      <Toaster />
      <GlobalStyle />
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      <Filter />
      <PropagateLoader color="purple" loading={loading} />
      {!loading && <ContactList />}
    </Container>
  );
}
