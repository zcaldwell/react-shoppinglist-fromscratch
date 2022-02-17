import React, { useState } from 'react';
import Item from './Item';

export default function ItemList({ items, handleDeleteItem, handleEditItem }) {
  return (
    <>
      <ul>
        {items.map((item) => (
          <li key={item.id}>
            {' '}
            <Item
              item={item}
              handleDeleteItem={handleDeleteItem}
              handleEditItem={handleEditItem}
            />{' '}
          </li>
        ))}
      </ul>
    </>
  );
}
