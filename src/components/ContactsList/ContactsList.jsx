import PropTypes from 'prop-types';
import { FaUser, FaPhoneAlt } from 'react-icons/fa';
import { useSelector } from 'react-redux';
import { getFilterValue } from 'redux/contacts/contactsSelectors';

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

const filteredContacts = (filterValue, contacts) => {
  const normalizeFilter = filterValue.toLowerCase();
  return contacts?.filter(
    ({ name, number }) =>
      name.toLowerCase().includes(normalizeFilter) ||
      number.includes(normalizeFilter),
  );
};

function ContactsList() {
  const filter = useSelector(getFilterValue);

  const { contacts, isFetching } = useFetchContactsQuery(null, {
    refetchOnReconnect: true,
    selectFromResult: ({ data }) => ({
      contacts: filteredContacts(filter, data),
    }),
  });

  const [deleteContact] = useDeleteContactMutation();

  const handleDeleteContactOnClick = async id => {
    try {
      await deleteContact(id);
    } catch (error) {
      console.log(error);
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
                  <span>{name}</span>
                </ContactsDetails>
                <ContactsDetails>
                  <FaPhoneAlt size={14} />
                  <span>{number}</span>
                </ContactsDetails>
              </div>
              <Button
                type="button"
                onClick={() => handleDeleteContactOnClick(id)}
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
