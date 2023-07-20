import React, { useState } from 'react';
import TaskList from './TaskList.js';
import CategoryFilter from './CategoryFilter.js';
import NewTaskForm from './NewTaskForm.js';

const App = () => {
  const [tasks, setTasks] = useState([
    
      { id: 1, 
        text: "Buy rice",
        category: "Food",
      },
      { id: 2, 
        text: "Save a tenner",
        category: "Money",
      },
      { id: 3, 
        text: "Build a todo app",
        category: "Code",
      },
      { id: 4, 
        text: "Build todo API",
        category: "Code",
      },
      { id: 5, 
        text: "Get an ISA",
        category: "Money",
      },
      { id: 6, 
        text: "Cook rice",
        category: "Food",
      },
      { id: 6, 
        text: "Tidy house",
        category: "Misc",
      },
    
    
  ]);

  const [selectedCategory, setSelectedCategory] = useState('All');

  const handleCategoryFilter = (category) => {
    setSelectedCategory(category);
  };

  const handleTaskFormSubmit = (task) => {
    const newTask = {
      id: tasks.length + 1,
      text: task.text,
      category: task.category,
    };
    setTasks([...tasks, newTask]);
  };

  const handleTaskDelete = (taskId) => {
    const updatedTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(updatedTasks);
  };

  const filteredTasks = selectedCategory === 'All'
    ? tasks
    : tasks.filter((task) => task.category === selectedCategory);

  return (
    <div>
      <h1>Task List App</h1>
      <CategoryFilter
        categories={['All', 'Category 1', 'Category 2', 'Category 3']}
        selectedCategory={selectedCategory}
        onCategoryFilter={handleCategoryFilter}
      />
      <TaskList tasks={filteredTasks} onDelete={handleTaskDelete} />
      <NewTaskForm categories={['Category 1', 'Category 2', 'Category 3']} onTaskFormSubmit={handleTaskFormSubmit} />
    </div>
  );
};

export default App;