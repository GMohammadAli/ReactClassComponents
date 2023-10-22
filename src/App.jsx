import { Link } from 'react-router-dom'
import './App.css'

function App() {

  return (
    <>
      <h1 style={{
        margin:"3rem",
        fontSize: "3rem",
      }}>Welcome to React Class Components</h1>
      <ol>
        <li>
          <Link to='/videos/3'>Video 3</Link>
        </li>
        <li>
          <Link to="/videos/4">Video 4</Link>
        </li>
      </ol>
    </>
  );
}

export default App
