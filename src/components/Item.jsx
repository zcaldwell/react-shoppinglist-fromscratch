import React from 'react';
import { useState } from 'react';

export default function Item({ item, handleEditItem, handleDeleteItem }) {
  const [isEditing, setIsEditing] = useState(false);
  let itemContent;
  if (isEditing) {
    itemContent = (
      <>
        <input
          value={item.text}
          onChange={(e) => {
            handleEditItem({ ...item, text: e.target.value });
          }}
        />
        <button
          aria-label={'Save Button'}
          type="button"
          onClick={() => setIsEditing(false)}
        >
          Save
        </button>
      </>
    );
  } else {
    itemContent = (
      <>
        <p>{item.text}</p>
        <button
          aria-label={`Edit ${item.text}`}
          type="button"
          onClick={() => setIsEditing(true)}
        >
          Edit
        </button>
      </>
    );
  }
  return (
    <div>
      {itemContent}
      <button
        aria-label={`Delete ${item.text}`}
        type="button"
        onClick={() => handleDeleteItem(item.id)}
      >
        Delete
      </button>
    </div>
  );
}
