import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';

//pages & components
import Todo from './pages/Todo';
import store from './store.jsx';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div className='pages'>
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Todo />
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
