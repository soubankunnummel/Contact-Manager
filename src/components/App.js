import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import { v4 as uuid } from "uuid";
import Header from "./Header";
import AddContact from "./AddContact";
import ContactList from "./ContactList";

function App() {
  const LOCAL_STORAGE_KEY = "contacts";
  const [contacts, setContacts] = useState([]);

  const addContactHandler = (contact) => {
    setContacts([...contacts, { id: uuid(), ...contact }]);
  };

  const removeContactHandler = (id) => {
    const newContactList = contacts.filter((contact) => contact.id !== id);
    setContacts(newContactList);
  };

  useEffect(() => {
    // Retrieve data from localStorage
    const storedContacts = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if (storedContacts) {
      setContacts(storedContacts);
    }
  }, []);

  useEffect(() => {
    // Save data to localStorage
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));
  }, [contacts]);

  return (
    <div className="ui fluid container">
      <Router>
        <Header />
        <Routes>
          <Route
            path="/"
            element={<ContactList contacts={contacts} getContactId={removeContactHandler} />}
          />
          <Route
            path="/add"
            element={<AddContact addContactHandler={addContactHandler} />}
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
