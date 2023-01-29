import { useState } from "react";

function App() {
  const [name, setName] = useState("Fatih");
  const [age, setAge] = useState(21);
  const [friends, setFriends] = useState(["Ahmet", "Eren"]);
  const [address, setAddress] = useState({ title: "Bursa", zip: 16789 });

  console.log(age, name);
  return (
    <div className="App">
      <h1> Merhaba {name} </h1>
      <h2>{age}</h2>

      <button onClick={() => setName("Erden")}> Adı </button>
      <button onClick={() => setAge(23)}> Yaşı </button>

      <hr />
      <br></br>
      <h2>Dostlar</h2>
      {friends.map((friend, index) => (
        <div key={index}>{friend} </div>
      ))}
      <button onClick={() => setFriends([...friends, "Sadık"])}> Dost Ekle
      </button>
      <hr />
      <br></br>
      <h2>Address</h2>
      <div>{address.title} {address.zip}</div>

      <button onClick={() => setAddress({ ...address, title: "İstanbul", zip: 34567 })}> Yeni Address
      </button>

    </div >
  );
}

export default App;
