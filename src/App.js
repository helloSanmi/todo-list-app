import './App.css';
import TodoApp from './Components/TodoApp';
import 'font-awesome/css/font-awesome.min.css';

function App() {
  return (
    <div className="App">
      <div className='app-form'>
        <div className='App-header'>
          <h1>To-Do App</h1>
        </div>
        <div className='todo'>
          <TodoApp />
        </div>
      </div>
    </div>
  );
}

export default App;
