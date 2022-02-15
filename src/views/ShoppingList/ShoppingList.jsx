import React from 'react';
import ItemList from '../../components/ItemList';

const initialItems = [];

function itemReducer(items, action) {
  switch (action.type) {
    case 'add': {
      return [...items, { id: action.id, item: action.text }];
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
  return <div></div>;
}
