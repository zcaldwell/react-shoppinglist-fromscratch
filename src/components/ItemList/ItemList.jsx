import React, { useState } from 'react';
import Item from '../Item/Item';
import styles from './ItemList.css';

export default function ItemList({ items, handleDeleteItem, handleEditItem }) {
  const { listItems } = styles;

  return (
    <>
      <ul>
        {items.map((item) => (
          <li key={item.id} className={listItems}>
            <div>
              <Item
                item={item}
                handleDeleteItem={handleDeleteItem}
                handleEditItem={handleEditItem}
              />
            </div>
          </li>
        ))}
      </ul>
    </>
  );
}
