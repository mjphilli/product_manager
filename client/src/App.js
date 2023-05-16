// import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import DashboardPage from './views/DashboardPage';
import DetailsPage from './views/DetailsPage';
import UpdatePage from './views/UpdatePage';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<DashboardPage />} />
        <Route path="/:id" element={<DetailsPage />} />
        <Route path="/:id/edit" element={<UpdatePage />} />
      </Routes>
    </div>
  );
}

export default App;
