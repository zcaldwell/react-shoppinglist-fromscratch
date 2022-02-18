import React from 'react';
import { useItems } from '../context/ItemsContext';

export default function Header() {
  const { items } = useItems();

  return (
    <div>
      <h1>Shopping List</h1>
      <p>You have {items.length} items.</p>
    </div>
  );
}
