import React from 'react';
import { Droppable } from 'react-beautiful-dnd';
import { Todo } from './model';
import SingleTodo from './SingleTodo';
import './styles.scss';

interface Props {
  todos: Todo[];
  setTodos: React.Dispatch<
    React.SetStateAction<Todo[]>
  >;
  completedTodos: Todo[];
  setcompletedTodos: React.Dispatch<
    React.SetStateAction<Todo[]>
  >;
}

const TodoList = ({
  todos,
  setTodos,
  completedTodos,
  setcompletedTodos,
}: Props) => {
  return (
    <div className="container">
      <Droppable droppableId="TodoList">
        {(provided, snapshot) => (
          <div
            className={`todos ${
              snapshot.isDraggingOver
                ? 'dragactive'
                : ''
            }`}
            ref={provided.innerRef}
            {...provided.droppableProps}
          >
            <span className="todos__heading">
              Active Tasks
            </span>
            {todos.map((todo, index) => (
              <SingleTodo
                index={index}
                key={todo.id}
                todo={todo}
                todos={todos}
                setTodos={setTodos}
              />
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>

      <Droppable droppableId="TodoRemove">
        {(provided, snapshot) => (
          <div
            className={`todos remove ${
              snapshot.isDraggingOver
                ? 'dragcomplete'
                : ''
            }`}
            ref={provided.innerRef}
            {...provided.droppableProps}
          >
            {' '}
            <span className="todos__heading">
              Completed Tasks
            </span>
            {completedTodos.map((todo, index) => (
              <SingleTodo
                index={index}
                key={todo.id}
                todo={todo}
                todos={completedTodos}
                setTodos={setcompletedTodos}
              />
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </div>
  );
};

export default TodoList;
