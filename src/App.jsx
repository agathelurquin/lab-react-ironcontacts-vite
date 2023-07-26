import "./App.css";
import contacts from "./contacts.json";

let firstFiveContacts = contacts.slice(0, 5);
function App() {
  return (
    <div className="App">
      <h1>LAB | React IronContacts</h1>
      <table>
        <thead>
          <tr>
            <th>Picture</th>
            <th>Name</th>
            <th>Populatiry</th>
            <th>Won an Oscar</th>
            <th>Won an Emmy</th>
          </tr>
        </thead>
        <tbody>
          {firstFiveContacts.map((contact) => {
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
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default App;
