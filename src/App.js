import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';

//pages & components
import Navbar from './components/Navbar';
import Todo from './pages/Todo';
// import ToDoForm from './pages/TodoForm';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        {/* <Navbar/> */}
        <div className='pages'>
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Todo />
                  {/* <TodoForm /> */}
                </>
              }
            />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
