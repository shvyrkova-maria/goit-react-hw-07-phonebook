import PropTypes from 'prop-types';
import { FaUser, FaPhoneAlt } from 'react-icons/fa';

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
  const { data: contacts, isFetching } = useFetchContactsQuery(null, {
    refetchOnReconnect: true,
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
