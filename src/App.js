import './App.css';
import User from './components/User';
import Clock from './components/Clock';
import Form from './components/Form';

function App() {
  const users = [
    { id: 1, name: "User 01", age: 10},
    { id: 2, name: "User 02", age: 20},
    { id: 3, name: "User 03", age: 30},
  ]

  return (
    <div>
      <User users={users}/>
      <Clock />
      <Form />
    </div>
  );
}

export default App;
