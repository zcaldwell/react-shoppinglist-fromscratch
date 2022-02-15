import React from 'react';

export default function ItemList({ items, handleDeleteItem }) {
  return (
    <>
      <ul>
        {items.map((item) => (
          <li key={item.id}>
            <h1>{item.text}</h1>
            <button type="button" onClick={() => handleDeleteItem(item.id)}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </>
  );
}
