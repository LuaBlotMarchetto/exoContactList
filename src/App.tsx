// import { useState } from "react";
import "./App.css";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { ContactList } from "./components/ContactList";
import { AddContact } from "./components/AddContact";
import { useState } from "react";

function App(): JSX.Element {
  const [contactList, setContactList] = useState([]);

  return (
    <>
      <div>
        <Header />
        <div className="container container--main">
          <AddContact
            contactList={contactList}
            setContactList={setContactList}
          />
          <ContactList
            contactList={contactList}
            setContactList={setContactList}
          />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default App;
