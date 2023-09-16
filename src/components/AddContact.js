import React, { Component } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate hook

export default function AddContact(props) {
  const [state, setState] = React.useState({
    name: '',
    email: '',
  });

  const navigate = useNavigate(); // Initialize the navigate function

  const add = (e) => {
    e.preventDefault();
    if (state.name === '' || state.email === '') {
      alert('Please complete the form');
      return;
    }
    props.addContactHandler(state);
    setState({ name: '', email: '' });
    navigate('/'); // Use the navigate function for redirection
  };

  return (
    <div className='ui main container'>
      <h2>Add Contacts</h2>
      <form className='ui form' action='' onSubmit={add}>
        <div className='field'>
          <label htmlFor=''>Name</label>
          <input
            type='text'
            name='name'
            id=''
            placeholder='Name..'
            value={state.name}
            onChange={(e) => setState({ ...state, name: e.target.value })}
          />
        </div>
        <div className='field'>
          <label htmlFor=''>Email</label>
          <input
            type='text'
            name='email'
            id=''
            placeholder='Email..'
            value={state.email}
            onChange={(e) => setState({ ...state, email: e.target.value })}
          />
        </div>
        <button className='ui button blue'>Add</button>
      </form>
    </div>
  );
}
