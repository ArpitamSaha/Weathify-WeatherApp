import { Route, Routes } from 'react-router-dom';
import './App.scss';
import Footer from './Pages/Footer/Footer';
import HomePage from './Pages/HomePage/HomePage';
import Navbar from './Pages/Navbar/Navbar';
import MainPage from './Pages/MainPage/MainPage';

function App() {

  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="/DataPage" element={<MainPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
