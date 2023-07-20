import React, { useState } from 'react';

const NewTaskForm = ({ categories, onTaskFormSubmit }) => {
  const [text, setText] = useState('');
  const [category, setCategory] = useState(categories[0]);

  const handleTextChange = (e) => {
    setText(e.target.value);
  };

  const handleCategoryChange = (e) => {
    setCategory(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onTaskFormSubmit({ text, category });
    setText('');
    setCategory(categories[0]);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={text} onChange={handleTextChange} />
      <select value={category} onChange={handleCategoryChange}>
        {categories.map((category) => (
          <option key={category} value={category}>{category}</option>
        ))}
      </select>
      <button type="submit">Add Task</button>
    </form>
  );
};

export default NewTaskForm;