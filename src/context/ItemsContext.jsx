import { createContext, useContext, useState, useReducer } from 'react';

const initialItems = [
  { id: 0, text: 'Meat' },
  { id: 1, text: 'Carrots' },
  { id: 2, text: 'Broccoli' },
];

function itemReducer(items, action) {
  switch (action.type) {
    case 'add': {
      return [...items, { id: action.id, text: action.text }];
    }
    case 'delete': {
      return items.filter((item) => item.id !== action.id);
    }
    case 'edit': {
      return items.map((item) => {
        if (item.id === action.task.id) {
          return action.task;
        }
        return item;
      });
    }
    default: {
      throw Error(`Unknown action: ${action.type}`);
    }
  }
}

export const ItemsContext = createContext();

const ItemsProvider = ({ children }) => {
  const [items, dispatch] = useReducer(itemReducer, initialItems);

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
    <ItemsContext.Provider
      value={{
        items,
        handleAddItem,
        handleDeleteItem,
        handleEditItem,
      }}
    >
      {children}
    </ItemsContext.Provider>
  );
};

export default ItemsProvider;

export const useItems = () => {
  const context = useContext(ItemsContext);

  if (context === undefined) {
    throw new Error('Items must be used within provider');
  }
  return context;
};
