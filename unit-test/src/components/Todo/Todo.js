import { useState } from 'react'

const defaultItems = [
  {
    name : 'Item A'
  },
  {
    name : 'Item B'
  },
  {
    name : 'Item C'
  }
];

function Todo() {
  const [text, setText] = useState(null);
  const [items, setItems] = useState(defaultItems);

  const addItem = () => {
    setItems((prev) => [...prev, { name: text }]);
    setText('');
  }

  return (
    <>
      <input value={text} onChange={(e) => setText(e.target.value)} />
      <button onClick={addItem}>Add</button>
      <br/>
      <br/>

      {
        items.map((item, key) => (
          <div key={key}>{item.name}</div>
        ))
      }
    </>
  )
}

export default Todo;
