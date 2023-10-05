import { useSelector } from 'react-redux';
import { Container, List } from './ContactList.styled';
import { getContacts, getFilter } from 'redux/selector';
import { ContactListItem } from './ContactListItem';

export function ContactList() {
  const items = useSelector(getContacts);
  const filter = useSelector(getFilter);

  const filteredContacts = () => {
    return items.filter(({ name }) =>
      name.toLocaleLowerCase().includes(filter.toLocaleLowerCase())
    );
  };

  return (
    <Container>
      {filteredContacts().length ? (
        <List>
          {filteredContacts().map(contact => (
            <ContactListItem key={contact.id} {...contact} />
          ))}
        </List>
      ) : (
        <p>Contact is not found</p>
      )}
    </Container>
  );
}
