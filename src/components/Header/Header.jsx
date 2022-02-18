import React from 'react';
import { useItems } from '../../context/ItemsContext';
import styles from './Header.css';

export default function Header() {
  const { header } = styles;
  const { items } = useItems();

  return (
    <div className={header}>
      <h1>Shopping List</h1>
      <p>You have {items.length} items.</p>
    </div>
  );
}
