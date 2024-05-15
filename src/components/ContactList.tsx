import { useState, useEffect } from "react";

export function ContactList(props: Props): JSX.Element {
  const [numberOfContacts, setNumberOfContacts] = useState<number>();

  useEffect(() => {
    const fetchNumberOfContacts = () => {
      const nb = props.contactList.length;
      setNumberOfContacts(nb);
    };
    fetchNumberOfContacts();
  }, [props.contactList]);

  function deleteContact(contact: Contact) {
    const updatedContactList: Contact[] = props.contactList.filter(
      (validContacts) => validContacts !== contact
    );
    props.setContactList(updatedContactList);
  }

  return (
    <div className="card ">
      <h1>{numberOfContacts} contacts</h1>
      {props.contactList.map((contact: Contact) => (
        <div className="card card--small" key={contact.email}>
          <div>
            <p>{contact.name}</p>
            <p>{contact.email}</p>
          </div>
          <button onClick={() => deleteContact(contact)}>delete</button>
        </div>
      ))}
    </div>
  );
}
