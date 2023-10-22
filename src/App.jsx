import { Link } from 'react-router-dom'
import './App.css'

function App() {

  return (
    <>
      <h1>Welcome to React Class Components</h1>
      <ol>
        <li>
          <Link to='/videos/3'>Video 3</Link>
        </li>
      </ol>
    </>
  );
}

export default App
