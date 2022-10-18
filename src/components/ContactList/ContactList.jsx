// import PropTypes from 'prop-types';
import {
  ContactListBox,
  ContactListItem,
  ContactListBtn,
  ContactListText,
} from './ContactList.styled';
import { getContacts, getFilterValue } from 'redux/selectors';
import { deleteContact } from 'redux/contactsSlice';
import { useSelector, useDispatch } from 'react-redux';

const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);
  console.log(contacts);
  const filter = useSelector(getFilterValue);
  console.log(filter);

  const filterContactsOnChange = () => {
    if (!filter) {
      return contacts;
    }
    return contacts.filter(contact =>
      contact.name.toUpperCase().includes(filter.toUpperCase())
    );
  };

  // const sortContactList = contacts =>
  //   contacts.sort((firstContact, secondContact) =>
  //     firstContact.name.localeCompare(secondContact.name)
  //   );

  return (
    <ContactListBox>
      {filterContactsOnChange().map(({ id, name, number }) => (
        <ContactListItem key={id}>
          <ContactListText>Name: {name}</ContactListText>
          <ContactListText>Number: {number}</ContactListText>
          <ContactListBtn
            type="button"
            onClick={() => {
              dispatch(deleteContact(id));
            }}
          >
            Delete contact
          </ContactListBtn>
        </ContactListItem>
      ))}
    </ContactListBox>
  );
};

// ContactList.propTypes = {
//   contacts: PropTypes.arrayOf(
//     PropTypes.shape({
//       id: PropTypes.string.isRequired,
//       name: PropTypes.string.isRequired,
//       number: PropTypes.string.isRequired,
//     })
//   ),
//   deleteOnClick: PropTypes.func.isRequired,
// };

export default ContactList;
