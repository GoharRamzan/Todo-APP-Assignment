import React, { useState } from 'react';
import './App.css';

function App() {
  const [txt, setTxt] = useState('');
  const [txtList, setTxtList] = useState([]);
  const [editingIndex, setEditingIndex] = useState(null);

  const handleAdd = () => {
    if (txt.trim() !== '') {
      if (editingIndex === null) {
        setTxtList([...txtList, txt]);
      } else {
        txtList[editingIndex] = txt;
        setTxtList([...txtList]);
        setEditingIndex(null);
      }
      setTxt('');
    }
  };

  const handleDelete = (index) => {
    const newList = txtList.filter((_, i) => i !== index);
    setTxtList(newList);
  };

  const handleEdit = (index) => {
    setTxt(txtList[index]);
    setEditingIndex(index);
  };

  const handleDeleteAll = () => {
    setTxtList([]);
  };

  return (
    <div className="App">
      <h1>To-Do List</h1>
      <div className="input-container">
        <input
          type="text"
          value={txt}
          onChange={(e) => setTxt(e.target.value)}
          placeholder="Add a new task..."
        />
        <button onClick={handleAdd}>{editingIndex === null ? 'Add' : 'Save'}</button>
        {txtList.length >= 2 && (
          <button onClick={handleDeleteAll} className="delete-all">Delete All</button>
        )}
      </div>
      <ul>
        {txtList.map((task, index) => (
          <li key={index} className="list-item">
            {task}
            <div className="button-group">
              <button onClick={() => handleEdit(index)} className="edit-button">Edit</button>
              <button onClick={() => handleDelete(index)} className="delete-button">Delete</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
