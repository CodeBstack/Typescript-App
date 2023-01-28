import React, { useState } from 'react';
import {
  DragDropContext,
  DropResult,
} from 'react-beautiful-dnd';
import './App.scss';
import InputField from './components/InputField';
import { Todo } from './components/model';
import TodoList from './components/TodoList';

const App: React.FC = () => {
  // React.FC means React function component

  const [todo, setTodo] = useState<string>('');
  const [todos, setTodos] = useState<Todo[]>([]); //Array of an Interface
  const [completedTodos, setcompletedTodos] =
    useState<Todo[]>([]);

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();

    if (todo) {
      setTodos([
        ...todos,
        {
          id: Date.now(),
          isDone: false,
          todo,
        },
      ]);
    }

    setTodo('');
  };

  const onDragEnd = (result: DropResult) => {
    const { source, destination } = result;

    if (!destination) return;
    if (
      destination.droppableId ===
        source.droppableId &&
      destination.index === source.index
    )
      return;

    let add, //this is the dragged todo.
      active = todos,
      complete = completedTodos;

    if (source.droppableId === 'TodoList') {
      add = active[source.index];
      active.splice(source.index, 1);
    } else {
      add = complete[source.index];
      complete.splice(source.index, 1);
    }

    if (destination.droppableId === 'TodoList') {
      active.splice(destination.index, 0, add);
    } else {
      complete.splice(destination.index, 0, add);
    }

    setcompletedTodos(complete);
    setTodos(active);
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div className="App">
        <span className="heading">Taskify</span>
        <InputField
          todo={todo}
          setTodo={setTodo}
          handleAdd={handleAdd}
        />

        {/* TODOLIST */}
        <TodoList
          todos={todos}
          setTodos={setTodos}
          completedTodos={completedTodos}
          setcompletedTodos={setcompletedTodos}
        />
      </div>
    </DragDropContext>
  );
};

export default App;
