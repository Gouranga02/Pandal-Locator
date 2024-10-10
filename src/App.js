import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import PandalList from './components/PandalList';
import PandalListPage from './components/PandalListPage';
import Gallery from './components/Gallery';
import Reviews from './components/Reviews';
import Team from './components/Team';
import Footer from './components/Footer';
import PandalForm from './components/PandalForm';
import PandalPreview from './components/PandalPreview';
import Admin from './components/Admin/Admin'; // Import your Admin component
import AdminHomePage from './components/Admin/AdminHomePage'; // Import AdminHomePage component

const App = () => {
  const [pandals, setPandals] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPandals = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/pandals/getAll');
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setPandals(data);
      } catch (error) {
        console.error('Fetch error:', error);
        setError('Failed to fetch pandals. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    fetchPandals();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/admin/home" element={<AdminHomePage />} /> {/* Admin Home Page */}
          <Route path="/admin/login" element={<Admin />} /> {/* Admin Login Page */}
          <Route path="/admin/addpandal" element={<PandalForm />} /> {/* Pandal Form */}
          <Route path="/pandals" element={<PandalListPage pandals={pandals} />} />
          <Route path="/pandals/:id" element={<PandalPreview />} />
          <Route path="/" element={
            <>
              <Header />
              <PandalList pandals={pandals} />
              <Gallery />
              <Team />
              <Reviews />
              <Footer />
            </>
          } />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
