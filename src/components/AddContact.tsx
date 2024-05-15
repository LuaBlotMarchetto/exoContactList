import React, { useState } from "react";

export function AddContact(props: Props): JSX.Element {
  const [newContact, setNewContact] = useState<Contact>({
    name: "",
    email: "",
  });

  function handleInputChange(
    event: React.ChangeEvent<HTMLInputElement>,
    field: string
  ) {
    setNewContact((prevContact) => ({
      ...prevContact,
      [field]: event.target.value,
    }));
  }

  function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const updatedContactList: Contact[] = [...props.contactList, newContact];
    props.setContactList(updatedContactList);
  }

  return (
    <div className="card">
      <form onSubmit={onSubmit}>
        <h1>Add a contact</h1>
        <input
          type="text"
          placeholder="Enter your name"
          value={newContact.name}
          onChange={(e) => handleInputChange(e, "name")}
        ></input>
        <input
          type="text"
          placeholder="Enter your email adress"
          value={newContact.email}
          onChange={(e) => handleInputChange(e, "email")}
        ></input>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
