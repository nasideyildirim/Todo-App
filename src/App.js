import React, { useState } from 'react';
import './style.css';
import TodoItem from './components/TodoItem';

const todoItems = [
  { id: 1, title: 'Hello', isCompleted: true },
  { id: 2, title: 'Naside', isCompleted: false },
  { id: 3, title: 'Yildirim', isCompleted: true },
  { id: 4, title: 'Frontend', isCompleted: false },
  { id: 5, title: 'React', isCompleted: true },
];

export default function App() {
  const [toDo, setToDo] = useState(todoItems);
  // const {item} = props; 2.yöntem
  // !! : başına koyduğumuz ifadenin varlığını kontrol eder.
  function formHandlerSubmit(event) {
    event.preventDefault();
    if (!!event.target[0].value) {
      const item = {
        id: toDo.length + 1,
        title: event.target[0].value,
        isCompleted: false,
      };

      setToDo([item, ...toDo]);
      event.target[0].value = '';
    }
  }
  return (
    <div className="container">
      <div className="row">
        <div className="col-sm-8 offset-sm-2">
          <form className="mb-3" onSubmit={formHandlerSubmit}>
            <div className="mb-3">
              <label htmlFor="todoItem" className="form-label">
              Work to do :
              </label>
              <input
                name="todoItem"
                type="text"
                className="form-control"
                id="todoItem"
                placeholder="enter your to-do..."
              />
            </div>
            <button type="submit" className="btn btn-primary">
             Add
            </button>
          </form>
          <ul className="list-group">
            {toDo.map((item) => (
              <TodoItem item={item} hello="hello" />
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}