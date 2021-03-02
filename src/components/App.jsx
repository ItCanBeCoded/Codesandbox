import React from "react";
import Contact from "/src/contacts.js";

function Card(props) {
  return (
    <div className="card">
      <div className="top">
        <h2 className="name">{props.name}</h2>
        <img className="circle-img" src={props.web} alt="avatar_img" />
      </div>
      <div className="bottom">
        <p className="info">{props.phone}</p>
        <p className="info">{props.email}</p>
      </div>
    </div>
  );
}

function App() {
  return (
    <div>
      <h1 className="heading">My Contacts</h1>
      <Card
        name={Contact[0].name}
        email={Contact[0].email}
        phone={Contact[0].phone}
        web={Contact[0].imgURL}
      />
      <Card
        name={Contact[1].name}
        email={Contact[1].email}
        phone={Contact[1].phone}
        web={Contact[1].imgURL}
      />
      <Card
        name={Contact[2].name}
        email={Contact[2].email}
        phone={Contact[2].phone}
        web={Contact[2].imgURL}
      />
    </div>
  );
}

export default App;
