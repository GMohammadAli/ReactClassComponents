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
        <li>
          <Link to='/videos/5n6'>Video 5 & 6</Link>
        </li>
        <li>
          <Link to='/videos/7n8n9'>Video 7, 8 & 9</Link>
        </li>
        <li>
          <Link to='/videos/10'>Video 10</Link>
        </li>
        <li>
          <Link to='/videos/12'>Vidoe 12</Link>
        </li>
      </ol>
    </>
  );
}

export default App
