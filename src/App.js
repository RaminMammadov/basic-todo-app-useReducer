import './App.css';
import { useReducer } from 'react';


function reducer(state,action) {
    switch(action.type) {
      case 'SET_TODO' :
      return {
        ...state,   
        todo: action.value
      }

      case 'ADD_TODO' :
      return {
        ...state,   
        todos: [action.todo,...state.todos],
        todo: ''
      }

      default:

    }
}

function App() {
  console.log('ok')
  const [state,dispatch] = useReducer(reducer, {
    todos: [],
    todo: ''
  })


  const submitHandle = (e) => {
    e.preventDefault();
    dispatch({
      type:'ADD_TODO',
      todo: state.todo
    })
  };

  const inputChange = (e) => {
    dispatch({
      type:'SET_TODO',
      value: e.target.value
    })
  };
  return (
    <div className="App">
      <header className="App-header">
        <h1>To do App</h1>
        <form onSubmit={submitHandle}>
          <input type='text' value={state.todo}  onChange={inputChange} />
          <input type='submit' value='Add'/>
        </form>

        <ul>
          {
            state.todos.map((todo,index) => {
              return <li key={index}>{todo}</li>
            })
          }
        </ul>

      </header>
    </div>
  );
}

export default App;
