// import Contact from "./Contacts";
const ContactList = ({ contacts, deleteContact, editContact }) => (
  <div>
    <h2>Contacts</h2>
    {contacts.map((contact, index) => (
      <div key={index}>
        <p>
          <strong>Name:</strong> {contact.name}
        </p>
        <p>
          <strong>Email:</strong> {contact.email}
        </p>
        <p>
          <strong>Phone:</strong> {contact.phone}
        </p>
        <button onClick={() => editContact(contact)}>Edit</button>
        <button onClick={() => deleteContact(contact.id)}>Delete</button>
      </div>
    ))}
  </div>
);

export default ContactList;
