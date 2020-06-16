import React from 'react';
import logo from './logo.svg';
import './App.css';

var UserNameValue;

function SaveUserName(event) {
  UserNameValue=event.target.value;
}

function PersistName() {
  console.log(UserNameValue);
  localStorage.setItem('UserName',UserNameValue);
}

function RetrieveName() {
  UserNameValue = localStorage.getItem("UserName");
}

RetrieveName();

function App() {
  return (
    <div className="App">
      <div>
        Welcome {UserNameValue} !<br></br>
        Enter your name
        <br>
        </br>
        <input name="UserNameInput" defaultValue={UserNameValue} onChange={(event)=>SaveUserName(event)}>
        </input>
        <button onClick={()=>PersistName()}>
          Save
        </button>

        <br>
        </br>

        Where were you born ?
        <br></br>
        
        <input name="BirthCity" onChange={}>
        </input>

      </div>
    </div>
  );
}

export default App;
