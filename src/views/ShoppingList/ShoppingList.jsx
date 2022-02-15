import React, { useReducer, useState } from 'react';
import ItemList from '../../components/ItemList';

const initialItems = [
  { id: 0, text: 'Meat 🍖', done: false },
  { id: 1, text: 'Potatoes 🥔', done: false },
  { id: 2, text: 'Broccoli 🥦', done: false },
];

function itemReducer(items, action) {
  switch (action.type) {
    case 'add': {
      return [...items, { id: action.id, text: action.text }];
    }
    case 'delete': {
      return items.filter((item) => item.id !== action.id);
    }
    default: {
      throw Error(`Unknown action: ${action.type}`);
    }
  }
}

export default function ShoppingList() {
  const [items, dispatch] = useReducer(itemReducer, initialItems);
  const [newItem, setNewItem] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setNewItem('');
    handleAddItem(newItem);
  };

  const handleAddItem = (text) => {
    dispatch({ type: 'add', id: items.length + 1, text });
  };

  const handleDeleteItem = (taskId) => {
    dispatch({ type: 'delete', id: taskId });
  };

  const handleEditItem = (task) => {
    dispatch({ type: 'edit', task });
  };

  return (
    <>
      <div>
        <form onSubmit={handleSubmit}>
          <input
            placeholder="Enter item"
            value={newItem}
            onChange={(e) => setNewItem(e.target.value)}
          />
          <button type="submit">Add Item</button>
        </form>
      </div>
      <div>
        <ItemList items={items} handleDeleteItem={handleDeleteItem} />
      </div>
    </>
  );
}
