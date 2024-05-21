import logo from './logo.svg';
import './App.css';
import Users from './User';

function App() {
  return (
    <div className="App">
      <h1>This is component</h1>
      <Users data={{ name: 'Ankit Sharma', age: '30' }} />
    </div>
  );
}

export default App;
