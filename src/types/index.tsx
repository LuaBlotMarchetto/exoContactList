type Contact = {
  name: string,
  email: string,
};

type Props = {
  contactList: Contact[],
  setContactList: React.Dispatch<React.SetStateAction<Contact[]>>,
};
