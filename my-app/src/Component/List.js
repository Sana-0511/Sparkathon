import React, { useState } from "react";
import "./List.css";

const fullDatabase = [
  { id: 1, name: "Apples" },
  { id: 2, name: "Bananas" },
  { id: 3, name: "Milk" },
  // Add more items to the database
];

export default function List() {
  const [items, setItems] = useState([]);
  const [suggestions, setSuggestions] = useState([]);

  function handleAddItem(item) {
    setItems(items => [...items, item]);
    setSuggestions([]);
  }

  function handleSearch(input) {
    const filteredSuggestions = fullDatabase.filter(
      item => item.name.toLowerCase().includes(input.toLowerCase())
    );
    setSuggestions(filteredSuggestions);
  }

  function handleDeleteItem(id) {
    setItems(items => items.filter(item => item.id !== id));
  }

  function handleClearAll() {
    const deleteItems = window.confirm("Are you sure you wish to delete all items?");
    if (deleteItems) setItems([]);
  }

  return (
    <div className="app">
      <Header />
      <AddItem onAddItem={handleAddItem} handleSearch={handleSearch} suggestions={suggestions} />
      <Items items={items} onDeleteItem={handleDeleteItem} />
      {items.length > 0 && (
        <button onClick={handleClearAll} className="btn mt-20">
          Clear All
        </button>
      )}
    </div>
  );
}

function Header() {
  return <h1 className="border-bottom">🛍 Shopping List</h1>;
}

function AddItem({ onAddItem, handleSearch, suggestions }) {
  const [item, setItem] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    if (!item) return;
    const newItem = {
      name: item,
      id: Date.now()
    };
    onAddItem(newItem);
    setItem("");
  }

  return (
    <div className="border-bottom">
      <form className="form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter Item"
          value={item}
          onChange={e => {
            setItem(e.target.value);
            handleSearch(e.target.value);
          }}
        />
        <button className="btn">+</button>
      </form>
      {suggestions.length > 0 && (
        <ul className="suggestions">
          {suggestions.map(suggestion => (
            <li key={suggestion.id} onClick={() => onAddItem(suggestion)}>
              {suggestion.name}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

function Items({ items, onDeleteItem }) {
  return (
    <ul className="items">
      {items.map(item => (
        <li key={item.id}>
          {item.name} <button onClick={() => onDeleteItem(item.id)}>❌</button>
        </li>
      ))}
    </ul>
  );
}