import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { FaUser, FaPhoneAlt } from 'react-icons/fa';
import * as actions from 'redux/contacts/contacts-actions';
import { getFiltredContactsList } from 'redux/contacts/contacts-selectors';
import {
  Contacts,
  ContactsItem,
  ContactsDetails,
  Button,
} from 'components/ContactsList/ContactsList.styled';

function ContactsList() {
  const contacts = useSelector(getFiltredContactsList);
  const dispatch = useDispatch();

  return (
    <Contacts>
      {contacts.map(({ id, name, number }) => {
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
              onClick={() => dispatch(actions.deleteContact(id))}
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
