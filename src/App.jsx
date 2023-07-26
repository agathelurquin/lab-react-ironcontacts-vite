import React, { useState } from "react";
import "./App.css";
import contactsJson from "./contacts.json";

let firstFiveContacts = contactsJson.slice(0, 5);
console.log("contacts -----------", contactsJson);

function App() {
  const [contacts, setContacts] = useState(firstFiveContacts);

  function handleRandomContact() {
    let randomNumber = Math.floor(Math.random() * contactsJson.length);
    let randomContact = contactsJson[randomNumber];
    console.log(randomContact);

    setContacts([...contacts, randomContact]);
  }

  function handleSortName() {
    const copy = [...contacts];
    copy.sort((a, b) => a.name.localeCompare(b.name));
    setContacts(copy);
  }

  function handleSortPopularity() {
    const copy = [...contacts];
    copy.sort((a, b) => b.popularity - a.popularity);
    setContacts(copy);
  }

  function handleDelete(id) {
    const copy = [...contacts];
    copy.splice(id, 1);
    setContacts(copy);
  }

  return (
    <div className="App">
      <h1>LAB | React IronContacts</h1>
      <button onClick={handleRandomContact}>Add Random Contact</button>
      <button onClick={handleSortName}>Sort by Name</button>
      <button onClick={handleSortPopularity}>Sort by Popularity</button>
      <table>
        <thead>
          <tr>
            <th>Picture</th>
            <th>Name</th>
            <th>Populatiry</th>
            <th>Won an Oscar</th>
            <th>Won an Emmy</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {contacts.map((contact) => {
            return (
              <tr key={contact.id}>
                <td>
                  <img src={contact.pictureUrl} alt="contact-picture" />
                </td>
                <td>
                  <h2>{contact.name}</h2>
                </td>
                <td>
                  <p>{contact.popularity}</p>
                </td>
                <td> {contact.wonOscar && contact.wonOscar && "🏆"}</td>
                <td>{contact.wonEmmy && contact.wonEmmy && "🏆"}</td>
                <td>
                  <button onClick={handleDelete}>Delete</button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default App;
