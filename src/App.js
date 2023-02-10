import './App.css';
import {useEffect, useState} from "react";
import {CardList} from "./components/card-list/card-list.component";
import {SearchBox} from "./components/search-box/search-box.component";

function App() {
  const [monsters, setMonsters] = useState([]);
  const [searchfield, setsearchfield] = useState('');

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => setMonsters(users));
  }, [])

  const onSearchChange =event => {
    setsearchfield(event.target.value);
  }

  const filteredMonsters = monsters.filter((monster) => {
    return monster.name.toLowerCase().includes(searchfield);
  });

  return (
    <div className="App">
      <h1 className="app-title">Monsters Rolodex</h1>
      <SearchBox searchChangeHandler={onSearchChange}/>
      <CardList monsters={filteredMonsters}/>
    </div>
  );
}

export default App;
