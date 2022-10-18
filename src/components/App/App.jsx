import React from 'react';
// import { nanoid } from 'nanoid';
import { Global } from '@emotion/react';
import { GlobalStyles } from './GlobalStyles.styled';
import { Container } from './Container.styled';
import ContactForm from 'components/ContactForm';
import Filter from 'components/Filter';
import ContactList from 'components/ContactList';

// const STORAGE_KEY = 'contact-box';

const App = () => {
  // useEffect(() => {
  //   const storageList = localStorage.getItem(STORAGE_KEY);
  //   if (storageList !== null) {
  //     setContacts(JSON.parse(storageList));
  //   }
  // }, []);

  // useEffect(() => {
  //   localStorage.setItem(STORAGE_KEY, JSON.stringify(contacts));
  // }, [contacts]);

  return (
    <>
      <Global styles={GlobalStyles} />
      <section>
        <Container>
          <h1>Phonebook</h1>
          <ContactForm />
          <h2>Contacts</h2>
          <Filter />
          <ContactList />
        </Container>
      </section>
    </>
  );
};

export default App;
