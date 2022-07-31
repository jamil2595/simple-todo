import './App.css';
import {useState} from 'react';

function App() {
  const [item, setItem] = useState('');
  const [items, setItems] = useState([]);

  const pushToArray = (value) => {
    if (value.trim().length) {
      setItems([...items, value.trim()]);
      setItem('');
    }
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') pushToArray(item);
  };

  const removeItemFromList = (index) => {
    const newItems = [...items];
    newItems.splice(index, 1);
    setItems(newItems);
  };

  return (
    <div className="App">
      <header className="App-header">
        <div className="App-inputs">
          <input
            autoFocus
            placeholder="Type your todo here..."
            value={item}
            onChange={e => setItem(e.target.value)}
            onKeyPress={e => handleKeyPress(e)}
            data-cy="todo-input"
            />
          <button data-cy="todo-submit" onClick={e => pushToArray(item)}>+</button>
        </div>

        <ol>
          {
            items.map((item, index) => {
              return (
                <li key={index} data-cy="todo-list" >
                  <span data-cy="todo-added-task">{item}</span>
                  <button data-cy="todo-complete-task" className="App-tick" onClick={() => removeItemFromList(index)}>✅</button>
                </li>
              );
            })
          }
        </ol>
      </header>
    </div>
  );
}

export default App;
