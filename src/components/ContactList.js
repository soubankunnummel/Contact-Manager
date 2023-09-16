import React from 'react';
import { Link } from 'react-router-dom';
import ContactCard from './ContactCard';

function ContactList(props) {
  const deleteContactHandler = (id) => {
    props.getContactId(id);
  };

  const renderContactList = props.contacts.map((contact) => (
    <ContactCard key={contact.id} contact={contact} clickHandler={deleteContactHandler} />
  ));

  return (
    <div className='ui celled list container'>
      <Link to='/add'>
        <button className='ui blue button right floated'>Add Contact</button>
      </Link>
      <h1>Contact List</h1>
      {renderContactList}
    </div>
  );
}

export default ContactList;
