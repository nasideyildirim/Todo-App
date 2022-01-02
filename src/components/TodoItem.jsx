import React from 'react';

function TodoItem({item, ...props}) {
  return (
    <li
      key={item.id}
      className={`list-group-item ${
        item.isCompleted && 'text-decoration-line-through text-primary'
      }`}
    >
      {item.title}
    </li>
  );
}

export default TodoItem; // obje olarak gönderiliyor, app içinde import ederken {todoItems} şeklinde import edilir. farklı bir isimle çağrılamaz.