import Section from 'components/Section/Section';
import ContactsForm from 'components/ContactsForm/ContactsForm';
import ContactsList from 'components/ContactsList/ContactsList';
import Filter from 'components/Filter/Filter';
import Container from 'components/Container/Container';

function App() {
  return (
    <Container>
      <Section title="Phonebook">
        <ContactsForm />
      </Section>
      <Section title="Contacts">
        <Filter />
        <ContactsList />
      </Section>
    </Container>
  );
}

export default App;
