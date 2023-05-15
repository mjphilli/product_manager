// import logo from './logo.svg';
import './App.css';
import { Link, Route, Routes } from 'react-router-dom';
import DashboardPage from './views/DashboardPage';
import CreatePage from './views/CreatePage';
import DetailsPage from './views/DetailsPage';
import UpdatePage from './views/UpdatePage';

function App() {
  return (
    <div className="App">
      {/* <h1>Product Manager</h1>
      <p> <Link to="/"> Dashboard</Link> | 
      <Link to="/new"> Create a new product</Link>
      </p> */}

      <Routes>
        <Route path="/" element={<DashboardPage />} />
        {/* <Route path="/new" element={<CreatePage />} /> */}
        <Route path="/:id" element={<DetailsPage />} />
        <Route path="/edit/:id" element={<UpdatePage />} />
      </Routes>
    </div>
  );
}

export default App;
