import { useState, useRef, Children } from 'react'
import './App.css'

function App() {
  const todoListRef = useRef();
  const [todoList, setTodoList] = useState([
    'Wash the dishes',
    'Go to school',
  ]);

  return (
    <div className="App">
      <input type="text" ref = {todoListRef}/>
      <button onClick={function (){
        setTodoList([...todoList, todoListRef.current.value])
      }}>Add todo</button>
      <ul>
        {
          todoList.map(function (value, index) {
            return <li>{ value }</li>
          })
        }
      </ul>
    </div>
  )
}

export default App
