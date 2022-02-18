import React, { useState } from 'react';
import ItemList from '../../components/ItemList';
import { useItems } from '../../context/ItemsContext';

export default function ShoppingList() {
  const [newItem, setNewItem] = useState('');

  const { handleDeleteItem, handleEditItem, items, handleAddItem } = useItems();
  const handleSubmit = (e) => {
    e.preventDefault();
    setNewItem('');
    handleAddItem(newItem);
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
        <ItemList
          items={items}
          handleDeleteItem={handleDeleteItem}
          handleEditItem={handleEditItem}
        />
      </div>
    </>
  );
}
