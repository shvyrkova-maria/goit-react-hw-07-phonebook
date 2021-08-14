import PropTypes from 'prop-types';
import { FaUser, FaPhoneAlt } from 'react-icons/fa';
import { useSelector } from 'react-redux';
import { getFilterValue } from 'redux/contacts/contactsSelectors';
import toast from 'react-hot-toast';
import {
  Contacts,
  ContactsItem,
  ContactsDetails,
  Button,
} from 'components/ContactsList/ContactsList.styled';
import {
  useFetchContactsQuery,
  useDeleteContactMutation,
} from 'services/contactApi';

function ContactsList() {
  const filter = useSelector(getFilterValue);

  const filteredContacts = (filterValue, contacts) => {
    const normalizeFilter = filterValue.toLowerCase();
    return contacts
      ?.filter(
        ({ name, number }) =>
          name.toLowerCase().includes(normalizeFilter) ||
          number.includes(normalizeFilter),
      )
      .sort((a, b) => a.name.localeCompare(b.name));
  };

  const { contacts, isFetching } = useFetchContactsQuery(null, {
    refetchOnReconnect: true,
    selectFromResult: ({ data }) => ({
      contacts: filteredContacts(filter, data),
    }),
  });

  const [deleteContact] = useDeleteContactMutation();

  const handleDeleteContactOnClick = async (id, name) => {
    try {
      await deleteContact(id);
      toast.success(`Contact ${name} deleted`);
    } catch (error) {
      toast.error(error);
    }
  };

  return (
    <Contacts>
      {isFetching && <div>Loading...</div>}
      {contacts &&
        contacts.map(({ id, name, number }) => {
          return (
            <ContactsItem key={id}>
              <div>
                <ContactsDetails>
                  <FaUser size={14} />
                  <span>
                    <b>{name}</b>
                  </span>
                </ContactsDetails>
                <ContactsDetails>
                  <FaPhoneAlt size={14} />
                  <span>{number}</span>
                </ContactsDetails>
              </div>
              <Button
                type="button"
                onClick={() => handleDeleteContactOnClick(id, name)}
              >
                Delete
              </Button>
            </ContactsItem>
          );
        })}
    </Contacts>
  );
}

ContactsList.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string)),
};

export default ContactsList;
