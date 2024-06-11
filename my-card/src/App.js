import React from 'react';
import './Component/Task-one/Card.css'
import Card from './Component/Task-one/Card';
import Contacts from './Component/Task-two/Contacts';
// import Navbar from './Component/Navbar'; 
// import ContactForm from './Task-two/ContactForm';
// import Contact from './Task-two/Contact';
// import ContactList from './Task-two/ContactList';

const App = () => {
  return (
    <div>
      <Card /> 
      <Contacts />
      {/* <Navbar /> */}
   </div>
  );
};

export default App;