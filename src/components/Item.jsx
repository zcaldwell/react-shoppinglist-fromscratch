import React from 'react';

export default function Item({ item, handleDeleteItem, handleDeleteItem }) {
  const [isEditing, setIsEditing] = useState(false);
  let itemContent;
  if (isEditing) {
    itemContent = (
      <>
        <input
          value={item.text}
          onChange={(e) => {
            onChange({ ...item, text: e.target.value });
          }}
        />
      </>
    );
  }
  return (
    <>
      <h1>{item.text}</h1>
      <button type="button" onClick={() => handleDeleteItem(item.id)}>
        Delete
      </button>
      <button type="button" onClick={() => setEdit(true)}>
        Edit
      </button>
      {editContent})
    </>
  );
}
