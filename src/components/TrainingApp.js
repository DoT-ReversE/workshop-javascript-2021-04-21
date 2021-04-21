import { useState } from 'react';
import User from './User';
import Clock from './Clock';
import Form from './Form';

function TrainingApp() {
  const users = [
    { id: 1, name: "User 01", age: 10},
    { id: 2, name: "User 02", age: 20},
    { id: 3, name: "User 03", age: 30},
  ]

  const [message, setMessage] = useState("");

  function sayHi(name) {
    setMessage("Hello " + name + "!!!!");
  }

  return (
    <div>
      <User users={users}/>
      <Clock title="Current Date : " />
      <Form onSayHi={sayHi}/>
      <p>{message}</p>
    </div>
  );
}

export default TrainingApp;
